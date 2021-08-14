if (process.env.NODE_ENV === 'production') {
  // 我們在 production - return the prod set of keys
  module.exports = require('./prod');
  console.log('now is in prod')
} else {
  // 我們在 development - return the dev keys!!
  module.exports = require('./dev');
  console.log('now is in dev')
}
