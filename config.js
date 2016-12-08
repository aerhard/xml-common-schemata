module.exports = [{
  // XML Catalogs 1.0
  // http://xmlcatalogs.org/
  sources: [
    'http://www.oasis-open.org/committees/entity/release/1.0/catalog.rng',
    'http://www.oasis-open.org/committees/entity/release/1.0/catalog.xsd',
    'http://www.oasis-open.org/committees/entity/release/1.0/catalog.dtd',
  ],
  targetFolder: 'catalog/1.0',
}, {
  // XML Catalogs 1.1
  // http://xmlcatalogs.org/
  sources: [
    'http://xmlcatalogs.org/schema/1.1/catalog.rnc',
    'http://xmlcatalogs.org/schema/1.1/catalog.rng',
    'http://xmlcatalogs.org/schema/1.1/catalog.xsd',
    'http://xmlcatalogs.org/schema/1.1/catalog.dtd',
  ],
  targetFolder: 'catalog/1.1',
}, {
  // RND
  sources: [
    'https://www.w3.org/TR/REC-rdf-syntax/rdfxml.rng',
  ],
  targetFolder: 'rdf',
}, {
  // RNG
  sources: [
    'https://www.oxygenxml.com/resources/schema/relaxng/relaxng.rng',
  ],
  targetFolder: 'relaxng',
}, {
  // Schematron 1.5
  sources: [
    'http://xml.ascc.net/schematron/schematron1-5.xsd',
  ],
  targetFolder: 'schematron/1.5',
}, {
  // ISO Schematron
  sources: [
    'https://raw.githubusercontent.com/lxml/lxml/master/src/lxml/isoschematron/resources/rng/iso-schematron.rng',
  ],
  targetFolder: 'schematron/iso',
}, {
  // XML Schema
  sources: [
    'https://www.w3.org/2001/XMLSchema.xsd',
    'https://www.w3.org/2001/XMLSchema.dtd',
    'https://www.w3.org/2001/datatypes.dtd',
    'http://www.w3.org/2001/xml.xsd',
  ],
  targetFolder: 'xsd',
}, {
  // XSLT
  sources: [
    'https://raw.githubusercontent.com/JetBrains/intellij-community/master/plugins/xpath/xpath-lang/src/org/intellij/lang/xpath/xslt/resources/xslt-schema.xsd',
    'https://www.w3.org/2007/schema-for-xslt20.xsd',
  ],
  targetFolder: 'xslt',
}];
