var ghpages = require('gh-pages');

ghpages.publish(
  '__sapper__/export/calculadhora',
  {
    branch: 'gh-pages',
    repo: 'https://github.com/caco-jr/calculadhora.git',
  },
  () => {
    console.log('Deploy Complete!');
  }
);
