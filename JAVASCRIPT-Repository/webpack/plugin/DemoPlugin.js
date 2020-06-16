class DemoPlugin {
  apply(compiler) {
    console.log(111);
    compiler.hooks.compilation.tap("DemoPlugin", (compilation, ...args) => {
      console.log(args);
    });
  }
}
module.exports = DemoPlugin;
