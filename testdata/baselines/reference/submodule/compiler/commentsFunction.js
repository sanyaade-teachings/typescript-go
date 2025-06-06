//// [tests/cases/compiler/commentsFunction.ts] ////

//// [commentsFunction.ts]
/** This comment should appear for foo*/
function foo() {
} /* trailing comment of function */
foo();
/** This is comment for function signature*/
function fooWithParameters(/** this is comment about a*/a: string,
    /** this is comment for b*/
    b: number) {
    var d = a;
} // trailing comment of function
fooWithParameters("a", 10);
/** fooFunc
 * comment
 */
var fooFunc = function FooFunctionValue(/** fooFunctionValue param */ b: string) {
    return b;
}

/// lamdaFoo var comment
var lambdaFoo = /** this is lambda comment*/ (/**param a*/a: number, /**param b*/b: number) => a + b;
var lambddaNoVarComment = /** this is lambda multiplication*/ (/**param a*/a: number, /**param b*/b: number) => a * b;
lambdaFoo(10, 20);
lambddaNoVarComment(10, 20);

function blah(a: string /* multiline trailing comment 
multiline */) {
}

function blah2(a: string /* single line multiple trailing comments */ /* second */) {
}

function blah3(a: string // trailing commen single line
    ) {
}

lambdaFoo = (a, b) => a * b; // This is trailing comment

/*leading comment*/() => 0; // Needs to be wrapped in parens to be a valid expression (not declaration)
/*leading comment*/(() => 0); //trailing comment

function blah4(/*1*/a: string/*2*/,/*3*/b: string/*4*/) {
}

function foo1() {

    // should emit this
}

function foo2() {
    /// This is some detached comment

    // should emit this leading comment of } too
}


//// [commentsFunction.js]
/** This comment should appear for foo*/
function foo() {
} /* trailing comment of function */
foo();
/** This is comment for function signature*/
function fooWithParameters(/** this is comment about a*/ a, 
/** this is comment for b*/
b) {
    var d = a;
} // trailing comment of function
fooWithParameters("a", 10);
/** fooFunc
 * comment
 */
var fooFunc = function FooFunctionValue(/** fooFunctionValue param */ b) {
    return b;
};
/// lamdaFoo var comment
var lambdaFoo = /** this is lambda comment*/ (/**param a*/ a, /**param b*/ b) => a + b;
var lambddaNoVarComment = /** this is lambda multiplication*/ (/**param a*/ a, /**param b*/ b) => a * b;
lambdaFoo(10, 20);
lambddaNoVarComment(10, 20);
function blah(a /* multiline trailing comment
multiline */) {
}
function blah2(a /* single line multiple trailing comments */ /* second */) {
}
function blah3(a // trailing commen single line
) {
}
lambdaFoo = (a, b) => a * b; // This is trailing comment
/*leading comment*/ () => 0; // Needs to be wrapped in parens to be a valid expression (not declaration)
/*leading comment*/ (() => 0); //trailing comment
function blah4(/*1*/ a /*2*/, /*3*/ b /*4*/) {
}
function foo1() {
    // should emit this
}
function foo2() {
    /// This is some detached comment
    // should emit this leading comment of } too
}


//// [commentsFunction.d.ts]
/** This comment should appear for foo*/
declare function foo(): void; /* trailing comment of function */
/** This is comment for function signature*/
declare function fooWithParameters(/** this is comment about a*/ a: string, 
/** this is comment for b*/
b: number): void; // trailing comment of function
/** fooFunc
 * comment
 */
declare var fooFunc: (b: string) => string;
/// lamdaFoo var comment
declare var lambdaFoo: (a: number, b: number) => number;
declare var lambddaNoVarComment: (a: number, b: number) => number;
declare function blah(a: string /* multiline trailing comment
multiline */): void;
declare function blah2(a: string /* single line multiple trailing comments */ /* second */): void;
declare function blah3(a: string // trailing commen single line
): void;
declare function blah4(/*1*/ a: string /*2*/, /*3*/ b: string /*4*/): void;
declare function foo1(): void;
declare function foo2(): void;
