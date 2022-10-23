import { AppEvent, AppEventConst } from './../../../event/app.event';

export default async (parent, { content, comment, sentence, paragraph,
  image, position, url }, ctx) => {
  if (!ctx.user) {
    throw new Error('You must be logged in');
  }

  const highlightModel = ctx.db.model('highlight');
  let highlight = await highlightModel.findOneAndUpdate({ 
      creator: ctx.user, content
    },
    { 
      creator: ctx.user, content, comment, sentence, paragraph,
      image, position, url,
      deletedAt: null
    }, {
    upsert: true
  });
  //emit event 
  console.log('addNewVocabemit----------------->>>');
  AppEvent.emit(AppEventConst.addNewVocab, { content, creator: ctx.user });
  if (!highlight) {
    highlight = await highlightModel.findOne({
      creator: ctx.user, content
    }).lean();
  }
  console.log(highlight, 111);
  return highlight;
};
