/**
 * Created by douson on 1/4/16.
 */

Router.configure({
  layoutTemplate: 'mainLayout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'pageNotFound',
  waitOn: function() {
    /* тут что происходит перед загрузкой (может быть подписка) */
    return [];
  }
});


Router.route('/', function() {
  this.render('homePage', {
    data: function() {/* здесь мы можем передать контекст с данными из маршрута, вместо того, чтобы писать в helpers */}
  });
  

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

/* 404 */
Router.route('/error', function() {
  this.render('pageNotFound');
});



Router.onBeforeAction('loading');


/*Router.route('traders', {
 template: 'pageTraders',
 yieldRegions: {
 'appHeader': {to: 'header'},
 'appFooter': {to: 'footer'}
 }
 });*/



/*  HELP HELP HELP HELP HELP HELP HELP HELP HELP

 Current Route
 Router.current().route.getName();




 */