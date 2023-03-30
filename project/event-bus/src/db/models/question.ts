import {
    Model,
    InferAttributes,
    InferCreationAttributes,
    DataTypes,
    CreationOptional,
} from 'sequelize';
import initdb from '../initdb';

class Question extends Model<
    InferAttributes<Question>,
    InferCreationAttributes<Question>
> {
    declare id: CreationOptional<number>;
    declare type: string;
    declare questionId: string;
    declare title: string;
    declare author: string;
    declare multipleAnswers: boolean;
    declare addAnswers: boolean;
}

Question.init(
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
        questionId: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        title: {
            type: DataTypes.STRING,
        },
        multipleAnswers: {
            type: DataTypes.BOOLEAN,
        },
        addAnswers: {
            type: DataTypes.BOOLEAN,
        },
    },
    {
        sequelize: initdb,
        tableName: 'question-events',
    }
);

export { Question };
