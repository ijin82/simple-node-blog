module.exports = function (app) {

    app.set('GITHUB_APP_ID', process.env.GITHUB_APP_ID);
    app.set('GITHUB_APP_SECRET', process.env.GITHUB_APP_SECRET);
    app.set('GITHUB_CALLBACK_URL', process.env.GITHUB_CALLBACK_URL);

    app.set('FACEBOOK_APP_ID', process.env.FACEBOOK_APP_ID);
    app.set('FACEBOOK_APP_SECRET', process.env.FACEBOOK_APP_SECRET);
    app.set('FACEBOOK_CALLBACK_URL', process.env.FACEBOOK_CALLBACK_URL);

    app.set('TWITTER_APP_ID', process.env.TWITTER_APP_ID);
    app.set('TWITTER_APP_SECRET', process.env.TWITTER_APP_SECRET);
    app.set('TWITTER_CALLBACK_URL', process.env.TWITTER_CALLBACK_URL);

}
