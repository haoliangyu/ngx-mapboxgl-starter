# angular2-mapboxgl-starter

A minimal project seed of Angular2, Webpack, and MapboxGL.

**Features**

- [ ] Switch basemap from a collection
- [x] Geocoding and reverse Geocoding via Google geocoding API
- [x] Add popup with mouse click on the map
- [x] Fly to geocoding result

See [**live demo**](https://haoliangyu.github.io/angular2-mapboxgl-starter/).

Working with [angular-2.0.0-rc4](https://github.com/angular/angular/blob/master/CHANGELOG.md#200-rc4-2016-06-30).

## How to set up

This project requires [npm](https://www.npmjs.com/), [typings](https://www.npmjs.com/package/typings),  [webpack](http://webpack.github.io/docs/installation.html).

1.	Run `npm install` to install all dependencies.

2.	Run `typings install` to install type definition.

3.	Run `webpack` to build the project.

4.	As a more convinient way, install and run the [webpack-dev-server](http://webpack.github.io/docs/installation.html) to set up the app at `http://localhost:8080`

## Known Issue

Webpack will throw following error:

```
error TS2656: Exported external package typings file '/home/haoliang/Documents/Projects/angular2-leaflet-starter/node_modules/zone.js/dist/zone.js.d.ts' is not a module. P
lease contact the package author to update the package definition.
```

This is from a bug of zone.js ([#297](https://github.com/angular/zone.js/issues/297)) and the official fix isn't released. This error doesn't stop webpack from bundling the script and the app should work with the generated bundle.

## Looking for alternative solution?

[angular2-leaflet-starter](https://github.com/haoliangyu/angular2-leaflet-starter) is an Angular 2 project seed with [Leaflet](http://leafletjs.com/), the most popular Javascript mapping library.
