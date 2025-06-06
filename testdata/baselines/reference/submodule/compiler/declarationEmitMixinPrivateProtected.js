//// [tests/cases/compiler/declarationEmitMixinPrivateProtected.ts] ////

//// [first.ts]
declare function mix<TMix>(mixin: TMix): TMix;

const DisposableMixin = class {
    protected _onDispose() {
        this._assertIsStripped()
    }
    private _assertIsStripped() {
    }
};

// No error, but definition is wrong. 
export default mix(DisposableMixin);
export class Monitor extends mix(DisposableMixin) {
    protected _onDispose() {
    }
}

//// [another.ts]
declare function mix<TMix>(mixin: TMix): TMix;

const DisposableMixin = class {
    protected _onDispose() {
        this._assertIsStripped()
    }
    private _assertIsStripped() {
    }
};

export default class extends mix(DisposableMixin) {
    protected _onDispose() {
    }
}

//// [first.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Monitor = void 0;
const DisposableMixin = class {
    _onDispose() {
        this._assertIsStripped();
    }
    _assertIsStripped() {
    }
};
// No error, but definition is wrong. 
exports.default = mix(DisposableMixin);
class Monitor extends mix(DisposableMixin) {
    _onDispose() {
    }
}
exports.Monitor = Monitor;
//// [another.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DisposableMixin = class {
    _onDispose() {
        this._assertIsStripped();
    }
    _assertIsStripped() {
    }
};
class default_1 extends mix(DisposableMixin) {
    _onDispose() {
    }
}
exports.default = default_1;


//// [first.d.ts]
declare const _default: {
    new (): {
        _onDispose(): void;
        _assertIsStripped(): void;
    };
};
export default _default;
declare const Monitor_base: {
    new (): {
        _onDispose(): void;
        _assertIsStripped(): void;
    };
};
export declare class Monitor extends Monitor_base {
    protected _onDispose(): void;
}
//// [another.d.ts]
declare const default_base: {
    new (): {
        _onDispose(): void;
        _assertIsStripped(): void;
    };
};
export default class extends default_base {
    protected _onDispose(): void;
}
export {};
