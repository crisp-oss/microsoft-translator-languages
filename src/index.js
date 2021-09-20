"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

/**************************************************************************
 * IMPORTS
 ***************************************************************************/

var data = {
 translation: require("../data/translation.json"),
 transliteration: require("../data/transliteration.json"),
 dictionary: require("../data/dictionary.json")
};

/**************************************************************************
 * FUNCTIONS
 ***************************************************************************/

var isLanguageSupported = function(code, scope) {
  if (!code || !scope) {
    throw new Error("Missing code and/or scope");
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

exports.translation = data.translation;
exports.transliteration = data.transliteration;
exports.dictionary = data.dictionary;

exports.default = {
  isLanguageSupported: isLanguageSupported,

  dataTranslation: data.translation,
  dataTransliteration: data.transliteration,
  dataDictionary: data.dictionary
};
