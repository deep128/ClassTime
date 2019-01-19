import { UserController } from "./Controllers/User"
import { Auth } from "./Controllers/auth";
import { SchoolController } from "./Controllers/school";

export class Controller {
    
    constructor(arg: any) {
        new Auth(arg);
        new UserController(arg);
        new SchoolController(arg);
    }
}