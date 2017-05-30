/**
 * @license
 * GNU GENERAL PUBLIC LICENSE
 * Version 3, 29 June 2007
 *
 * @module
 * @description
 * takes a constructor function and optional argument
 */
export function constructClass<T extends Function>(constructor: T, args?: any) {
    let c: any = (): any => {
        return constructor.apply(this, args);
    };
    c.prototype = constructor.prototype;
    return new c();
}

