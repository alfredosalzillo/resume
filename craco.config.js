const CracoSwcPlugin =  require("craco-swc");

const config = {
  plugins: [{
    plugin: CracoSwcPlugin,
    options: {
      swcLoaderOptions: {
        jsc: {
          externalHelpers: true,
          target: "esnext",
          parser: {
            syntax: "typescript",
            jsx: true,
            dynamicImport: true,
            exportDefaultFrom: true,
          },
        },
      },
    },
  }],
};

exports = config;
