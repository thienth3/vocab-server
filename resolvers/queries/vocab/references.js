export default async (data, args, { loaders, db }) => {
  try {
    const referenceModel = db.model('reference');
    return loaders.reference_By.load({
      data: data._id,
      model: referenceModel,
      field: 'highlightRef'
    });
  } catch (error) {
    throw new Error(error);
  }
};
