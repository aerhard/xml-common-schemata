module.exports = [{
  // XML Catalogs 1.0
  // http://xmlcatalogs.org/
  sources: [
    // NB local copies of the rng and xsd schemata are adjusted to work with
    // linter-autocomplete-jing v0.9.0
    // 'http://www.oasis-open.org/committees/entity/release/1.0/catalog.rng',
    // 'http://www.oasis-open.org/committees/entity/release/1.0/catalog.xsd',
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
  // SVG 1.0
  sources: [
    'https://raw.githubusercontent.com/sebastianrahtz/Companion/master/svg.rng',
    'https://raw.githubusercontent.com/sebastianrahtz/Companion/master/svg-main.rng',
  ],
  targetFolder: 'svg/1.0',
}, {
  // SVG 1.1
  sources: [
    'https://www.w3.org/Graphics/SVG/1.1/rng/svg-animation.rng',
    'https://www.w3.org/Graphics/SVG/1.1/rng/svg-animevents-attrib.rng',
    'https://www.w3.org/Graphics/SVG/1.1/rng/svg-basic-clip.rng',
    'https://www.w3.org/Graphics/SVG/1.1/rng/svg-basic-filter.rng',
    'https://www.w3.org/Graphics/SVG/1.1/rng/svg-basic-font.rng',
    'https://www.w3.org/Graphics/SVG/1.1/rng/svg-basic-graphics-attrib.rng',
    'https://www.w3.org/Graphics/SVG/1.1/rng/svg-basic-structure.rng',
    'https://www.w3.org/Graphics/SVG/1.1/rng/svg-basic-text.rng',
    'https://www.w3.org/Graphics/SVG/1.1/rng/svg-clip.rng',
    'https://www.w3.org/Graphics/SVG/1.1/rng/svg-conditional.rng',
    'https://www.w3.org/Graphics/SVG/1.1/rng/svg-container-attrib.rng',
    'https://www.w3.org/Graphics/SVG/1.1/rng/svg-core-attrib.rng',
    'https://www.w3.org/Graphics/SVG/1.1/rng/svg-cursor.rng',
    'https://www.w3.org/Graphics/SVG/1.1/rng/svg-datatypes.rng',
    'https://www.w3.org/Graphics/SVG/1.1/rng/svg-docevents-attrib.rng',
    'https://www.w3.org/Graphics/SVG/1.1/rng/svg-extensibility.rng',
    'https://www.w3.org/Graphics/SVG/1.1/rng/svg-extresources-attrib.rng',
    'https://www.w3.org/Graphics/SVG/1.1/rng/svg-filter.rng',
    'https://www.w3.org/Graphics/SVG/1.1/rng/svg-font.rng',
    'https://www.w3.org/Graphics/SVG/1.1/rng/svg-gradient.rng',
    'https://www.w3.org/Graphics/SVG/1.1/rng/svg-graphevents-attrib.rng',
    'https://www.w3.org/Graphics/SVG/1.1/rng/svg-graphics-attrib.rng',
    'https://www.w3.org/Graphics/SVG/1.1/rng/svg-hyperlink.rng',
    'https://www.w3.org/Graphics/SVG/1.1/rng/svg-image.rng',
    'https://www.w3.org/Graphics/SVG/1.1/rng/svg-marker.rng',
    'https://www.w3.org/Graphics/SVG/1.1/rng/svg-mask.rng',
    'https://www.w3.org/Graphics/SVG/1.1/rng/svg-opacity-attrib.rng',
    'https://www.w3.org/Graphics/SVG/1.1/rng/svg-paint-attrib.rng',
    'https://www.w3.org/Graphics/SVG/1.1/rng/svg-pattern.rng',
    'https://www.w3.org/Graphics/SVG/1.1/rng/svg-profile.rng',
    'https://www.w3.org/Graphics/SVG/1.1/rng/svg-qname.rng',
    'https://www.w3.org/Graphics/SVG/1.1/rng/svg-script.rng',
    'https://www.w3.org/Graphics/SVG/1.1/rng/svg-shape.rng',
    'https://www.w3.org/Graphics/SVG/1.1/rng/svg-structure.rng',
    'https://www.w3.org/Graphics/SVG/1.1/rng/svg-style.rng',
    'https://www.w3.org/Graphics/SVG/1.1/rng/svg-text.rng',
    'https://www.w3.org/Graphics/SVG/1.1/rng/svg-view.rng',
    'https://www.w3.org/Graphics/SVG/1.1/rng/svg-viewport-attrib.rng',
    'https://www.w3.org/Graphics/SVG/1.1/rng/svg-xlink-attrib.rng',
    'https://www.w3.org/Graphics/SVG/1.1/rng/svg11-basic.rng',
    'https://www.w3.org/Graphics/SVG/1.1/rng/svg11-tiny.rng',
    'https://www.w3.org/Graphics/SVG/1.1/rng/svg11.rng',
  ],
  targetFolder: 'svg/1.1',
}, {
  // SVG 1.2 Tiny
  sources: [
    'https://raw.githubusercontent.com/drmacro/dita-13-spec/master/proposals/proposal-13119-svg/org.oasis-open.dita.svg.doctypes/doctypes/rng/Tiny-1.2/Tiny-1.2.rng',
    'https://raw.githubusercontent.com/drmacro/dita-13-spec/master/proposals/proposal-13119-svg/org.oasis-open.dita.svg.doctypes/doctypes/rng/Tiny-1.2/animation-element.rng',
    'https://raw.githubusercontent.com/drmacro/dita-13-spec/master/proposals/proposal-13119-svg/org.oasis-open.dita.svg.doctypes/doctypes/rng/Tiny-1.2/animation.rng',
    'https://raw.githubusercontent.com/drmacro/dita-13-spec/master/proposals/proposal-13119-svg/org.oasis-open.dita.svg.doctypes/doctypes/rng/Tiny-1.2/anycontent.rng',
    'https://raw.githubusercontent.com/drmacro/dita-13-spec/master/proposals/proposal-13119-svg/org.oasis-open.dita.svg.doctypes/doctypes/rng/Tiny-1.2/audio.rng',
    'https://raw.githubusercontent.com/drmacro/dita-13-spec/master/proposals/proposal-13119-svg/org.oasis-open.dita.svg.doctypes/doctypes/rng/Tiny-1.2/backgroundfill-attrib.rng',
    'https://raw.githubusercontent.com/drmacro/dita-13-spec/master/proposals/proposal-13119-svg/org.oasis-open.dita.svg.doctypes/doctypes/rng/Tiny-1.2/conditional.rng',
    'https://raw.githubusercontent.com/drmacro/dita-13-spec/master/proposals/proposal-13119-svg/org.oasis-open.dita.svg.doctypes/doctypes/rng/Tiny-1.2/core-attrib.rng',
    'https://raw.githubusercontent.com/drmacro/dita-13-spec/master/proposals/proposal-13119-svg/org.oasis-open.dita.svg.doctypes/doctypes/rng/Tiny-1.2/datatypes.rng',
    'https://raw.githubusercontent.com/drmacro/dita-13-spec/master/proposals/proposal-13119-svg/org.oasis-open.dita.svg.doctypes/doctypes/rng/Tiny-1.2/editable-attrib.rng',
    'https://raw.githubusercontent.com/drmacro/dita-13-spec/master/proposals/proposal-13119-svg/org.oasis-open.dita.svg.doctypes/doctypes/rng/Tiny-1.2/extensibility.rng',
    'https://raw.githubusercontent.com/drmacro/dita-13-spec/master/proposals/proposal-13119-svg/org.oasis-open.dita.svg.doctypes/doctypes/rng/Tiny-1.2/extresources-attrib.rng',
    'https://raw.githubusercontent.com/drmacro/dita-13-spec/master/proposals/proposal-13119-svg/org.oasis-open.dita.svg.doctypes/doctypes/rng/Tiny-1.2/focusable-attrib.rng',
    'https://raw.githubusercontent.com/drmacro/dita-13-spec/master/proposals/proposal-13119-svg/org.oasis-open.dita.svg.doctypes/doctypes/rng/Tiny-1.2/graphics-attrib.rng',
    'https://raw.githubusercontent.com/drmacro/dita-13-spec/master/proposals/proposal-13119-svg/org.oasis-open.dita.svg.doctypes/doctypes/rng/Tiny-1.2/handler.rng',
    'https://raw.githubusercontent.com/drmacro/dita-13-spec/master/proposals/proposal-13119-svg/org.oasis-open.dita.svg.doctypes/doctypes/rng/Tiny-1.2/hyperlink.rng',
    'https://raw.githubusercontent.com/drmacro/dita-13-spec/master/proposals/proposal-13119-svg/org.oasis-open.dita.svg.doctypes/doctypes/rng/Tiny-1.2/image.rng',
    'https://raw.githubusercontent.com/drmacro/dita-13-spec/master/proposals/proposal-13119-svg/org.oasis-open.dita.svg.doctypes/doctypes/rng/Tiny-1.2/media-attrib.rng',
    'https://raw.githubusercontent.com/drmacro/dita-13-spec/master/proposals/proposal-13119-svg/org.oasis-open.dita.svg.doctypes/doctypes/rng/Tiny-1.2/page.rng',
    'https://raw.githubusercontent.com/drmacro/dita-13-spec/master/proposals/proposal-13119-svg/org.oasis-open.dita.svg.doctypes/doctypes/rng/Tiny-1.2/prefetch.rng',
    'https://raw.githubusercontent.com/drmacro/dita-13-spec/master/proposals/proposal-13119-svg/org.oasis-open.dita.svg.doctypes/doctypes/rng/Tiny-1.2/script.rng',
    'https://raw.githubusercontent.com/drmacro/dita-13-spec/master/proposals/proposal-13119-svg/org.oasis-open.dita.svg.doctypes/doctypes/rng/Tiny-1.2/shape.rng',
    'https://raw.githubusercontent.com/drmacro/dita-13-spec/master/proposals/proposal-13119-svg/org.oasis-open.dita.svg.doctypes/doctypes/rng/Tiny-1.2/solidcolor.rng',
    'https://raw.githubusercontent.com/drmacro/dita-13-spec/master/proposals/proposal-13119-svg/org.oasis-open.dita.svg.doctypes/doctypes/rng/Tiny-1.2/tiny-flow.rng',
    'https://raw.githubusercontent.com/drmacro/dita-13-spec/master/proposals/proposal-13119-svg/org.oasis-open.dita.svg.doctypes/doctypes/rng/Tiny-1.2/tiny-font.rng',
    'https://raw.githubusercontent.com/drmacro/dita-13-spec/master/proposals/proposal-13119-svg/org.oasis-open.dita.svg.doctypes/doctypes/rng/Tiny-1.2/tiny-gradient.rng',
    'https://raw.githubusercontent.com/drmacro/dita-13-spec/master/proposals/proposal-13119-svg/org.oasis-open.dita.svg.doctypes/doctypes/rng/Tiny-1.2/tiny-opacity-attrib.rng',
    'https://raw.githubusercontent.com/drmacro/dita-13-spec/master/proposals/proposal-13119-svg/org.oasis-open.dita.svg.doctypes/doctypes/rng/Tiny-1.2/tiny-paint-attrib.rng',
    'https://raw.githubusercontent.com/drmacro/dita-13-spec/master/proposals/proposal-13119-svg/org.oasis-open.dita.svg.doctypes/doctypes/rng/Tiny-1.2/tiny-structure.rng',
    'https://raw.githubusercontent.com/drmacro/dita-13-spec/master/proposals/proposal-13119-svg/org.oasis-open.dita.svg.doctypes/doctypes/rng/Tiny-1.2/tiny-text.rng',
    'https://raw.githubusercontent.com/drmacro/dita-13-spec/master/proposals/proposal-13119-svg/org.oasis-open.dita.svg.doctypes/doctypes/rng/Tiny-1.2/tiny-vectoreffects-attrib.rng',
    'https://raw.githubusercontent.com/drmacro/dita-13-spec/master/proposals/proposal-13119-svg/org.oasis-open.dita.svg.doctypes/doctypes/rng/Tiny-1.2/tiny-viewport-attrib.rng',
    'https://raw.githubusercontent.com/drmacro/dita-13-spec/master/proposals/proposal-13119-svg/org.oasis-open.dita.svg.doctypes/doctypes/rng/Tiny-1.2/transform-attrib.rng',
    'https://raw.githubusercontent.com/drmacro/dita-13-spec/master/proposals/proposal-13119-svg/org.oasis-open.dita.svg.doctypes/doctypes/rng/Tiny-1.2/video.rng',
    'https://raw.githubusercontent.com/drmacro/dita-13-spec/master/proposals/proposal-13119-svg/org.oasis-open.dita.svg.doctypes/doctypes/rng/Tiny-1.2/xlink-attrib.rng',
  ],
  targetFolder: 'svg/Tiny-1.2',
}, {
  // SVG 1.2 Full
  sources: [
    'https://raw.githubusercontent.com/drmacro/dita-13-spec/master/proposals/proposal-13119-svg/org.oasis-open.dita.svg.doctypes/doctypes/rng/svg-full-1.2/Full-1.2.rng',
    'https://raw.githubusercontent.com/drmacro/dita-13-spec/master/proposals/proposal-13119-svg/org.oasis-open.dita.svg.doctypes/doctypes/rng/svg-full-1.2/animevents-attrib.rng',
    'https://raw.githubusercontent.com/drmacro/dita-13-spec/master/proposals/proposal-13119-svg/org.oasis-open.dita.svg.doctypes/doctypes/rng/svg-full-1.2/clip.rng',
    'https://raw.githubusercontent.com/drmacro/dita-13-spec/master/proposals/proposal-13119-svg/org.oasis-open.dita.svg.doctypes/doctypes/rng/svg-full-1.2/compositing-attrib.rng',
    'https://raw.githubusercontent.com/drmacro/dita-13-spec/master/proposals/proposal-13119-svg/org.oasis-open.dita.svg.doctypes/doctypes/rng/svg-full-1.2/cursor.rng',
    'https://raw.githubusercontent.com/drmacro/dita-13-spec/master/proposals/proposal-13119-svg/org.oasis-open.dita.svg.doctypes/doctypes/rng/svg-full-1.2/deviceColor.rng',
    'https://raw.githubusercontent.com/drmacro/dita-13-spec/master/proposals/proposal-13119-svg/org.oasis-open.dita.svg.doctypes/doctypes/rng/svg-full-1.2/docevents-attrib.rng',
    'https://raw.githubusercontent.com/drmacro/dita-13-spec/master/proposals/proposal-13119-svg/org.oasis-open.dita.svg.doctypes/doctypes/rng/svg-full-1.2/extendedlink.rng',
    'https://raw.githubusercontent.com/drmacro/dita-13-spec/master/proposals/proposal-13119-svg/org.oasis-open.dita.svg.doctypes/doctypes/rng/svg-full-1.2/filter.rng',
    'https://raw.githubusercontent.com/drmacro/dita-13-spec/master/proposals/proposal-13119-svg/org.oasis-open.dita.svg.doctypes/doctypes/rng/svg-full-1.2/flow.rng',
    'https://raw.githubusercontent.com/drmacro/dita-13-spec/master/proposals/proposal-13119-svg/org.oasis-open.dita.svg.doctypes/doctypes/rng/svg-full-1.2/font.rng',
    'https://raw.githubusercontent.com/drmacro/dita-13-spec/master/proposals/proposal-13119-svg/org.oasis-open.dita.svg.doctypes/doctypes/rng/svg-full-1.2/gradient.rng',
    'https://raw.githubusercontent.com/drmacro/dita-13-spec/master/proposals/proposal-13119-svg/org.oasis-open.dita.svg.doctypes/doctypes/rng/svg-full-1.2/graphevents-attrib.rng',
    'https://raw.githubusercontent.com/drmacro/dita-13-spec/master/proposals/proposal-13119-svg/org.oasis-open.dita.svg.doctypes/doctypes/rng/svg-full-1.2/marker.rng',
    'https://raw.githubusercontent.com/drmacro/dita-13-spec/master/proposals/proposal-13119-svg/org.oasis-open.dita.svg.doctypes/doctypes/rng/svg-full-1.2/mask.rng',
    'https://raw.githubusercontent.com/drmacro/dita-13-spec/master/proposals/proposal-13119-svg/org.oasis-open.dita.svg.doctypes/doctypes/rng/svg-full-1.2/multiImage.rng',
    'https://raw.githubusercontent.com/drmacro/dita-13-spec/master/proposals/proposal-13119-svg/org.oasis-open.dita.svg.doctypes/doctypes/rng/svg-full-1.2/opacity-attrib.rng',
    'https://raw.githubusercontent.com/drmacro/dita-13-spec/master/proposals/proposal-13119-svg/org.oasis-open.dita.svg.doctypes/doctypes/rng/svg-full-1.2/pattern.rng',
    'https://raw.githubusercontent.com/drmacro/dita-13-spec/master/proposals/proposal-13119-svg/org.oasis-open.dita.svg.doctypes/doctypes/rng/svg-full-1.2/profile.rng',
    'https://raw.githubusercontent.com/drmacro/dita-13-spec/master/proposals/proposal-13119-svg/org.oasis-open.dita.svg.doctypes/doctypes/rng/svg-full-1.2/shadow-attrib.rng',
    'https://raw.githubusercontent.com/drmacro/dita-13-spec/master/proposals/proposal-13119-svg/org.oasis-open.dita.svg.doctypes/doctypes/rng/svg-full-1.2/structure.rng',
    'https://raw.githubusercontent.com/drmacro/dita-13-spec/master/proposals/proposal-13119-svg/org.oasis-open.dita.svg.doctypes/doctypes/rng/svg-full-1.2/style.rng',
    'https://raw.githubusercontent.com/drmacro/dita-13-spec/master/proposals/proposal-13119-svg/org.oasis-open.dita.svg.doctypes/doctypes/rng/svg-full-1.2/text.rng',
    'https://raw.githubusercontent.com/drmacro/dita-13-spec/master/proposals/proposal-13119-svg/org.oasis-open.dita.svg.doctypes/doctypes/rng/svg-full-1.2/tooltip-attrib.rng',
    'https://raw.githubusercontent.com/drmacro/dita-13-spec/master/proposals/proposal-13119-svg/org.oasis-open.dita.svg.doctypes/doctypes/rng/svg-full-1.2/traitDef.rng',
    'https://raw.githubusercontent.com/drmacro/dita-13-spec/master/proposals/proposal-13119-svg/org.oasis-open.dita.svg.doctypes/doctypes/rng/svg-full-1.2/transition.rng',
    'https://raw.githubusercontent.com/drmacro/dita-13-spec/master/proposals/proposal-13119-svg/org.oasis-open.dita.svg.doctypes/doctypes/rng/svg-full-1.2/vectoreffects-attrib.rng',
    'https://raw.githubusercontent.com/drmacro/dita-13-spec/master/proposals/proposal-13119-svg/org.oasis-open.dita.svg.doctypes/doctypes/rng/svg-full-1.2/vectoreffects.rng',
    'https://raw.githubusercontent.com/drmacro/dita-13-spec/master/proposals/proposal-13119-svg/org.oasis-open.dita.svg.doctypes/doctypes/rng/svg-full-1.2/view.rng',
    'https://raw.githubusercontent.com/drmacro/dita-13-spec/master/proposals/proposal-13119-svg/org.oasis-open.dita.svg.doctypes/doctypes/rng/svg-full-1.2/viewport-attrib.rng',
    'https://raw.githubusercontent.com/drmacro/dita-13-spec/master/proposals/proposal-13119-svg/org.oasis-open.dita.svg.doctypes/doctypes/rng/svg-full-1.2/xmlevents.rng',
  ],
  targetFolder: 'svg/Full-1.2',
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
