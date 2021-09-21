"use strict";

/**************************************************************************
 * IMPORTS
 ***************************************************************************/

var src = require("./../src/");

/**************************************************************************
 * CONFIGURATION
 ***************************************************************************/

var DEFAULT_LANGUAGE = "en";
var WRONG_LANGUAGE = "azerty";

/**************************************************************************
 * TESTS
 ***************************************************************************/

module.exports = {
  testData: function(test) {
    test.expect(6);

    var actual = src.translation;
    var message = "translation languages should not be empty."
    test.ok(actual, message);
    test.equal(Object.keys(actual).length > 0, true, message);

    var actual = src.transliteration;
    var message = "transliteration languages should not be empty."
    test.ok(actual, message);
    test.equal(Object.keys(actual).length > 0, true, message);

    var actual = src.dictionary;
    var message = "dictionary languages should not be empty."
    test.ok(actual, message);
    test.equal(Object.keys(actual).length > 0, true, message);

    test.done();
  },

  testIsLanguageSupported: function(test) {
    test.expect(8);

    var actual = src.isLanguageSupported;
    var message = "isLanguageSupported should be defined."
    test.ok(actual, message);
    test.equal(typeof actual, "function", message);

    var actual = function() { src.isLanguageSupported() };
    test.throws(actual, Error, "isLanguageSupported with no language code should throw an error.");

    var actual = src.isLanguageSupported(DEFAULT_LANGUAGE);
    test.equals(actual, true, "default usage should work.");

    var actual = src.isLanguageSupported(WRONG_LANGUAGE);
    test.equals(actual, false, "usage with wrong language code shouldn't work.");

    var actual = src.isLanguageSupported(DEFAULT_LANGUAGE, "translation");
    test.equals(actual, true, "usage with `translation` scope should work.");

    var actual = src.isLanguageSupported(DEFAULT_LANGUAGE, "transliteration");
    test.equals(actual, false, "usage with `transliteration` scope should work.");

    var actual = src.isLanguageSupported(DEFAULT_LANGUAGE, "dictionary");
    test.equals(actual, true, "usage with `dictionary` scope should work.");

    test.done();
  }
};