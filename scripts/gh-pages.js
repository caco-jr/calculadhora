const ghpages = require('gh-pages');

ghpages.publish(
  '__sapper__/export',
  {
    branch: 'gh-pages',
    repo: 'https://github.com/caco-jr/calculadhora.git',
  },
  () => {
    console.log('Deploy Complete!');
  }
);
