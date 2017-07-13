'use strict'

const EmberAddon = require('ember-cli/lib/broccoli/ember-addon')

module.exports = function (defaults) {
  let app = new EmberAddon(defaults, {
    outputPaths: {
      app: {
        css: {
          'app': '/assets/dummy.css',
          'secondary': '/assets/secondary.css'
        }
      }
    },
    postcssOptions: {
      compile: {
        plugins: [
          { module: require('postcss-color-gray') }
        ]
      },
      filter: {
        enabled: true,
        plugins: [
          { module: require('postcss-color-rebeccapurple') }
        ]
      }
    }
  })

  app.import('vendor/ember/ember-template-compiler.js')

  return app.toTree()
}
