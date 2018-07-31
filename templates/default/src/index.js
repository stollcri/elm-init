const Elm = require('./Main');

const elm = Elm.Main.fullscreen();

if (module.hot) {
  module.hot.dispose(() => {
    window.location.reload();
  });
}
