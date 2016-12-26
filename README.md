
# XML Common Schemata

An Atom package containing commonly used XML schemata and settings
for the [linter-autocomplete-jing](https://atom.io/packages/linter-autocomplete-jing) package, enabling validation and autocomplete based on the provided schemata without explicit schema
references in instance documents.

## Included schemata

- XML Catalog 1.0, 1.1
- RDF
- Relax NG
- Schematron 1.5 and ISO Schematron
- SVG 1.0, SVG 1.1 Tiny, Basic, Full, SVG 1.2 Tiny, Full
- XSD 1.0
- XSLT 1.0, 2.0

## Install

Run `apm install xml-common-schemata` or install the package from Atom's 'Settings' menu (<kbd>Ctrl-,</kbd>, 'Settings').

## Extend

The package only includes a small set of schemata. In order to provide additional schemata,
disable the `xml-common-schemata` package in Atom, clone the [corresponding GitHub repository](https://github.com/aerhard/xml-common-schemata) and run following commands from the
project's root directory:

```
npm i -g gulp
npm i
apm link
```
This installs the dependencies and points Atom to the local clone of the GitHub repository (you can later remove the link with `apm unlink`).

You can add new schemata to the `data` directory by providing additional download locations in `config.js` and then running `gulp` from the project's root directory. For each new schema, add one or more validation rules to `settings/xml-common-schemata.cson`. Information about schema rules can be found at  https://github.com/aerhard/linter-autocomplete-jing/blob/master/README.md#schema-rules. Reload the package in Atom (<kbd>Ctrl-Alt-R</kbd>).
