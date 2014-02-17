var check = require('validator');

exports.numeric = function (value, defaultValue) {

    if (check.matches(value, /^[0-9]+$/)) {
      return value;
    }

    if (typeof defaultValue != 'undefined') {

      return defaultValue;
    } else {

      return 0;
    }
}
