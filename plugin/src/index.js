const { pluginContentDocs, validateOptions } = require("./plugin-content-docs");

const NAME = "docusaurus-graphql-doc-generator";

module.exports = async function pluginGraphQLMarkdown(
  context,
  options,
) {
  const docsPluginInstance = (await pluginContentDocs(
    context,
    options,
  ));

  const loadContent = async () => {
    return docsPluginInstance.loadContent();
  };

  return {
    ...docsPluginInstance,
    name: NAME,
    loadContent,
  }
}

module.exports.validateOptions = validateOptions;
