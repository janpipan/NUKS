const {Model, DataTypes} = require('sequelize');
const sequelize = require('./database.js');


class Poll extends Model {}

Poll.init({
    question: {
        type: DataTypes.STRING
    },
    author: {
        type: DataTypes.STRING
    },
    multiple_answers: {
        type: DataTypes.BOOLEAN
    },
    add_answer: {
        type: DataTypes.BOOLEAN
    },
}, {
    sequelize,
    modelName: 'poll'
})

module.exports = Poll;