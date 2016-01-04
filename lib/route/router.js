/**
 * Created by douson on 1/4/16.
 */

Router.configure({
  layoutTemplate: 'mainLayout',
  loadingTemplate: 'loading',
  waitOn: function() {/* тут что происходит перед загрузкой (может быть подписка) */}
});

Router.map(function() {
  this.route('root', {
    path: '/',
    template: 'homePage'
  }
  );
});

Router.onBeforeAction('loading');