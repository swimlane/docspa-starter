import { environment } from './environments/environment';

// import { docspaRemarkPreset, prism, runtime, mermaid } from '@swimlane/docspa-remark-preset';

export const config = {
  name: 'DocSPA Quickstart',
  basePath: 'docs/',
  homepage: 'README.md',
  notFoundPage: '_404.md',
  sideLoad: {
    sidebar: '_sidebar.md',
    navbar: '_navbar.md',
    rightSidebar: '/_sidebar2.md',
    footer: '/_footer.md'
  },
  coverpage: '_coverpage.md',
  plugins: [
  ],
  /* remarkPlugins: [
    ...docspaRemarkPreset,
    runtime,
    mermaid,
    prism
  ],
  runtimeModules: [
  ], */
  environment,
  /* theme: {
    '--theme-color-secondary-light': '#bdffe1'
  } */
};

if (window['EditOnGithubPlugin']) {
  const editPlugin = window['EditOnGithubPlugin']
    .create('https://github.com/swimlane/docspa-quickstart/blob/master/src/docs/')
  config.plugins.push(editPlugin);
}
