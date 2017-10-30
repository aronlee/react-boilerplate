// [
//   'eventsource-polyfill', // Necessary for hot reloading with IE
//   'webpack-hot-middleware/client?reload=true',
// ]
function mergeModleToEntry(entry, hotModuels) {
  const entryType = typeof entry;
  // console.log
  if (entryType === 'array') {
    return Array.prototype.concat.apply(hotModuels, entry)
  }
  if (entryType === 'object') {
    let result = {};
    Object.keys(entry).map(key => {
      result[key] = Array.prototype.concat.apply(hotModuels, entry[key]);
    });
    return result;
  }
  return hotModuels;
}

export default {
  mergeModleToEntry
}