# use-global v0.0.1 

Tries to load the given module name by looking in
`$NODE_PATH` and `~/.node_modules`.

```js
let useGlobal = require('use-global')

// Load a module that is globally installed.
let coffee = useGlobal('coffeescript')
```

