let addon

function getIsQuietHours () {
  if (process.platform !== 'win32') {
    throw new Error('windows-quiet-hours works only on Windows')
  }

  addon = addon || require('bindings')('quiethours')
  return addon.isQuietHours()
}

module.exports = { getIsQuietHours: getIsQuietHours }
