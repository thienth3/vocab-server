import { AppEvent, AppEventConst } from './../event/app.event'
const gis = require('g-i-s');

export default ({db}) => {
    console.log('addNewVocab1-----------------');
    AppEvent.on(AppEventConst.addNewVocab, ({content, creator}) => {
        // search image
        console.log('addNewVocab-----------------', content, creator);
        var opts = {
            searchTerm: content//,
            // queryStringAddition: '&tbs=isz:m'
          };
          gis(opts, async (error, results) => {
            if (!error && results.length > 0) {
                // update db
                console.log('results[0].url>>>>>>>>>>>>>>', results[0].url);
                const highlightModel = db.model('highlight');
                await highlightModel.update({ 
                    creator, content
                    }, {
                        image: results[0].url
                    });
            }
          });
    })
}