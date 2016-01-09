/**
 * Created by douson on 1/4/16.
 */

Router.configure({
  layoutTemplate: 'mainLayout',
  loadingTemplate: 'loading',
  waitOn: function() {/* тут что происходит перед загрузкой (может быть подписка) */}
});

Router.route('/', function() {
  this.layout('mainLayout');
  this.render('homePage');

  // render the footer template into the yield region named "footer" {{> yield "footer"}}
  this.render('appHeader', {to: 'header'});
  this.render('appFooter', {to: 'footer'});
});


/* Page - traders */
Router.route('traders', function() {
  this.render('pageTraders');
  
  
  this.render('appHeader', {to: 'header'});
  this.render('appFooter', {to: 'footer'});
});







Router.onBeforeAction('loading');