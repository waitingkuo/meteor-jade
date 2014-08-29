Package.describe({
  summary: "Jade template language for Meteor",
  version: "0.2.6"
});

Package._transitional_registerBuildPlugin({
  name: "compileJade",
  use: [
    "underscore",
    "htmljs",
    "html-tools",
    "spacebars-compiler",
  ],
  sources: [
    "plugin/lexer.js",
    "plugin/parser.js",
    "plugin/filters.js",
    "plugin/compiler.js",
    "plugin/handler.js",
  ],
  npmDependencies: {
    "jade": "1.5.0",
    "markdown": "0.5.0",
  }
});

Package.on_test(function (api) {
  api.use("tinytest");
  api.use(["waitingkuo:jade", "ui", "spacebars", "templating"]);
  api.add_files(["tests/match.jade", "tests/match.html", "tests/runtime.jade"]);
  api.add_files(["tests/match.js", "tests/runtime.js"], "client");
});
