const peerDepsExternal = require('rollup-plugin-peer-deps-external')

module.exports = {
  rollup(config, options) {
    // config.external = ['formik', '@chakra-ui/react']
    config.plugins.push(peerDepsExternal())

    console.log(config.external)
    return config
  },
}
