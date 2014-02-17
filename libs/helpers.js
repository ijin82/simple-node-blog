var sanitize = require('validator');

module.exports = function (app) {

  app.use(function (req, res, next) {

    // filter user comments here
    res.locals.filterComment = function (str) {

      // encode all html
      str = sanitize.trim(str);
      str = sanitize.escape(str);

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

    res.locals.dateformat = dateformat;
    // rus lang for dateformat
    res.locals.dateformat.i18n = {
      dayNames: [
        "Вск", "Пон", "Вт", "Ср", "Чт", "Пт", "Сб",
        "Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"
      ],
      monthNames: [
        "Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек",
        "Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"
      ]
    };

    next();
  });
}

