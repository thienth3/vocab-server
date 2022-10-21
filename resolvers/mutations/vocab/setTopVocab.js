export default async (parent, { content }, ctx) => {
  if (!ctx.user) {
    throw new Error('You must be logged in');
  }
  
  const highlightModel = ctx.db.model('highlight');
  let topRankItem = highlightModel.findOne({ creator: ctx.user }).sort( { rank: -1 });;
  
  if (topRankItem.content == content) return true;

  let topRank = topRankItem.rank + 1;
  await highlightModel.update({ creator: ctx.user, content}, {
    rank: topRank
  });
  
  return true;
};
