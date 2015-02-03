less-plugin-bootstrap
========================

Imports [Bootstrap](http://getbootstrap.com) Less code before your custom Less code.

## lessc usage

Install..

Notice require Less v3.2.1 (download from github)

```
npm install -g less-plugin-bootstrap
```

and then on the command line,

```
lessc file.less --bootstrap
```

to create Bootstrap compatible code run with the [Less autoprefix plugin](https://github.com/less/less-plugin-autoprefix):

```
lessc file.less --bootstrap --autoprefix="Android 2.3,Android >= 4,Chrome >= 20,Firefox >= 24,Explorer >= 8,iOS >= 6,Opera >= 12,Safari >= 6"
```



## Programmatic usage

```
var LessPluginBootstrap = require('less-plugin-bootstrap'),
    bootstrapPlugin = new LessPluginBootstrap();
less.render(lessString, { plugins: [bootstrapPlugin] })
  .then(
```

## Browser usage

Browser usage is not supported at this time.
