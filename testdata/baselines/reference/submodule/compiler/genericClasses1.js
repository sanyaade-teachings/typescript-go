//// [tests/cases/compiler/genericClasses1.ts] ////

//// [genericClasses1.ts]
class C<T> {
	public x: T;
}

var v1 = new C<string>();

var y = v1.x; // should be 'string'

//// [genericClasses1.js]
class C {
    x;
}
var v1 = new C();
var y = v1.x; // should be 'string'


//// [genericClasses1.d.ts]
declare class C<T> {
    x: T;
}
declare var v1: C<string>;
declare var y: string; // should be 'string'
