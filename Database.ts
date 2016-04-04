import * as Iridium from "iridium";
import * as Promise from "bluebird";

import {FooDocument, Foo} from "./models/Foo";

export class Database extends Iridium.Core {
    Foo: Iridium.Model<FooDocument, Foo> = new Iridium.Model<FooDocument, Foo>(this, Foo);
    
    onConnected() {
        return Promise.all([
            this.Foo.ensureIndexes()
        ]).then(() => {});
    }   
}