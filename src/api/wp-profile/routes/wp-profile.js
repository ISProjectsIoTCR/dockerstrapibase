'use strict';

/**
 * wp-profile router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::wp-profile.wp-profile');
