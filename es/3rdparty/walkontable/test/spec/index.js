import "core-js/modules/es.array.iterator";
import "core-js/modules/es.object.to-string";
import "core-js/modules/web.dom-collections.for-each";
import "core-js/modules/web.dom-collections.iterator";
[require.context('.', true, /\.spec\.js$/)].forEach(function (req) {
  req.keys().forEach(function (key) {
    req(key);
  });
});

require('./MemoryLeakTest');