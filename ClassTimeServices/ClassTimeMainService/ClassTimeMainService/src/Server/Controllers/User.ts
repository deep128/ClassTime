export class UserController {
    
    private app;
    private dbModels;
    
    constructor(arg) {
        this.app = arg.app;
        this.dbModels = arg.dbModels;
        this.addGetUser();
    }

    private addGetUser() {
        this.app.get("/user/:id",(req, res)=>{
            const id = req.params.id;
            this.dbModels.User.findByPk(id).then(user=>{
                res.send(user);
            }).catch((err)=>{
                res.status(500).end();
            });
        });
    }
}