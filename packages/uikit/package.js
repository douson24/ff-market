Package.describe({
  name: 'douson:uikit',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'UIKit repackaged for Meteor',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.use('less');
  
  api.addFiles([
    'client/browser/js/uikit.js'
  ], 'client');

  api.addFiles([
    'client/browser/js/core/alert.js',
    'client/browser/js/core/button.js',
    'client/browser/js/core/core.js',
    'client/browser/js/core/cover.js',
    'client/browser/js/core/dropdown.js',
    'client/browser/js/core/grid.js'
      
  ], 'client');

/*  api.addFiles([
    'client/browser/uikit-main.less'

  ], 'client', {isImport: true});*/
  
  api.addAssets([
      'client/browser/fonts/FontAwesome.otf',
      'client/browser/fonts/fontawesome-webfont.ttf',
      'client/browser/fonts/fontawesome-webfont.woff',
      'client/browser/fonts/fontawesome-webfont.woff2'
  ], 'client');

  api.addFiles([
    'client/browser/css/uikit.css',
    'client/browser/css/uikit.almost-flat.css',
    'client/browser/css/components/accordion.almost-flat.css',
    'client/browser/css/components/accordion.css',
    'client/browser/css/components/accordion.gradient.css',
    'client/browser/css/components/autocomplete.almost-flat.css',
    'client/browser/css/components/autocomplete.css',
    'client/browser/css/components/autocomplete.gradient.css',
    'client/browser/css/components/datepicker.almost-flat.css',
    'client/browser/css/components/datepicker.css',
    'client/browser/css/components/datepicker.gradient.css',
    'client/browser/css/components/dotnav.almost-flat.css',
    'client/browser/css/components/dotnav.css',
    'client/browser/css/components/dotnav.gradient.css',
    'client/browser/css/components/form-advanced.almost-flat.css',
    'client/browser/css/components/form-advanced.css',
    'client/browser/css/components/form-advanced.gradient.css',
    'client/browser/css/components/form-file.almost-flat.css',
    'client/browser/css/components/form-file.css',
    'client/browser/css/components/form-file.gradient.css',
    'client/browser/css/components/form-password.almost-flat.css',
    'client/browser/css/components/form-password.css',
    'client/browser/css/components/form-password.gradient.css',
    'client/browser/css/components/form-select.almost-flat.css',
    'client/browser/css/components/form-select.css',
    'client/browser/css/components/form-select.gradient.css',
    'client/browser/css/components/form-select.min.css',
    'client/browser/css/components/htmleditor.almost-flat.css',
    'client/browser/css/components/htmleditor.css',
    'client/browser/css/components/htmleditor.gradient.css',
    'client/browser/css/components/nestable.almost-flat.css',
    'client/browser/css/components/nestable.css',
    'client/browser/css/components/nestable.gradient.css',
    'client/browser/css/components/notify.almost-flat.css',
    'client/browser/css/components/notify.css',
    'client/browser/css/components/notify.gradient.css',
    'client/browser/css/components/placeholder.almost-flat.css',
    'client/browser/css/components/placeholder.css',
    'client/browser/css/components/placeholder.gradient.css',
    'client/browser/css/components/progress.almost-flat.css',
    'client/browser/css/components/progress.css',
    'client/browser/css/components/progress.gradient.css',
    'client/browser/css/components/search.almost-flat.css',
    'client/browser/css/components/search.css',
    'client/browser/css/components/search.gradient.css',
    'client/browser/css/components/slidenav.almost-flat.css',
    'client/browser/css/components/slidenav.css',
    'client/browser/css/components/slidenav.gradient.css',
    'client/browser/css/components/slider.almost-flat.css',
    'client/browser/css/components/slider.css',
    'client/browser/css/components/slider.gradient.css',
    'client/browser/css/components/slideshow.almost-flat.css',
    'client/browser/css/components/slideshow.css',
    'client/browser/css/components/slideshow.gradient.css',
    'client/browser/css/components/sortable.almost-flat.css',
    'client/browser/css/components/sortable.css',
    'client/browser/css/components/sortable.gradient.css',
    'client/browser/css/components/sticky.almost-flat.css',
    'client/browser/css/components/sticky.css',
    'client/browser/css/components/sticky.gradient.css',
    'client/browser/css/components/tooltip.almost-flat.css',
    'client/browser/css/components/tooltip.css',
    'client/browser/css/components/tooltip.gradient.css',
    'client/browser/css/components/upload.almost-flat.css',
    'client/browser/css/components/upload.css',
    'client/browser/css/components/upload.gradient.css'
      
  ], 'client');
  
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('douson:uikit');
  api.addFiles('uikit-tests.js');
});
