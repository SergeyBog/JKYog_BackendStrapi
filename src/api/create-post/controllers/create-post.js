'use strict';

/**
 * create-post controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::create-post.create-post');
