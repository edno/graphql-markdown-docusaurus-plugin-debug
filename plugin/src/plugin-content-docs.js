const PluginContentDocs = require("@docusaurus/plugin-content-docs");

const pluginContentDocs = PluginContentDocs.default ? PluginContentDocs.default : PluginContentDocs;
const validateOptions = PluginContentDocs.default?.validateOptions
  ? PluginContentDocs.default.validateOptions
  : PluginContentDocs.validateOptions;

module.exports = { pluginContentDocs, validateOptions };
