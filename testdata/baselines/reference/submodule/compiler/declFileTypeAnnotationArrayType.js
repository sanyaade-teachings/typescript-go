//// [tests/cases/compiler/declFileTypeAnnotationArrayType.ts] ////

//// [declFileTypeAnnotationArrayType.ts]
class c {
}
module m {
    export class c {
    }
    export class g<T> {
    }
}
class g<T> {
}

// Just the name
function foo(): c[] {
    return [new c()];
}
function foo2() {
    return [new c()];
}

// Qualified name
function foo3(): m.c[] {
    return [new m.c()];
}
function foo4() {
    return m.c;
}

// Just the name with type arguments
function foo5(): g<string>[] {
    return [new g<string>()];
}
function foo6() {
    return [new g<string>()];
}

// Qualified name with type arguments
function foo7(): m.g<number>[] {
    return [new m.g<number>()];
}
function foo8() {
    return [new m.g<number>()];
}

// Array of function types
function foo9(): (()=>c)[] {
    return [() => new c()];
}
function foo10() {
    return [() => new c()];
}

//// [declFileTypeAnnotationArrayType.js]
class c {
}
var m;
(function (m) {
    class c {
    }
    m.c = c;
    class g {
    }
    m.g = g;
})(m || (m = {}));
class g {
}
// Just the name
function foo() {
    return [new c()];
}
function foo2() {
    return [new c()];
}
// Qualified name
function foo3() {
    return [new m.c()];
}
function foo4() {
    return m.c;
}
// Just the name with type arguments
function foo5() {
    return [new g()];
}
function foo6() {
    return [new g()];
}
// Qualified name with type arguments
function foo7() {
    return [new m.g()];
}
function foo8() {
    return [new m.g()];
}
// Array of function types
function foo9() {
    return [() => new c()];
}
function foo10() {
    return [() => new c()];
}


//// [declFileTypeAnnotationArrayType.d.ts]
declare class c {
}
declare namespace m {
    class c {
    }
    class g<T> {
    }
}
declare class g<T> {
}
// Just the name
declare function foo(): c[];
declare function foo2(): c[];
// Qualified name
declare function foo3(): m.c[];
declare function foo4(): typeof m.c;
// Just the name with type arguments
declare function foo5(): g<string>[];
declare function foo6(): g<string>[];
// Qualified name with type arguments
declare function foo7(): m.g<number>[];
declare function foo8(): m.g<number>[];
// Array of function types
declare function foo9(): (() => c)[];
declare function foo10(): (() => c)[];
