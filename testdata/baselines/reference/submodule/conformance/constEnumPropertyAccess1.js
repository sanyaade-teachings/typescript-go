//// [tests/cases/conformance/constEnums/constEnumPropertyAccess1.ts] ////

//// [constEnumPropertyAccess1.ts]
// constant enum declarations are completely erased in the emitted JavaScript code.
// it is an error to reference a constant enum object in any other context
// than a property access that selects one of the enum's members

const enum G {
    A = 1,
    B = 2,
    C = A + B,
    D = A * 2
}

var o: {
    [idx: number]: boolean
} = {
        1: true
    };

var a = G.A;
var a1 = G["A"];
var g = o[G.A];

class C {
    [G.A]() { }
    get [G.B]() {
        return true;
    }
    set [G.B](x: number) { }
}



//// [constEnumPropertyAccess1.js]
// constant enum declarations are completely erased in the emitted JavaScript code.
// it is an error to reference a constant enum object in any other context
// than a property access that selects one of the enum's members
var G;
(function (G) {
    G[G["A"] = 1] = "A";
    G[G["B"] = 2] = "B";
    G[G["C"] = 3] = "C";
    G[G["D"] = 2] = "D";
})(G || (G = {}));
var o = {
    1: true
};
var a = G.A;
var a1 = G["A"];
var g = o[G.A];
class C {
    [G.A]() { }
    get [G.B]() {
        return true;
    }
    set [G.B](x) { }
}


//// [constEnumPropertyAccess1.d.ts]
// constant enum declarations are completely erased in the emitted JavaScript code.
// it is an error to reference a constant enum object in any other context
// than a property access that selects one of the enum's members
declare const enum G {
    A = 1,
    B = 2,
    C = 3,
    D = 2
}
declare var o: {
    [idx: number]: boolean;
};
declare var a: G;
declare var a1: G;
declare var g: boolean;
declare class C {
    [G.A](): void;
    get [G.B](): number;
    set [G.B](x: number);
}
