"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

/**************************************************************************
 * IMPORTS
 ***************************************************************************/

var data = {
  translation     : require("../data/translation.json"),
  transliteration : require("../data/transliteration.json"),
  dictionary      : require("../data/dictionary.json")
};

/**************************************************************************
 * CONFIGURATION
 ***************************************************************************/

var DEFAULT_SCOPE = "translation";

/**************************************************************************
 * FUNCTIONS
 ***************************************************************************/

/**
 * Checks whether a language is supported or not
 * @private
 * @param  {string}  code
 * @param  {string}  [scope]
 * @return {boolean} Whether the language is supported or not
 */
var isLanguageSupported = function(code, scope = DEFAULT_SCOPE) {
  if (!code) {
    throw new Error("Missing language code");
  }

  if (data[scope] === undefined || data[scope] === {}) {
    return false;
  }

  return Object.prototype.hasOwnProperty.call(data[scope], code);
};

/**************************************************************************
 * EXPORTS
 ***************************************************************************/

exports.isLanguageSupported = isLanguageSupported;

exports.translation         = data.translation;
exports.transliteration     = data.transliteration;
exports.dictionary          = data.dictionary;

exports.default             = {
  isLanguageSupported : isLanguageSupported,

  dataTranslation     : data.translation,
  dataTransliteration : data.transliteration,
  dataDictionary      : data.dictionary
};
