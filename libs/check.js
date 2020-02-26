var validator = require('validator');

exports.numeric = function (value, defaultValue) {

    try {
        validator.isInt(value, {
            min: 1
        });
        return value;
    } catch (e) {
        if (typeof defaultValue != 'undefined') {
            return defaultValue;
        } else {
            return 0;
        }
    }
}
