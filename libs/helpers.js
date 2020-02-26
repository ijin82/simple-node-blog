var validator = require('validator');
var moment = require('moment');

module.exports = function (app) {

  app.use(function (req, res, next) {

    // filter user comments here
    res.locals.filterComment = function (str) {

      // encode all html
      str = validator.trim(str);
      str = validator.escape(str);

      // nl2br
      str = str.replace(/\r/g, '');
      str = str.replace(/\n{2,}/g, '\n\n');
      str = str.replace(/\n/g, '<br />');

      return str;
    }

    // get App config value
    res.locals.getAppConfig = function (key, defaultVal) {

      if (appConfig[key]) {

        return appConfig[key];
      } else if (defaultVal) {

        return defaultVal;
      } else {

        return null;
      }
    }

    res.locals.moment = moment;

    next();
  });
}

