var getBootstrapProcessor = require("./bootstrap-processor"),
    usage = require("./usage"),
    parseOptions = require("./parse-options");

function LessPluginBootstap(options) {
    this.options = options;
};

LessPluginBootstap.prototype = {
    install: function(less, pluginManager) {
        var BootstrapProcessor = getBootstrapProcessor();
        pluginManager.addPreProcessor(new BootstrapProcessor(this.options));
    },
    printUsage: function () {
        usage.printUsage();
    },
    setOptions: function(options) {
        this.options = parseOptions(options);
    },
    minVersion: [2, 4, 0]
};

module.exports = LessPluginBootstap;

