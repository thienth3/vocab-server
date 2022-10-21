export default async (parent, { references, url}, ctx) => {
  if (!ctx.user) {
    throw new Error('You must be logged in');
  }
  
  const referenceModel = ctx.db.model('reference');
  const highlightModel = ctx.db.model('highlight');
  let contentInPage = new Map();
  for (let ref of references) {
    let rs = await highlightModel.findOne({
      creator: ctx.user, content: ref.content
    }).lean();
    contentInPage.set(ref.content, ref.content);
    let reference = await referenceModel.findOneAndUpdate({ 
      creator: ctx.user, sentence: ref.sentence, url,
      content: ref.content
    },
    { 
      creator: ctx.user,
      content: ref.content, 
      sentence: ref.sentence, 
      paragraph: ref.paragraph, 
      position: ref.position, 
      url: url,
      highlightRef: rs._id
    }, {
      upsert: true
    });
  }
  // update count in highlight
  console.log('contentInPage.values()', contentInPage.values())
  for (let content of contentInPage.values()) {
    let count = await referenceModel.find({
      creator: ctx.user,
      content: content
    }).count();
    await highlightModel.where({ 
      creator: ctx.user, content
    }).update({ count: count, random: Math.random() })
  }

  return true;
};
