'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('import-from-word')
      .service('myService')
      .getWelcomeMessage();
  },
});
