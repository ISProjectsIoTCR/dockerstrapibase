'use strict';

/**
 * invoice-sale service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::invoice-sale.invoice-sale');
