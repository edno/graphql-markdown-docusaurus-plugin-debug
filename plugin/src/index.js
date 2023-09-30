const { pluginContentDocs } = require("./plugin-content-docs");

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
    return docsPluginInstance.loadContents();
  };

  return {
    ...docsPluginInstance,
    name: NAME,
    loadContent,
  }
}
