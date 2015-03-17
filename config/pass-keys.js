module.exports = function (app) {
  // dev & production settings
  // .bashrc -> export NODE_ENV=development
  if(app_env == 'development') {
    app.set('GITHUB_APP_ID', 'f676da835969071bb15f');
    app.set('GITHUB_APP_SECRET', '0cc61f25b4c12657badc9bd4e367c82bd9942156');
    app.set('GITHUB_CALLBACK_URL', 'http://127.0.0.1:3737/auth/github/callback');

    app.set('FACEBOOK_APP_ID', '474183265978324');
    app.set('FACEBOOK_APP_SECRET', '435903f8f94557a2622d0d8bb65dfdb1');
    app.set('FACEBOOK_CALLBACK_URL', 'http://127.0.0.1:3737/auth/facebook/callback');

    app.set('TWITTER_APP_ID', 'J3F5ozBPLBbAg7BW0f1AfG20G');
    app.set('TWITTER_APP_SECRET', 'kelJsfZljGsTeh60uBneNg3PapZ3ifkzzNoOC2wuWBfSxzLlPn');
    app.set('TWITTER_CALLBACK_URL', 'http://127.0.0.1:3737/auth/twitter/callback');
  }

  // .bashrc -> export NODE_ENV=production
  if(app_env == 'production') {
    app.set('GITHUB_APP_ID', 'c5c88f8112aa2e4fabb8');
    app.set('GITHUB_APP_SECRET', 'b2b8060bb64b71b895b5c43de06403d94328a6df');
    app.set('GITHUB_CALLBACK_URL', 'http://snb-demo.wired-mind.info/auth/github/callback');

    app.set('FACEBOOK_APP_ID', '370319946409714');
    app.set('FACEBOOK_APP_SECRET', '8f03fdbd94c1f0e82884ac504a09133e');
    app.set('FACEBOOK_CALLBACK_URL', 'http://snb-demo.wired-mind.info/auth/facebook/callback');

    app.set('TWITTER_APP_ID', 'wMhusmgb9sywSHaeMw5MoxX9X');
    app.set('TWITTER_APP_SECRET', 'AfbDAdexZWKEudRRBhEfb47oZCMP1n6IEtvITDYz50T9Rka35G');
    app.set('TWITTER_CALLBACK_URL', 'http://snb-demo.wired-mind.info/auth/twitter/callback');
  }
}
