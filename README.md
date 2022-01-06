# Microsoft Translator Languages

[![Build Status](https://github.com/crisp-oss/microsoft-translator-languages/actions/workflows/action.yml/badge.svg)](https://github.com/crisp-oss/microsoft-translator-languages/actions) [![NPM](https://img.shields.io/npm/v/microsoft-translator-languages.svg)](https://www.npmjs.com/package/microsoft-translator-languages) [![Downloads](https://img.shields.io/npm/dt/microsoft-translator-languages.svg)](https://www.npmjs.com/package/microsoft-translator-languages)

Maps the languages currently supported by operations of the Microsoft Cognitive Translator service. The data **auto-updates every 3 days**, if needed.

**😘 Maintainer**: [@baptistejamin](https://github.com/baptistejamin)

## Who uses it?

<table>
<tr>
<td align="center"><a href="https://crisp.chat/"><img src="https://crisp.chat/favicon-256x256.png" height="64" /></a></td>
</tr>
<tr>
<td align="center">Crisp</td>
</tr>
</table>

_👋 You use this library and you want to be listed there? [Contact us](https://crisp.chat/)._


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
