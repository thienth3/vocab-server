export default async (parent, {keySearch, filter = 1, page = 0, size = 20}, ctx) => {
  if (!ctx.user) {
    throw new Error('You must be logged in');
  }
  const highlightModel = ctx.db.model('highlight');

  // console.log(query, 11);//todo fix limit and count
  let findObj = {
    creator: ctx.user,
    deletedAt: null
  };
  if (keySearch) {
    // query = query.find({ content: { $regex: new RegExp(keySearch, 'i') } })
    findObj.content = { $regex: new RegExp(keySearch, 'i') };
  }
  let query = highlightModel.find(findObj);

  query = query.limit(size)
  .skip(size * page);

  if (filter == 1) {//order by date
    query = query
      .sort( { createdAt: -1 });
  }
  if (filter == 2) {// most
    query = query
      .sort( { count: -1 });
  }

  if (filter == 3) {// random
    query = query
      .sort( { random: -1 });
  }
  
  return query.lean();
};
