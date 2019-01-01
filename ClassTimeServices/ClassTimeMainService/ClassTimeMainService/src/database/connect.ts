const Sequelize = require("sequelize");

export class DBConnect {

    private sequelize;
    private models;

    constructor() {
        this.sequelize = new Sequelize('classtime', 'root', '', {
            host: 'localhost',
            dialect: 'mysql',
            operatorsAliases: false,

            pool: {
                max: 5,
                min: 0,
                acquire: 30000,
                idle: 10000
            }
        });

        this.models = {
            User: this.defineUserModel(),
            UserRole: this.defineUserRoleModel()
        }

        this.sequelize.authenticate()
            .then(() => {
                console.log('Connection has been established successfully.');
                
            })
            .catch(err => {
                console.error('Unable to connect to the database:', err);
            });
    }

    public getModels() {
        return this.models;
    }

    private defineUserModel() {
        const User = this.sequelize.define('user',{
            id:{
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            username: {
                type: Sequelize.STRING
            },
            password: {
                type: Sequelize.STRING
            },
            firstName: {
                type: Sequelize.STRING
            },
            lastName: {
                type: Sequelize.STRING
            }
        });

        return User;
    }

    private defineUserRoleModel() {
        const UserRole = this.sequelize.define('user_role',{
            id:{
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            userid: {
                type: Sequelize.INTEGER,
                references: 'users',
                referencesKey: 'id'
            },
            role: {
                type: Sequelize.ENUM,
                values: ['ADMIN', 'PRINCIPAL', 'TEACHER', 'STUDENT', 'STAFF']
            }
        });

        return UserRole;
    }

}

