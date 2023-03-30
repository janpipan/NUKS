/* import { Answer } from './models/answer';

const dbInit = () => {
    Answer.sync();
};

export { dbInit }; */

import { Sequelize } from 'sequelize';

export default new Sequelize({
    dialect: 'postgres',
    host: 'event-bus-postgres-svc',
    port: 5432,
    database: 'polls',
    username: 'admin',
    password: 'psltest',
});
