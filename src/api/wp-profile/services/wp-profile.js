'use strict';

/**
 * wp-profile service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::wp-profile.wp-profile');
