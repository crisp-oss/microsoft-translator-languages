microsoft-translator-languages
============

Maps the languages currently supported by operations of the Microsoft Cognitive Translator service. The data **auto-updates every 3 days**, if needed.

[![Build Status](https://github.com/crisp-dev/microsoft-translator-languages/actions/workflows/action.yml/badge.svg)](https://github.com/crisp-dev/microsoft-translator-languages/actions/workflows/action.yml)
[![npm version](https://badge.fury.io/js/microsoft-translator-languages.svg)](http://badge.fury.io/js/microsoft-translator-languages)


## Usage

```js
const { isLanguageSupported } = require("microsoft-translator-languages");

console.log(isLanguageSupported("en", "translation"));
// true
```


## API

### Access to supported languages

The raw sets of supported languages, as returned by Microsoft Translator API, are made accessible:

```js
const { translation } = require("microsoft-translator-languages");

console.log(translation);
// {af: {…}, am: {…}, ar: {…}, as: {…}, az: {…}, …}

// OR
const microsoftTranslator = require("microsoft-translator-languages");

console.log(microsoftTranslator.dataTranslation);
// {af: {…}, am: {…}, ar: {…}, as: {…}, az: {…}, …}
```
Supported scopes are: `translation`, `transliteration` & `dictionary`.

### Check if a language is supported
`isLanguageSupported(code, scope)` returns whether a language is supported or not:
* `code` must be a BCP 47 language tag, as per [ISO 3166-1](https://en.wikipedia.org/wiki/ISO_3166-1)
* `scope` must be either `translation`, `transliteration` or `dictionary` (defaults to `translation`)

```js
const { isLanguageSupported } = require("microsoft-translator-languages");

console.log(isLanguageSupported("en"));
// true

console.log(isLanguageSupported("en", "translation"));
// true

console.log(isLanguageSupported("en", "transliteration"));
// false

console.log(isLanguageSupported("en", "dictionary"));
// true
```


## License

microsoft-translator-languages is released under the MIT License. See the bundled LICENSE file for details.
