export default async (parent, { content }, ctx) => {
  if (!ctx.user) {
    throw new Error('You must be logged in');
  }
  const highlightModel = ctx.db.model('highlight');
  let rs = await highlightModel.findOne({
    creator: ctx.user, content
  }).lean();
  return rs;
};
