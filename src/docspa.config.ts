import { environment } from './environments/environment';

import {
  defaultRemarkPlugins,
  mermaid, mermaidHook, prism
} from '@swimlane/docspa-core';

export const config = {
  name: 'DocSPA Quickstart',
  basePath: 'docs/',
  homepage: 'README.md',
  notFoundPage: '_404.md',
  sideLoad: [
    '_sidebar.md',
    '_navbar.md',
    '_sidebar2.md',
    '_footer.md',
  ],
  coverpage: '_coverpage.md',
  plugins: [
    mermaidHook
  ],
  remarkPlugins: [
    ...defaultRemarkPlugins,
    mermaid,
    prism
  ],
  runtimeModules: [
  ],
  environment
};

// these are auto-detected plugins
if (window['mermaid']) {
  config.plugins.push(mermaidHook);
  config.remarkPlugins.push(mermaid);
}

if (window['Prism']) {
  config.remarkPlugins.push(prism);
}

if (window['EditOnGithubPlugin']) {
  config.plugins.push(window['EditOnGithubPlugin'].create('https://github.com/swimlane/docspa/blob/master/src/docs/'));
}
