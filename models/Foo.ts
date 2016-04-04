import * as Iridium from 'iridium';

export interface FooDocument {
    _id?: string;
    
    bar: string;
}

@Iridium.Collection("foo")
export class Foo extends Iridium.Instance<FooDocument, Foo> implements FooDocument {
    @Iridium.Property(String)
    bar: string;
}