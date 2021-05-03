module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-px-to-viewport": {
      viewportWidth: 375,
    viewportHeight: 667,
    unitPrecision: 5,
    viewprotUnit: 'vw',
    // selectorBlackList: ['tar-bar','tar-bar-item'],
    minPixelValue: 1,
    mediaQuery: true,
    // exclude:[/TabBar/]
    }
  }
}