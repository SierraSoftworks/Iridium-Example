import {Database} from "./Database";

export default class Application {
    constructor() {
        this.database = new Database("mongodb://localhost/test");
    }
    
    database: Database;
    
    start() {
        return this.database.connect();
    }
    
    stop() {
        return this.database.close();
    }
}