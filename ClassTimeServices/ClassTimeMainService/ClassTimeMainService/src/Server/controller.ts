import { UserController } from "./Controllers/User"
import { Auth } from "./Controllers/auth";

export class Controller {
    
    constructor(arg: any) {
        new Auth(arg);
        new UserController(arg);
    }
}