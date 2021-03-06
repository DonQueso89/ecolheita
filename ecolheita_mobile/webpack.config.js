const path = require('path')
const createExpoWebpackConfigAsync = require('@expo/webpack-config')

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv)

  config.resolve.alias['@components'] = path.resolve(
    __dirname,
    'src/components/'
  )
  config.resolve.alias[path.resolve(
    __dirname,
    'src/components/'
  )
] = '@components' 
  return config
}
