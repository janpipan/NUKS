import {
    Model,
    InferAttributes,
    InferCreationAttributes,
    DataTypes,
    CreationOptional,
} from 'sequelize';
import dbconnection from '../dbconnection';

class Answer extends Model<
    InferAttributes<Answer>,
    InferCreationAttributes<Answer>
> {
    declare id: CreationOptional<number>;
    declare type: string;
    declare answer: string;
    declare count: number;
    declare pollId: string;
}

Answer.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        answer: {
            type: DataTypes.STRING,
        },
        count: {
            type: DataTypes.INTEGER,
        },
        pollId: {
            type: DataTypes.STRING,
        },
    },
    {
        sequelize: dbconnection,
        tableName: 'answer-events',
    }
);

export { Answer };

/* import {
    Model,
    Sequelize,
    DataTypes,
    InferAttributes,
    InferCreationAttributes,
} from 'sequelize';

export default class Answer extends Model<
    InferAttributes<Answer>,
    InferCreationAttributes<Answer>
> {
    public id?: number;
    public type!: string;
    public answer!: string;
    public count!: number;
    public pollId!: string;
}

export const AnswerMap = (sequelize: Sequelize) => {
    Answer.init(
        {
            id: {
                type: DataTypes.INTEGER.UNSIGNED,
                autoIncrement: true,
                primaryKey: true,
            },
            type: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            answer: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            count: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: false,
            },
            pollId: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            sequelize,
            tableName: 'answers',
        }
    );
    Answer.sync();
}; */
