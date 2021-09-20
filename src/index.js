"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

/**************************************************************************
 * IMPORTS
 ***************************************************************************/

var path = require("path");

var dataDir = path.join(__dirname, "/../data/");

var dataFiles = {
  translation: path.join(dataDir, "translation.json"),
  transliteration: path.join(dataDir, "transliteration.json"),
  dictionary: path.join(dataDir, "dictionary.json")
};

/**************************************************************************
 * FUNCTIONS
 ***************************************************************************/

var data = {
  translation: {},
  transliteration: {},
  dictionary: {}
};

var load = function() {
  for (var fileName in dataFiles) {
    data[fileName] = require(dataFiles[fileName]);
  }
};

var isLanguageSupported = function(code, scope) {
  if (!code || !scope) {
    throw new Error("Missing code and/or scope");
  }

  if (data[scope] === undefined || data[scope] === {}) {
    return false;
  }

  return Object.prototype.hasOwnProperty.call(data[scope], code);
};

load();

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
