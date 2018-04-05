# use-global v0.0.2 

Tries to load the given module name by looking in:
- `$NODE_PATH`
- `~/.node_modules`
- `npm root -g`

```js
let useGlobal = require('use-global')

// Load a module that is globally installed.
let coffee = useGlobal('coffeescript')

// Inspect or mutate the roots array.
useGlobal.roots
```

