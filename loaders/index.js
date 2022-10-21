import single from './single';
import multiple from './multiple';
import queryLoader from './queryLoader';

export default () => ({
  // make unique dataloaders - else Cache problem can occur

  user_ById: single(),
  highlight_ById: single(),
  reference_By: multiple(),
  queryLoader: queryLoader()
});
