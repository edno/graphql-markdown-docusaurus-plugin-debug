This is a debugging repo for https://github.com/graphql-markdown/graphql-markdown/issues/144

To reproduce the bug:

```shell
npm install
npm start
```

Error

```shell
[INFO] Starting the development server...
[WARNING] Duplicate routes found!
- Attempting to create page at /docs/intro, but a page already exists at this route.
This could lead to non-deterministic routing behavior.
[SUCCESS] Docusaurus website is running at: http://localhost:3000/

● Client █████████████████████████ building (46%) 2/3 entries 661/733 dependencies 156/255 modules 96 active 
 babel-loader › node_modules/@docusaurus/core/lib/client/exports/useGlobalData.js

[ERROR] MDX loader can't read MDX metadata file "/workspaces/graphql-markdown-docusaurus-plugin-debug/.docusaurus/docusaurus-plugin-content-docs/bug/site-api-intro-md-36c.json". Maybe the isMDXPartial option function was not provided?
[ERROR] Error: ENOENT: no such file or directory, open '/workspaces/graphql-markdown-docusaurus-plugin-debug/.docusaurus/docusaurus-plugin-content-docs/bug/site-api-intro-md-36c.json'
[INFO] Docusaurus version: 2.4.3
Node version: v20.6.1
```