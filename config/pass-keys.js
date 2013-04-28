module.exports = function (app) {
  // dev & production settings
  // .bashrc -> export NODE_ENV=development
  app.configure('development', function () {
    app.set('GITHUB_APP_ID', 'f676da835969071bb15f');
    app.set('GITHUB_APP_SECRET', '0cc61f25b4c12657badc9bd4e367c82bd9942156');
    app.set('GITHUB_CALLBACK_URL', 'http://127.0.0.1:3737/auth/github/callback');

    app.set('FACEBOOK_APP_ID', '474183265978324');
    app.set('FACEBOOK_APP_SECRET', '435903f8f94557a2622d0d8bb65dfdb1');
    app.set('FACEBOOK_CALLBACK_URL', 'http://127.0.0.1:3737/auth/facebook/callback');

    app.set('TWITTER_APP_ID', 'rwhDFFDhbi9NcPCkAKWqoQ');
    app.set('TWITTER_APP_SECRET', 'RBdkPAWKlQMxw6khisiw6IA6AXpUKCSOe988qBK0yGY');
    app.set('TWITTER_CALLBACK_URL', 'http://127.0.0.1:3737/auth/twitter/callback');
  });

  // .bashrc -> export NODE_ENV=production
  app.configure('production', function () {
    app.set('GITHUB_APP_ID', 'c5c88f8112aa2e4fabb8');
    app.set('GITHUB_APP_SECRET', 'b2b8060bb64b71b895b5c43de06403d94328a6df');
    app.set('GITHUB_CALLBACK_URL', 'http://demo.cocainum.info/auth/github/callback');

    app.set('FACEBOOK_APP_ID', '370319946409714');
    app.set('FACEBOOK_APP_SECRET', '8f03fdbd94c1f0e82884ac504a09133e');
    app.set('FACEBOOK_CALLBACK_URL', 'http://demo.cocainum.info/auth/facebook/callback');

    app.set('TWITTER_APP_ID', 'wKR7XhzfT29STBjnw6xA');
    app.set('TWITTER_APP_SECRET', 'f1JdJTlbIMpug7r7fRcUiyzQM8XfmvqthWrAtHkYc');
    app.set('TWITTER_CALLBACK_URL', 'http://demo.cocainum.info/auth/twitter/callback');
  });
}
