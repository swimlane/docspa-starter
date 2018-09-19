import { environment } from './environments/environment';

import { docspaRemarkPreset, prism, runtime, mermaid } from '@swimlane/docspa-remark-preset';

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
  ],
  remarkPlugins: [
    ...docspaRemarkPreset,
    runtime,
    mermaid,
    prism
  ],
  runtimeModules: [
  ],
  environment,
  theme: {
    '--theme-color-secondary-light': '#bdffe1'
  }
};

if (window['EditOnGithubPlugin']) {
  config.plugins.push(window['EditOnGithubPlugin'].create('https://github.com/swimlane/docspa/blob/master/src/docs/'));
}
