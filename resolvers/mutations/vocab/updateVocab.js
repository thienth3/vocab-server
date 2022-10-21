export default async (parent, { content, comment, image}, ctx) => {
  if (!ctx.user) {
    throw new Error('You must be logged in');
  }

  const highlightModel = ctx.db.model('highlight');
  let data = {comment, image};
  // if (image) {
  //   data.image = image;
  // }
  await highlightModel.update({ 
      creator: ctx.user, content
    }, data);
  
  return await highlightModel.findOne({
    creator: ctx.user, content
  }).lean();
};
