const Sequelize = require('sequelize');

module.exports = ((sequelize, DataTypes) => {
    return sequelize.define('instructor', {
        no: {
            autoIncrement: true,
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
        },
        id: {
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING(100),
            allowNull: false,
        }
    },
    {
        tableName: 'instructor',
        timestamps: false,
    }
    );
});