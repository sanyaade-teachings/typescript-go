//// [tests/cases/compiler/declFileMethods.ts] ////

//// [declFileMethods_0.ts]
export class c1 {
    /** This comment should appear for foo*/
    public foo() {
    }
    /** This is comment for function signature*/
    public fooWithParameters(/** this is comment about a*/a: string,
        /** this is comment for b*/
        b: number) {
        var d = a;
    }
    public fooWithRestParameters(a: string, ...rests: string[]) {
        return a + rests.join("");
    }

    public fooWithOverloads(a: string): string;
    public fooWithOverloads(a: number): number;
    public fooWithOverloads(a: any): any {
        return a;
    }


    /** This comment should appear for privateFoo*/
    private privateFoo() {
    }
    /** This is comment for function signature*/
    private privateFooWithParameters(/** this is comment about a*/a: string,
        /** this is comment for b*/
        b: number) {
        var d = a;
    }
    private privateFooWithRestParameters(a: string, ...rests: string[]) {
        return a + rests.join("");
    }
    private privateFooWithOverloads(a: string): string;
    private privateFooWithOverloads(a: number): number;
    private privateFooWithOverloads(a: any): any {
        return a;
    }


    /** This comment should appear for static foo*/
    static staticFoo() {
    }
    /** This is comment for function signature*/
    static staticFooWithParameters(/** this is comment about a*/a: string,
        /** this is comment for b*/
        b: number) {
        var d = a;
    }
    static staticFooWithRestParameters(a: string, ...rests: string[]) {
        return a + rests.join("");
    }
    static staticFooWithOverloads(a: string): string;
    static staticFooWithOverloads(a: number): number;
    static staticFooWithOverloads(a: any): any {
        return a;
    }


    /** This comment should appear for privateStaticFoo*/
    private static privateStaticFoo() {
    }
    /** This is comment for function signature*/
    private static privateStaticFooWithParameters(/** this is comment about a*/a: string,
        /** this is comment for b*/
        b: number) {
        var d = a;
    }
    private static privateStaticFooWithRestParameters(a: string, ...rests: string[]) {
        return a + rests.join("");
    }
    private static privateStaticFooWithOverloads(a: string): string;
    private static privateStaticFooWithOverloads(a: number): number;
    private static privateStaticFooWithOverloads(a: any): any {
        return a;
    }
}

export interface I1 {
    /** This comment should appear for foo*/
    foo(): string;

    /** This is comment for function signature*/
    fooWithParameters(/** this is comment about a*/a: string,
        /** this is comment for b*/
        b: number): void;

    fooWithRestParameters(a: string, ...rests: string[]): string;

    fooWithOverloads(a: string): string;
    fooWithOverloads(a: number): number;
}

//// [declFileMethods_1.ts]
class c2 {
    /** This comment should appear for foo*/
    public foo() {
    }
    /** This is comment for function signature*/
    public fooWithParameters(/** this is comment about a*/a: string,
        /** this is comment for b*/
        b: number) {
        var d = a;
    }
    public fooWithRestParameters(a: string, ...rests: string[]) {
        return a + rests.join("");
    }

    public fooWithOverloads(a: string): string;
    public fooWithOverloads(a: number): number;
    public fooWithOverloads(a: any): any {
        return a;
    }


    /** This comment should appear for privateFoo*/
    private privateFoo() {
    }
    /** This is comment for function signature*/
    private privateFooWithParameters(/** this is comment about a*/a: string,
        /** this is comment for b*/
        b: number) {
        var d = a;
    }
    private privateFooWithRestParameters(a: string, ...rests: string[]) {
        return a + rests.join("");
    }
    private privateFooWithOverloads(a: string): string;
    private privateFooWithOverloads(a: number): number;
    private privateFooWithOverloads(a: any): any {
        return a;
    }


    /** This comment should appear for static foo*/
    static staticFoo() {
    }
    /** This is comment for function signature*/
    static staticFooWithParameters(/** this is comment about a*/a: string,
        /** this is comment for b*/
        b: number) {
        var d = a;
    }
    static staticFooWithRestParameters(a: string, ...rests: string[]) {
        return a + rests.join("");
    }
    static staticFooWithOverloads(a: string): string;
    static staticFooWithOverloads(a: number): number;
    static staticFooWithOverloads(a: any): any {
        return a;
    }


    /** This comment should appear for privateStaticFoo*/
    private static privateStaticFoo() {
    }
    /** This is comment for function signature*/
    private static privateStaticFooWithParameters(/** this is comment about a*/a: string,
        /** this is comment for b*/
        b: number) {
        var d = a;
    }
    private static privateStaticFooWithRestParameters(a: string, ...rests: string[]) {
        return a + rests.join("");
    }
    private static privateStaticFooWithOverloads(a: string): string;
    private static privateStaticFooWithOverloads(a: number): number;
    private static privateStaticFooWithOverloads(a: any): any {
        return a;
    }
}

interface I2 {
    /** This comment should appear for foo*/
    foo(): string;

    /** This is comment for function signature*/
    fooWithParameters(/** this is comment about a*/a: string,
        /** this is comment for b*/
        b: number): void;

    fooWithRestParameters(a: string, ...rests: string[]): string;

    fooWithOverloads(a: string): string;
    fooWithOverloads(a: number): number;
}


//// [declFileMethods_0.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.c1 = void 0;
class c1 {
    /** This comment should appear for foo*/
    foo() {
    }
    /** This is comment for function signature*/
    fooWithParameters(/** this is comment about a*/ a, 
    /** this is comment for b*/
    b) {
        var d = a;
    }
    fooWithRestParameters(a, ...rests) {
        return a + rests.join("");
    }
    fooWithOverloads(a) {
        return a;
    }
    /** This comment should appear for privateFoo*/
    privateFoo() {
    }
    /** This is comment for function signature*/
    privateFooWithParameters(/** this is comment about a*/ a, 
    /** this is comment for b*/
    b) {
        var d = a;
    }
    privateFooWithRestParameters(a, ...rests) {
        return a + rests.join("");
    }
    privateFooWithOverloads(a) {
        return a;
    }
    /** This comment should appear for static foo*/
    static staticFoo() {
    }
    /** This is comment for function signature*/
    static staticFooWithParameters(/** this is comment about a*/ a, 
    /** this is comment for b*/
    b) {
        var d = a;
    }
    static staticFooWithRestParameters(a, ...rests) {
        return a + rests.join("");
    }
    static staticFooWithOverloads(a) {
        return a;
    }
    /** This comment should appear for privateStaticFoo*/
    static privateStaticFoo() {
    }
    /** This is comment for function signature*/
    static privateStaticFooWithParameters(/** this is comment about a*/ a, 
    /** this is comment for b*/
    b) {
        var d = a;
    }
    static privateStaticFooWithRestParameters(a, ...rests) {
        return a + rests.join("");
    }
    static privateStaticFooWithOverloads(a) {
        return a;
    }
}
exports.c1 = c1;
//// [declFileMethods_1.js]
class c2 {
    /** This comment should appear for foo*/
    foo() {
    }
    /** This is comment for function signature*/
    fooWithParameters(/** this is comment about a*/ a, 
    /** this is comment for b*/
    b) {
        var d = a;
    }
    fooWithRestParameters(a, ...rests) {
        return a + rests.join("");
    }
    fooWithOverloads(a) {
        return a;
    }
    /** This comment should appear for privateFoo*/
    privateFoo() {
    }
    /** This is comment for function signature*/
    privateFooWithParameters(/** this is comment about a*/ a, 
    /** this is comment for b*/
    b) {
        var d = a;
    }
    privateFooWithRestParameters(a, ...rests) {
        return a + rests.join("");
    }
    privateFooWithOverloads(a) {
        return a;
    }
    /** This comment should appear for static foo*/
    static staticFoo() {
    }
    /** This is comment for function signature*/
    static staticFooWithParameters(/** this is comment about a*/ a, 
    /** this is comment for b*/
    b) {
        var d = a;
    }
    static staticFooWithRestParameters(a, ...rests) {
        return a + rests.join("");
    }
    static staticFooWithOverloads(a) {
        return a;
    }
    /** This comment should appear for privateStaticFoo*/
    static privateStaticFoo() {
    }
    /** This is comment for function signature*/
    static privateStaticFooWithParameters(/** this is comment about a*/ a, 
    /** this is comment for b*/
    b) {
        var d = a;
    }
    static privateStaticFooWithRestParameters(a, ...rests) {
        return a + rests.join("");
    }
    static privateStaticFooWithOverloads(a) {
        return a;
    }
}


//// [declFileMethods_0.d.ts]
export declare class c1 {
    /** This comment should appear for foo*/
    foo(): void;
    /** This is comment for function signature*/
    fooWithParameters(/** this is comment about a*/ a: string, 
    /** this is comment for b*/
    b: number): void;
    fooWithRestParameters(a: string, ...rests: string[]): string;
    fooWithOverloads(a: string): string;
    fooWithOverloads(a: number): number;
    /** This comment should appear for privateFoo*/
    private privateFoo;
    /** This is comment for function signature*/
    private privateFooWithParameters;
    private privateFooWithRestParameters;
    private privateFooWithOverloads;
    /** This comment should appear for static foo*/
    static staticFoo(): void;
    /** This is comment for function signature*/
    static staticFooWithParameters(/** this is comment about a*/ a: string, 
    /** this is comment for b*/
    b: number): void;
    static staticFooWithRestParameters(a: string, ...rests: string[]): string;
    static staticFooWithOverloads(a: string): string;
    static staticFooWithOverloads(a: number): number;
    /** This comment should appear for privateStaticFoo*/
    private static privateStaticFoo;
    /** This is comment for function signature*/
    private static privateStaticFooWithParameters;
    private static privateStaticFooWithRestParameters;
    private static privateStaticFooWithOverloads;
}
export interface I1 {
    /** This comment should appear for foo*/
    foo(): string;
    /** This is comment for function signature*/
    fooWithParameters(/** this is comment about a*/ a: string, 
    /** this is comment for b*/
    b: number): void;
    fooWithRestParameters(a: string, ...rests: string[]): string;
    fooWithOverloads(a: string): string;
    fooWithOverloads(a: number): number;
}
//// [declFileMethods_1.d.ts]
declare class c2 {
    /** This comment should appear for foo*/
    foo(): void;
    /** This is comment for function signature*/
    fooWithParameters(/** this is comment about a*/ a: string, 
    /** this is comment for b*/
    b: number): void;
    fooWithRestParameters(a: string, ...rests: string[]): string;
    fooWithOverloads(a: string): string;
    fooWithOverloads(a: number): number;
    /** This comment should appear for privateFoo*/
    private privateFoo;
    /** This is comment for function signature*/
    private privateFooWithParameters;
    private privateFooWithRestParameters;
    private privateFooWithOverloads;
    /** This comment should appear for static foo*/
    static staticFoo(): void;
    /** This is comment for function signature*/
    static staticFooWithParameters(/** this is comment about a*/ a: string, 
    /** this is comment for b*/
    b: number): void;
    static staticFooWithRestParameters(a: string, ...rests: string[]): string;
    static staticFooWithOverloads(a: string): string;
    static staticFooWithOverloads(a: number): number;
    /** This comment should appear for privateStaticFoo*/
    private static privateStaticFoo;
    /** This is comment for function signature*/
    private static privateStaticFooWithParameters;
    private static privateStaticFooWithRestParameters;
    private static privateStaticFooWithOverloads;
}
interface I2 {
    /** This comment should appear for foo*/
    foo(): string;
    /** This is comment for function signature*/
    fooWithParameters(/** this is comment about a*/ a: string, 
    /** this is comment for b*/
    b: number): void;
    fooWithRestParameters(a: string, ...rests: string[]): string;
    fooWithOverloads(a: string): string;
    fooWithOverloads(a: number): number;
}
