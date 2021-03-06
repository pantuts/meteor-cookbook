Package.describe({
  name:'glass:active-record-imagegrid',
  version: '0.0.1',
  sumary: '',
  git: '',
  documentation: 'README.md',
});

Package.onUse( function ( api ) {
  api.versionsFrom('1.1.0.2');
  api.use('meteor-platform');
  api.use('iron:router');
  api.use('less');

  api.use('glass:active-record-core');
  api.use('glass:active-record-header');
  api.use('glass:active-record-footer');

  api.addFiles('components/recordImageGridPage/recordImageGridPage.html', ['client']);
  api.addFiles('components/recordImageGridPage/recordImageGridPage.js', ['client']);
  api.addFiles('components/recordImageGridPage/recordImageGridPage.less', ['client']);

  api.export('recordImageGridPage');
});

Package.onTest( function ( api ) {
  api.use('tinytest');
  api.use('glass:active-record-imagegrid');
  api.addFiles('active-record-imagegrid-tests.js');
});
