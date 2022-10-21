const gis = require('g-i-s');
// const GSR = require('google-search-results-nodejs');
// const client = new GSR.GoogleSearchResults("AIzaSyCn4JeRdRyZLUiBcVj-dpLRdNh6bN5_WeE")

// todo increase performance seach
export default async (parent, { content }, ctx) => {
  if (!ctx.user) {
    throw new Error('You must be logged in');
  }
  let rs = await (new Promise((resolve, reject) => {
    try {
      var opts = {
        searchTerm: content//,
        // queryStringAddition: '&tbs=isz:m'
      };
      gis(opts, (error, results) => {
        if (error) {
          reject(error);
        }
        else {
          resolve((results || []).slice(0, 30));
        }
      });
    } catch(ex) {
      reject(ex);
    }
  }));
 
  return rs;
};
