# [Build a JavaScript Util Library for NPM with ES6 Modules and CommonJS](https://mparavano.medium.com/build-a-javascript-util-library-for-npm-with-es6-modules-and-commonjs-9e78b51e3714)

im `dist` folder wird nur das `package.json` eingecheckt der rest wird generiert.  
durch `npm run compile`

Wir publish'en dieses Module als: [npm link](https://dev.to/one-beyond/different-approaches-to-testing-your-own-packages-locally-npm-link-4hoj)  
durch `npm link` aus dem: dist folder heraus.  
listed alle global verfuegbaren Module: `npm ls -g --depth=0 --link=true`  
jetzt kann man das mit: `npm link estos-entraid` in jedes beliebige project aufnehmen.

> das publishen & kosumieren von npm packeages via. `npm link`  
> hat den nachteil das diese OS Symbolischen Links im Filesystem  
> vor jedem checkout entfernt und nach dem checkout wieder-her-gestellt werden muessen.