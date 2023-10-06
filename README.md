This is a debugging repo for https://github.com/graphql-markdown/graphql-markdown/issues/144

To reproduce the bug:

```shell
npm install
npm start
```

Error

```shell
> my-website@0.0.0 start
> docusaurus start

[INFO] Starting the development server...
[SUCCESS] Docusaurus website is running at: http://localhost:3000/

● Client █████████████████████████ building (46%)  
 import loader ./node_modules/@docusaurus/plugin-content-docs/lib/markdown/index.js

[ERROR] MDX loader can't read MDX metadata file "/workspaces/graphql-markdown-docusaurus-plugin-debug/.docusaurus/docusaurus-plugin-content-docs/bug/site-api-intro-md-36c.json". Maybe the isMDXPartial option function was not provided?
[ERROR] Error: ENOENT: no such file or directory, open '/workspaces/graphql-markdown-docusaurus-plugin-debug/.docusaurus/docusaurus-plugin-content-docs/bug/site-api-intro-md-36c.json'
[INFO] Docusaurus version: 2.4.3
Node version: v20.8.0
```