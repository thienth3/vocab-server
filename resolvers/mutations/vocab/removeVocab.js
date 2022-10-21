export default async (parent, { content }, ctx) => {
  if (!ctx.user) {
    throw new Error('You must be logged in');
  }
  
  const highlightModel = ctx.db.model('highlight');
  // const referenceModel = ctx.db.model('reference');
  await highlightModel.findOneAndUpdate({ creator: ctx.user, content }, {
    deletedAt: new Date()
  });
  // await referenceModel.findOneAndRemove({ creator: ctx.user, content });
  
  return true;
};
