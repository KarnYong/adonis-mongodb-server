'use strict'

/** @type {import('@adonisjs/framework/src/Env')} */
const Env = use('Env')

/** @type {import('@adonisjs/ignitor/src/Helpers')} */
const Helpers = use('Helpers')

module.exports = {

  /*
  |--------------------------------------------------------------------------
  | Default Connection
  |--------------------------------------------------------------------------
  |
  | Connection defines the default connection settings to be used while
  | interacting with Mongodb databases.
  |
  */
  connection: Env.get('DB_CONNECTION', 'mongodb'),
  /*-------------------------------------------------------------------------*/

  mongodb: {
    client: 'mongodb',
    connectionString: Env.get('DB_CONNECTION_STRING', ''),
    connection: {
      host: Env.get('DB_HOST', ''),
      port: Env.get('DB_PORT', ),
      username: Env.get('DB_USER', ''),
      password: Env.get('DB_PASSWORD', ''),
      database: Env.get('DB_DATABASE', ''),
      options: {
        ssl: Env.get('DB_SSL', ''),
        readPreference: Env.get('DB_READ_PREFERENCE', 'secondary'),
        authSource: Env.get('DB_AUTH_SOURCE', '')
      }
    }
  }
}