const withImages = require("next-images");
const withTM = require("next-transpile-modules")(["@madzadev/audio-player"]);

export default withImages(withTM());