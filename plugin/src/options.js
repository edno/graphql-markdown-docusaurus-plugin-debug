const { validateOptions: validateOptionPlugin } = require("./plugin-content-docs");

const DEFAULT_ID = "default";

const getNativePluginOptions = (options) => {
  const mappedOptions = {
    ...options,
    path: options.rootPath,
    routeBasePath: options.linkRoot,
  };

  const pluginOptions = Object.fromEntries(
    Object.entries(mappedOptions).filter(([key]) => {
      return [
        "id",
        "path",
        "routeBasePath",
        "tagsBasePath",
        "include",
        "exclude",
        "sidebarItemsGenerator",
        "numberPrefixParser",
        "docsRootComponent",
        "docVersionRootComponent",
        "docRootComponent",
        "docItemComponent",
        "docTagDocListComponent",
        "docTagsListComponent",
        "docCategoryGeneratedIndexComponent",
        "remarkPlugins",
        "rehypePlugins",
        "beforeDefaultRemarkPlugins",
        "beforeDefaultRehypePlugins",
        "showLastUpdateTime",
        "showLastUpdateAuthor",
        "admonitions",
        "includeCurrentVersion",
        "disableVersioning",
        "lastVersion",
        "versions",
        "editCurrentVersion",
        "editLocalizedFiles",
        "sidebarCollapsible",
        "sidebarCollapsed",
        "sidebarPath",
        "breadcrumbs",
      ].includes(key);
    }),
  );

  return pluginOptions;
};

const validateOptions = ({
  validate,
  options,
}) => {
  const userOptions = options;

  userOptions.id = typeof options.id !== "undefined" ? options.id : DEFAULT_ID;

  if (!validateOptionPlugin) {
    return userOptions;
  }

  const normalizedOptions = validateOptionPlugin({
    validate,
    options: getNativePluginOptions(userOptions),
  });

  return { ...userOptions, ...normalizedOptions };
};

module.exports = { validateOptions, DEFAULT_ID };
