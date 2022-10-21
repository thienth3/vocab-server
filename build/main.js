require('source-map-support/register')
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("dataloader");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("bcryptjs");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jsonwebtoken__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jsonwebtoken___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jsonwebtoken__);


const initUser = req => {
  const Authorization = req.request && req.request.headers && req.request.headers.authorization ? req.request.headers.authorization : null;
  if (Authorization) {
    const token = Authorization.replace('Bearer ', '');

    return __WEBPACK_IMPORTED_MODULE_0_jsonwebtoken___default.a.verify(token, process.env.AUTH_SECRET, (err, decoded) => {
      if (err) {
        console.log('error', err);
        return null;
      }
      return decoded.userId;
    });
  }
  return null;
};
/* harmony export (immutable) */ __webpack_exports__["a"] = initUser;


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("g-i-s");

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const EventEmitter = __webpack_require__(43);

const AppEventConst = {
    addNewVocab: 'addNewVocab'
};
/* harmony export (immutable) */ __webpack_exports__["b"] = AppEventConst;


const AppEvent = new EventEmitter();
/* harmony export (immutable) */ __webpack_exports__["a"] = AppEvent;
 //app event

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(10);


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_compression__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_compression___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_compression__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cookie_parser__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cookie_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_cookie_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_depth_limit__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_depth_limit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_graphql_depth_limit__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_graphql_yoga__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_graphql_yoga___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_graphql_yoga__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_helmet__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_helmet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_passport__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_passport___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_passport__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__db__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__loaders__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__resolvers__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__types__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__utils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__worker_vocabImage_worker__ = __webpack_require__(55);
__webpack_require__(5).config({
  path: `.env.${"production"}`
});














const dev = "production" !== 'production';

const startServer = async () => {
  const initDB = await Object(__WEBPACK_IMPORTED_MODULE_6__db__["a" /* default */])();

  const pubsub = new __WEBPACK_IMPORTED_MODULE_3_graphql_yoga__["PubSub"]();

  const server = new __WEBPACK_IMPORTED_MODULE_3_graphql_yoga__["GraphQLServer"]({
    typeDefs: __WEBPACK_IMPORTED_MODULE_9__types__["a" /* default */],
    resolvers: __WEBPACK_IMPORTED_MODULE_8__resolvers__["a" /* default */],
    context: async req => Object.assign({}, req, {
      pubsub,
      loaders: Object(__WEBPACK_IMPORTED_MODULE_7__loaders__["a" /* default */])(),
      user: Object(__WEBPACK_IMPORTED_MODULE_10__utils__["a" /* initUser */])(req),
      db: initDB
    }),
    validationRules: [__WEBPACK_IMPORTED_MODULE_2_graphql_depth_limit___default()(10)]
  });
  Object(__WEBPACK_IMPORTED_MODULE_11__worker_vocabImage_worker__["a" /* default */])({
    db: initDB
  });

  server.express.use(__WEBPACK_IMPORTED_MODULE_0_compression___default()());
  server.express.use(__WEBPACK_IMPORTED_MODULE_4_helmet___default()());
  server.express.use(__WEBPACK_IMPORTED_MODULE_1_cookie_parser___default()());

  const ONE_YEAR = 31556952000;

  if (!dev) {
    server.express.set('trust proxy', 1);
  }

  server.express.use(__WEBPACK_IMPORTED_MODULE_5_passport___default.a.initialize());

  //todo
  //initGoogleAuth(server.express)

  console.log('node_env:', "production");
  console.log('client_url:', process.env.CLIENT_URL);
  const corsOptions = {
    origin: process.env.CLIENT_URL,
    credentials: true
  };

  //option object for graphql yoga
  const port = parseInt(process.env.PORT, 10) || 4000;
  const options = {
    port,
    cors: corsOptions
  };

  server.start(options, ({ port }) => console.log(`Server started, listening on port ${port} for incoming requests. [${"production"}]`));
};

startServer();

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("compression");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("graphql-depth-limit");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("graphql-yoga");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("helmet");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("passport");

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_Highlight__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_Highlight___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__models_Highlight__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_Reference__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_Reference___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__models_Reference__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_User__ = __webpack_require__(20);
__webpack_require__(5).config({
  path: `.env.${"production"}`
});






const dev = "production" !== 'production';
if (dev) {
  __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.set('debug', true);
}
// Document https://mongoosejs.com/docs/deprecations.html#-findandmodify-
__WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.set('useFindAndModify', false);

/* harmony default export */ __webpack_exports__["a"] = (async () => {
  console.log('connecting to MongoDB');
  return await __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.connect(process.env.MONGO_URL);
});

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

const mongoose = __webpack_require__(0);
const Schema = mongoose.Schema;

const highlightSchema = new Schema({
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
  content: {
    type: String,
    required: true
  },
  comment: {
    type: String,
    required: true
  },
  sentence: {
    type: String,
    required: true
  },
  paragraph: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: false
  },
  position: {
    type: String,
    required: false
  },
  url: {
    type: String,
    required: true
  },
  ip: {
    type: String,
    required: false
  },
  os: {
    type: String,
    required: false
  },
  count: {
    type: Number,
    required: true,
    default: 1
  },
  random: {
    type: Number,
    required: true,
    default: Math.random()
  },
  rank: {
    type: Number,
    required: true,
    default: 0
  },
  deletedAt: {
    type: Date,
    required: false
  }
}, { timestamps: true });

module.exports = mongoose.model('highlight', highlightSchema);

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

const mongoose = __webpack_require__(0);
const Schema = mongoose.Schema;

const referenceSchema = new Schema({
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
  highlightRef: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'highlight',
    required: true
  },
  content: {
    type: String,
    required: false
  },
  sentence: {
    type: String,
    required: true
  },
  paragraph: {
    type: String,
    required: true
  },
  position: {
    type: String,
    required: false
  },
  url: {
    type: String,
    required: true
  },
  ip: {
    type: String,
    required: false
  },
  os: {
    type: String,
    required: false
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    required: true,
    default: Date.now
  }
});

module.exports = mongoose.model('reference', referenceSchema);

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);


const userSchema = new __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    required: true,
    default: Date.now
  },
  // Don't return password unless specified to
  password: {
    type: String,
    select: false
  }
});

const User = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.model('user', userSchema);

/* unused harmony default export */ var _unused_webpack_default_export = (User);

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__single__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__multiple__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__queryLoader__ = __webpack_require__(24);




/* harmony default export */ __webpack_exports__["a"] = (() => ({
  // make unique dataloaders - else Cache problem can occur

  user_ById: Object(__WEBPACK_IMPORTED_MODULE_0__single__["a" /* default */])(),
  highlight_ById: Object(__WEBPACK_IMPORTED_MODULE_0__single__["a" /* default */])(),
  reference_By: Object(__WEBPACK_IMPORTED_MODULE_1__multiple__["a" /* default */])(),
  queryLoader: Object(__WEBPACK_IMPORTED_MODULE_2__queryLoader__["a" /* default */])()
}));

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dataloader__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dataloader___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_dataloader__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);



/* harmony default export */ __webpack_exports__["a"] = (() => new __WEBPACK_IMPORTED_MODULE_0_dataloader___default.a(async objArray => {
    const model = objArray[0].model;
    const field = objArray[0].field;

    const ids = objArray.map(obj => obj.data);

    let query = {};
    query[field] = { $in: ids };
    const result = await model.find(query).exec();

    const resultById = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.keyBy(result, '_id');
    return ids.map(id => resultById[id]);
}));

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dataloader__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dataloader___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_dataloader__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);



/* harmony default export */ __webpack_exports__["a"] = (() => new __WEBPACK_IMPORTED_MODULE_0_dataloader___default.a(async objArray => {
  //console.log(objArray)
  const model = objArray[0].model;
  const field = objArray[0].field;
  let offset;
  let limit;
  if (objArray[0].options) {
    offset = objArray[0].options.offset || '';
    limit = objArray[0].options.limit || '';
  }

  const ids = objArray.map(obj => obj.data);

  let query = {};
  query[field] = { $in: ids };
  const result = await model.find(query).skip(offset).limit(limit).exec();

  const resultById = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.keyBy(result, '_id');

  const arrayObject = ids.map(id => {
    let array = [];

    for (let key in resultById) {
      let obj = resultById[key];

      if (JSON.stringify(obj[field]) === JSON.stringify(id)) {
        array.push(obj);
      }
    }
    return array;
  });

  return arrayObject;
}));

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dataloader__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dataloader___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_dataloader__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);



/* harmony default export */ __webpack_exports__["a"] = (() => new __WEBPACK_IMPORTED_MODULE_0_dataloader___default.a(async queries => {
  return Promise.all(queries.map(async query => await query()));
}));

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__queries__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mutations__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__subscriptions__ = __webpack_require__(50);




/* harmony default export */ __webpack_exports__["a"] = (Object.assign({}, __WEBPACK_IMPORTED_MODULE_0__queries__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__mutations__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2__subscriptions__["a" /* default */]));

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vocab__ = __webpack_require__(31);





// use merge here to avoid overriding
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0_lodash__["merge"])(__WEBPACK_IMPORTED_MODULE_2__user__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__auth__["a" /* default */], __WEBPACK_IMPORTED_MODULE_3__vocab__["a" /* default */]));

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user__ = __webpack_require__(28);


/* harmony default export */ __webpack_exports__["a"] = ({
  AuthPayload: {
    user: __WEBPACK_IMPORTED_MODULE_0__user__["a" /* default */]
  }
});

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (async (parent, args, { loaders, db }) => {
  try {
    const userModel = db.model('user');
    return await userModel.findOne({ _id: parent.user });
  } catch (error) {
    throw new Error(error);
  }
});

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__currentUser__ = __webpack_require__(30);


/* harmony default export */ __webpack_exports__["a"] = ({
  Query: {
    currentUser: __WEBPACK_IMPORTED_MODULE_0__currentUser__["a" /* default */]
  }
});

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(6);


/* harmony default export */ __webpack_exports__["a"] = (async (parent, args, ctx) => {
  try {
    if (!ctx.user) throw new Error('Not authenticated');

    const user = ctx.db.model('user');
    return await user.findOne({ _id: ctx.user }).lean();
  } catch (error) {
    throw new Error(error);
  }
});

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getAllVocab__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getOneVocab__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__getFeed__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__references__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__searchImage__ = __webpack_require__(36);






/* harmony default export */ __webpack_exports__["a"] = ({
  Query: {
    getAllVocab: __WEBPACK_IMPORTED_MODULE_0__getAllVocab__["a" /* default */],
    getOneVocab: __WEBPACK_IMPORTED_MODULE_1__getOneVocab__["a" /* default */],
    getFeed: __WEBPACK_IMPORTED_MODULE_2__getFeed__["a" /* default */],
    searchImage: __WEBPACK_IMPORTED_MODULE_4__searchImage__["a" /* default */]
  },
  Vocab: {
    references: __WEBPACK_IMPORTED_MODULE_3__references__["a" /* default */]
  }
});

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (async (parent, rq, ctx) => {
  if (!ctx.user) {
    throw new Error('You must be logged in');
  }
  const highlightModel = ctx.db.model('highlight');
  return highlightModel.find({
    creator: ctx.user,
    deletedAt: null
  }).lean();
});

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (async (parent, { content }, ctx) => {
  if (!ctx.user) {
    throw new Error('You must be logged in');
  }
  const highlightModel = ctx.db.model('highlight');
  let rs = await highlightModel.findOne({
    creator: ctx.user, content
  }).lean();
  return rs;
});

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (async (parent, { keySearch, filter = 1, page = 0, size = 20 }, ctx) => {
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

  query = query.limit(size).skip(size * page);

  if (filter == 1) {
    //order by date
    query = query.sort({ createdAt: -1 });
  }
  if (filter == 2) {
    // most
    query = query.sort({ count: -1 });
  }

  if (filter == 3) {
    // random
    query = query.sort({ random: -1 });
  }

  return query.lean();
});

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (async (data, args, { loaders, db }) => {
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
});

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const gis = __webpack_require__(7);
// const GSR = require('google-search-results-nodejs');
// const client = new GSR.GoogleSearchResults("AIzaSyCn4JeRdRyZLUiBcVj-dpLRdNh6bN5_WeE")

// todo increase performance seach
/* harmony default export */ __webpack_exports__["a"] = (async (parent, { content }, ctx) => {
  if (!ctx.user) {
    throw new Error('You must be logged in');
  }
  let rs = await new Promise((resolve, reject) => {
    try {
      var opts = {
        searchTerm: content //,
        // queryStringAddition: '&tbs=isz:m'
      };
      gis(opts, (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve((results || []).slice(0, 30));
        }
      });
    } catch (ex) {
      reject(ex);
    }
  });

  return rs;
});

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vocab__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user__ = __webpack_require__(48);



/* harmony default export */ __webpack_exports__["a"] = ({
  Mutation: Object.assign({}, __WEBPACK_IMPORTED_MODULE_0__auth__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2__user__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__vocab__["a" /* default */])
});

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__signup__ = __webpack_require__(40);



/* harmony default export */ __webpack_exports__["a"] = ({
  login: __WEBPACK_IMPORTED_MODULE_0__login__["a" /* default */],
  signup: __WEBPACK_IMPORTED_MODULE_1__signup__["a" /* default */]
});

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bcryptjs__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bcryptjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_bcryptjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jsonwebtoken__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jsonwebtoken___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jsonwebtoken__);



/* harmony default export */ __webpack_exports__["a"] = (async (_, { email, password }, ctx) => {
  try {
    const userModel = ctx.db.model('user');
    const user = await userModel.findOne({ email }, { password: 1 }).lean();
    if (!user) {
      return new Error('No such user found');
    }

    const valid = await __WEBPACK_IMPORTED_MODULE_0_bcryptjs___default.a.compare(password, user.password);
    if (!valid) {
      return new Error('Invalid password');
    }

    // remove password from user object to limit scope (security)
    user.password = undefined;

    const token = __WEBPACK_IMPORTED_MODULE_1_jsonwebtoken___default.a.sign({ userId: user._id }, process.env.AUTH_SECRET);

    return {
      token,
      user
    };
  } catch (err) {
    return new Error(err);
  }
});

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bcryptjs__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bcryptjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_bcryptjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jsonwebtoken__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jsonwebtoken___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jsonwebtoken__);



/* harmony default export */ __webpack_exports__["a"] = (async (_, { email, password }, ctx) => {
  try {
    const userModel = ctx.db.model('user');

    let user = await userModel.findOne({ email }).lean();

    if (user) {
      throw new Error('Email is already taken');
    }

    const hashedPassword = await __WEBPACK_IMPORTED_MODULE_0_bcryptjs___default.a.hash(password, 10);
    user = await userModel.create({
      email,
      password: hashedPassword
    });

    const token = __WEBPACK_IMPORTED_MODULE_1_jsonwebtoken___default.a.sign({ userId: user._id }, process.env.AUTH_SECRET);

    return { token, user };
  } catch (err) {
    throw new Error(err);
  }
});

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__addVocab__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__addReferenceByPage__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__removeVocab__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__setTopVocab__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__updateVocab__ = __webpack_require__(47);






/* harmony default export */ __webpack_exports__["a"] = ({
  addVocab: __WEBPACK_IMPORTED_MODULE_0__addVocab__["a" /* default */],
  removeVocab: __WEBPACK_IMPORTED_MODULE_2__removeVocab__["a" /* default */],
  addReferenceByPage: __WEBPACK_IMPORTED_MODULE_1__addReferenceByPage__["a" /* default */],
  updateVocab: __WEBPACK_IMPORTED_MODULE_4__updateVocab__["a" /* default */],
  setTopVocab: __WEBPACK_IMPORTED_MODULE_3__setTopVocab__["a" /* default */]
});

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__event_app_event__ = __webpack_require__(8);


/* harmony default export */ __webpack_exports__["a"] = (async (parent, { content, comment, sentence, paragraph,
  image, position, url }, ctx) => {
  if (!ctx.user) {
    throw new Error('You must be logged in');
  }

  const highlightModel = ctx.db.model('highlight');
  let highlight = await highlightModel.findOneAndUpdate({
    creator: ctx.user, content
  }, {
    creator: ctx.user, content, comment, sentence, paragraph,
    image, position, url
  }, {
    upsert: true
  });
  //emit event 
  console.log('addNewVocabemit----------------->>>');
  __WEBPACK_IMPORTED_MODULE_0__event_app_event__["a" /* AppEvent */].emit(__WEBPACK_IMPORTED_MODULE_0__event_app_event__["b" /* AppEventConst */].addNewVocab, { content, creator: ctx.user });
  if (!highlight) {
    highlight = await highlightModel.findOne({
      creator: ctx.user, content
    }).lean();
  }
  console.log(highlight, 111);
  return highlight;
});

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("events");

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (async (parent, { references, url }, ctx) => {
  if (!ctx.user) {
    throw new Error('You must be logged in');
  }

  const referenceModel = ctx.db.model('reference');
  const highlightModel = ctx.db.model('highlight');
  let contentInPage = new Map();
  for (let ref of references) {
    let rs = await highlightModel.findOne({
      creator: ctx.user, content: ref.content
    }).lean();
    contentInPage.set(ref.content, ref.content);
    let reference = await referenceModel.findOneAndUpdate({
      creator: ctx.user, sentence: ref.sentence, url,
      content: ref.content
    }, {
      creator: ctx.user,
      content: ref.content,
      sentence: ref.sentence,
      paragraph: ref.paragraph,
      position: ref.position,
      url: url,
      highlightRef: rs._id
    }, {
      upsert: true
    });
  }
  // update count in highlight
  console.log('contentInPage.values()', contentInPage.values());
  for (let content of contentInPage.values()) {
    let count = await referenceModel.find({
      creator: ctx.user,
      content: content
    }).count();
    await highlightModel.where({
      creator: ctx.user, content
    }).update({ count: count, random: Math.random() });
  }

  return true;
});

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (async (parent, { content }, ctx) => {
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
});

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (async (parent, { content }, ctx) => {
  if (!ctx.user) {
    throw new Error('You must be logged in');
  }

  const highlightModel = ctx.db.model('highlight');
  let topRankItem = highlightModel.findOne({ creator: ctx.user }).sort({ rank: -1 });;

  if (topRankItem.content == content) return true;

  let topRank = topRankItem.rank + 1;
  await highlightModel.update({ creator: ctx.user, content }, {
    rank: topRank
  });

  return true;
});

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (async (parent, { content, comment, image }, ctx) => {
  if (!ctx.user) {
    throw new Error('You must be logged in');
  }

  const highlightModel = ctx.db.model('highlight');
  let data = { comment, image };
  // if (image) {
  //   data.image = image;
  // }
  await highlightModel.update({
    creator: ctx.user, content
  }, data);

  return await highlightModel.findOne({
    creator: ctx.user, content
  }).lean();
});

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__updateUser__ = __webpack_require__(49);


/* harmony default export */ __webpack_exports__["a"] = ({
  updateUser: __WEBPACK_IMPORTED_MODULE_0__updateUser__["a" /* default */]
});

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bcryptjs__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bcryptjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_bcryptjs__);


/* harmony default export */ __webpack_exports__["a"] = (async (parent, { email, password, newPassword }, ctx) => {
  try {
    if (!ctx.user) throw new Error('Not authenticated');

    const userModel = ctx.db.model('user');

    let user = await userModel.findOne({ _id: ctx.user }, { password: 1 }).lean();
    if (!user) {
      return new Error('No such user found');
    }

    const modifier = {};

    if (password) {
      const valid = await __WEBPACK_IMPORTED_MODULE_0_bcryptjs___default.a.compare(password, user.password);
      if (!valid) {
        return new Error('Invalid password');
      }

      if (newPassword) {
        const newHashedPassword = await __WEBPACK_IMPORTED_MODULE_0_bcryptjs___default.a.hash(newPassword, 10);
        modifier.password = newHashedPassword;
      } else {
        return new Error('You have to come up with a new password');
      }
    }

    if (email) {
      modifier.email = email;
    }

    modifier.updatedAt = new Date();

    user = await userModel.findOneAndUpdate({ _id: ctx.user }, modifier, {
      new: true
    });

    return user;
  } catch (error) {
    throw new Error(error);
  }
});

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  Subscription: {}
});

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Auth__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__User__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Vocab__ = __webpack_require__(54);




const Root = /* GraphQL */`
  # The dummy queries and mutations are necessary because
  # graphql-js cannot have empty root types and we only extend
  # these types later on
  # Ref: apollographql/graphql-tools#293
  scalar JSON
  scalar JSONObject
  type Query {
    dummy: String
  }
  type Mutation {
    dummy: String
  }
  type Subscription {
    dummy: String
  }
  schema {
    query: Query
    mutation: Mutation
    subscription: Subscription
  }
`;

/* harmony default export */ __webpack_exports__["a"] = ([Root, __WEBPACK_IMPORTED_MODULE_1__User__["a" /* default */], __WEBPACK_IMPORTED_MODULE_0__Auth__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2__Vocab__["a" /* default */]]);

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (`

extend type Mutation {
  signup(email: String!, password: String!): AuthPayload
  login(email: String!, password: String!): AuthPayload
}

type AuthPayload {
  token: String
  user: User
}
`);

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (`
  type User {
    _id: ID!
    email: String!
    createdAt: String!
    updatedAt: String!
  }

  extend type Query {
    currentUser: User!
  }

  extend type Mutation {
    updateUser(
      email: String
      password: String
      newPassword: String
    ): User!
  }
`);

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (`
  type Vocab {
    _id: ID
    content: String
    comment: String
    sentence: String
    paragraph: String
    image: String
    position: String
    url: String
    references: [Reference]
  }
  
  type Feed {
    _id: ID
    content: String
    comment: String
    sentence: String
    paragraph: String
    image: String
    position: String
    url: String
    count: Int
  }

  type Reference {
    content: String
    sentence: String
    paragraph: String
    position: String
  }
  
  type GImage {
    url: String
    width: String
    height: String
  }
  
  input ReferenceInput {
    content: String
    sentence: String
    paragraph: String
    position: String
  }

  extend type Query {
    getAllVocab: [Vocab]
    getFeed(keySearch: String, filter: Int, page: Int, size: Int): [Feed]
    getOneVocab(content: String!): Vocab
    searchImage(content: String!): [GImage]
  }

  extend type Mutation {
    addVocab(content: String!
      comment: String
      sentence: String!
      paragraph: String!
      image: String
      position: String!
      url: String!): Vocab!
    updateVocab(content: String!
      comment: String
      image: String): Vocab!
    addReferenceByPage(references: [ReferenceInput!], url: String!): Boolean
    removeVocab(content: String!): Boolean
    setTopVocab(content: String!): Boolean
  }
`);

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__event_app_event__ = __webpack_require__(8);

const gis = __webpack_require__(7);

/* harmony default export */ __webpack_exports__["a"] = (({ db }) => {
    console.log('addNewVocab1-----------------');
    __WEBPACK_IMPORTED_MODULE_0__event_app_event__["a" /* AppEvent */].on(__WEBPACK_IMPORTED_MODULE_0__event_app_event__["b" /* AppEventConst */].addNewVocab, ({ content, creator }) => {
        // search image
        console.log('addNewVocab-----------------', content, creator);
        var opts = {
            searchTerm: content //,
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
    });
});

/***/ })
/******/ ]);
//# sourceMappingURL=main.map