const Sequelize = require("sequelize");

export class SchoolController {
    
    private app;
    private dbModels;
    
    constructor(arg) {
        this.app = arg.app;
        this.dbModels = arg.dbModels;
        this.addSetSchool();
        this.addGetSchool();
    }

    private addSetSchool() {
        this.app.post("/schools/add", (req,res)=>{
            const {schoolName, adminEmail, adminPassword} = req.body;

            this.dbModels.SchoolModel.create({
                name: schoolName,
                isActive: true
            }).then((school)=>{
                res.send(school);

            }).catch(Sequelize.ValidationError, (err)=>{
                res.status(422).send(err.errors[0].message);
            }).catch(function (err) {
                // every other error
                return res.status(400).send(err.message);
            });
        });
    }

    private addGetSchool() {
        this.app.get("/schools", (req,res)=>{
            const start = parseInt(req.query.start);
            const limit = parseInt(req.query.limit);
            this.dbModels.SchoolModel.findAll({
                limit,
                offset: start,
                order: ['name'],
                attributes: ['name', 'isActive']
            }).then(schools=>{
                res.send(schools);
            }).catch(function (err) {
                // every other error
                return res.status(400).send(err.message);
            });
        });
    }
}