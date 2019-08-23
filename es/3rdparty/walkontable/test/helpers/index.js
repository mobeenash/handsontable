import "core-js/modules/es.object.keys";
import "core-js/modules/web.dom-collections.for-each";

/* eslint-disable import/no-unresolved */
import window from 'window';
import * as common from './common'; // Export all helpers to the window.

Object.keys(common).forEach(function (key) {
  window[key] = common[key];
});