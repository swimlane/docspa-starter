import { environment } from './environments/environment';

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
  environment,
};

/* if (window['EditOnGithubPlugin']) {
  const editPlugin = window['EditOnGithubPlugin']
    .create('https://github.com/swimlane/docspa-quickstart/blob/master/src/docs/')
  config.plugins.push(editPlugin);
} */
