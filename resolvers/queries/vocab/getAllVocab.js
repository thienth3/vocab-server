export default async (parent, rq, ctx) => {
  if (!ctx.user) {
    throw new Error('You must be logged in');
  }
  const highlightModel = ctx.db.model('highlight');
  return highlightModel.find({
    creator: ctx.user,
    deletedAt: null
  }).lean();
};
