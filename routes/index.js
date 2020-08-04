const graphql = require('./graphql');

/**
 * Registro de rutas
 *
 * @param {Express.Application} app Aplicación de Express
 * @returns {void}
 */
const register = (app) => {
  app.use('/graphql', graphql);
};

module.exports = register;
