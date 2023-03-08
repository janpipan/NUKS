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
    multipleAnswers: {
        type: DataTypes.BOOLEAN
    },
    addAnswer: {
        type: DataTypes.BOOLEAN
    },
}, {
    sequelize,
    modelName: 'poll'
});

class Answer extends Model {}

Answer.init({
    answer: {
        type: DataTypes.STRING
    },
    count: {
        type: DataTypes.INTEGER
    }, 
},{
    sequelize,
    modelName: 'answer'
});


Poll.hasMany(Answer, {
    foreignKey: 'questionId'
});
Answer.belongsTo(Poll);

module.exports = {Poll, Answer}
