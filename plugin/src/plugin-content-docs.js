const PluginContentDocs = require("@docusaurus/plugin-content-docs");

const plugin = PluginContentDocs;

const pluginContentDocs = plugin.default ? plugin.default : plugin;
const validateOptions = plugin.default?.validateOptions
  ? plugin.default.validateOptions
  : plugin.validateOptions;

module.exports = { pluginContentDocs, validateOptions };
