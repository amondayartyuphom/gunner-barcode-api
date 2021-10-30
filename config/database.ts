import Env from '@ioc:Adonis/Core/Env'
import { DatabaseConfig } from '@ioc:Adonis/Lucid/Database'

const databaseConfig: DatabaseConfig = {
    // Default connection
    connection: Env.get('DB_CONNECTION'),

    // List of available connections
    connections: {
        mysql: {
            client: 'mysql',
            connection: {
                host: Env.get('MYSQL_HOST'),
                port: Env.get('MYSQL_PORT'),
                user: Env.get('MYSQL_USER'),
                password: Env.get('MYSQL_PASSWORD', ''),
                database: Env.get('MYSQL_DB_NAME'),
            },
            migrations: {
                naturalSort: true,
            },
            healthCheck: false,
            debug: false,
        },

        pg: {
            client: 'pg',
            connection: {
                host: Env.get('PG_HOST'),
                port: Env.get('PG_PORT'),
                user: Env.get('PG_USER'),
                password: Env.get('PG_PASSWORD', ''),
                database: Env.get('PG_DB_NAME'),
            },
            migrations: {
                naturalSort: true,
            },
            healthCheck: false,
            debug: false,
        },
    }
}

export default databaseConfig
