'use strict';

/**
 * create-post service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::create-post.create-post');
