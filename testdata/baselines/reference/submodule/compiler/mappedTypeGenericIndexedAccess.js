//// [tests/cases/compiler/mappedTypeGenericIndexedAccess.ts] ////

//// [mappedTypeGenericIndexedAccess.ts]
// Repro from #49242

type Types = {
    first: { a1: true };
    second: { a2: true };
    third: { a3: true };
}

class Test {
    entries: { [T in keyof Types]?: Types[T][] };

    constructor() {
        this.entries = {};
    }

    addEntry<T extends keyof Types>(name: T, entry: Types[T]) {
        if (!this.entries[name]) {
            this.entries[name] = [];
        }
        this.entries[name]?.push(entry);
    }
}

// Repro from #49338

type TypesMap = {
    [0]: { foo: 'bar'; };
    [1]: { a: 'b'; };
};

type P<T extends keyof TypesMap> = { t: T; } & TypesMap[T];

type TypeHandlers = {
    [T in keyof TypesMap]?: (p: P<T>) => void;
};

const typeHandlers: TypeHandlers = {
    [0]: (p) => console.log(p.foo),
    [1]: (p) => console.log(p.a),
};

const onSomeEvent = <T extends keyof TypesMap>(p: P<T>) =>
    typeHandlers[p.t]?.(p);


//// [mappedTypeGenericIndexedAccess.js]
class Test {
    entries;
    constructor() {
        this.entries = {};
    }
    addEntry(name, entry) {
        if (!this.entries[name]) {
            this.entries[name] = [];
        }
        this.entries[name]?.push(entry);
    }
}
const typeHandlers = {
    [0]: (p) => console.log(p.foo),
    [1]: (p) => console.log(p.a),
};
const onSomeEvent = (p) => typeHandlers[p.t]?.(p);


//// [mappedTypeGenericIndexedAccess.d.ts]
// Repro from #49242
type Types = {
    first: {
        a1: true;
    };
    second: {
        a2: true;
    };
    third: {
        a3: true;
    };
};
declare class Test {
    entries: {
        [T in keyof Types]?: Types[T][];
    };
    constructor();
    addEntry<T extends keyof Types>(name: T, entry: Types[T]): void;
}
// Repro from #49338
type TypesMap = {
    [0]: {
        foo: 'bar';
    };
    [1]: {
        a: 'b';
    };
};
type P<T extends keyof TypesMap> = {
    t: T;
} & TypesMap[T];
type TypeHandlers = {
    [T in keyof TypesMap]?: (p: P<T>) => void;
};
declare const typeHandlers: TypeHandlers;
declare const onSomeEvent: <T extends keyof TypesMap>(p: P<T>) => void | undefined;
