This one doesn't use babel. This means ECMAScript modules won't work without using .mjs files and the  --experimental-modules flag, [see here for more info](https://nodejs.org/docs/latest-v11.x/api/esm.html)

If writing modules for other people to use it is probably worth using babel, although v10, which is the current active LTS release, seems to have support for all shipping features, according to the [node website](https://nodejs.org/en/docs/es6/)

> All shipping features, which V8 considers stable, are turned on by default on Node.js and do NOT require any kind of runtime flag.

Also check the [node.green](http://node.green/) website to see which features are available in which node versions

Thanks to [Robin Wieruch](https://www.robinwieruch.de/minimal-node-js-babel-setup/) for his tutorial