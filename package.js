Package.describe({
  name: "voidale:later-js-tz",
  description: 'later.js wrapped for meteor with timezone support',
  github: ''
  version: "1.1.9"
});

Package.on_use(function (api) {
  Npm.depends({
    "timezone": "0.0.41"
  });
  
  api.add_files('meteor-shim.js', 'server');
  api.add_files('later/later.js', ['client', 'server']);

  api.export('later', ['client', 'server']);
});