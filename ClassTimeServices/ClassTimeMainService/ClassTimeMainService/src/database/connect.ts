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
            UserRole: this.defineUserRoleModel(),
            SchoolModel: this.defineSchoolModel()
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
            },
            isActive: {
                type: Sequelize.BOOLEAN
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
            },
            isActive: {
                type: Sequelize.BOOLEAN
            }
        });

        return UserRole;
    }

    private defineSchoolModel() {
        const SchoolModel = this.sequelize.define('school',{
            id:{
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: Sequelize.STRING,
                validate: {
                    customValidation(value, next) {
                        console.log("value: ----",value);
                      SchoolModel.findOne({ where: {name: value, isActive: true} })
                        .then((school)=> {
                            if(school) {
                                return next('School name already exist!');
                            }
                            next();
                        }).catch(err=>{
                            return next('Some error occured!!!');
                        });
                    }
                  }
            },
            adminId: {
                type: Sequelize.INTEGER,
                references: 'users',
                referencesKey: 'id'
            },
            isActive: {
                type: Sequelize.BOOLEAN
            }
        });

        return SchoolModel;
    }

}