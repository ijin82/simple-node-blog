var check = require('validator').check;

exports.numeric = function (value, defaultValue) {

  try {
    check(value).is(/^[0-9]+$/);

    return value;
  } catch (e) {

    if (typeof defaultValue != 'undefined') {

      return defaultValue;
    } else {

      return 0;
    }
  }
}
