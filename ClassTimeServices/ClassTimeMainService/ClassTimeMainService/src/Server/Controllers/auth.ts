const jwt = require("jsonwebtoken");

export class Auth {

    private app;
    private User;
    private UserRole;

    constructor(arg) {
        this.app = arg.app;
        this.User = arg.dbModels.User;
        this.UserRole = arg.dbModels.UserRole;
        this.log();
        this.addSignIn();
        this.addAuthentication();
    }

    private addSignIn() {
        this.app.post("/api/signin", (req, res) => {
            const { username, password } = req.body;
            this.User.findOne({
                where: { username, password },
                attributes: ['id']
            }).then(user => {
                if (user == null) {
                    res.status(401).end("Invalid username or password");
                    return;
                }

                this.UserRole.findAll({
                    where: { userid: user.id },
                    attributes: ['role']
                }).then(roles => {
                    const data = {
                        userid: user.id
                    }
                    const token = jwt.sign(data, "key");
                    res.send({ token, roles });
                }).catch(err => {
                    console.log(err.stack);
                    res.status(500).end("error");
                })


            }).catch(err => {
                res.status(500).end("error");
            });
        })
    }

    private addAuthentication() {
        this.app.use((req, res, next) => {
            if (req.method == "OPTIONS")
                return;
            if (req.headers['x-auth']) {
                const token = req.headers['x-auth'];
                jwt.verify(token, "key", (err, decoded) => {
                    if (err) {
                        res.status(400).end("Unauthorized");
                        return;
                    }
                    this.User.findOne({
                        where: { "id": decoded.userid },
                        attributes: ['id']
                    }).then((user) => {
                        if (user == null) {
                            res.status(400).end();
                            return;

                        }
                        req.data = {
                            userid: user.id
                        };
                        next();
                    }).catch((err) => {
                        res.status(500).end("error");
                    });

                });
            }
            else {
                res.status(400).end("Unauthorized");
            }
        });
    }

    private log() {
        this.app.use((req, res, next) => {
            console.log(`${req.method}: ${req.url}   ${JSON.stringify(req.body)}`);
            next();
        });
    }
}