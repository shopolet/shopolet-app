/**
 * @license
 * GNU GENERAL PUBLIC LICENSE
 * Version 3, 29 June 2007
 *
 * @module
 * @description
 * Extends Ecmascript Error to bypass typescript compilcation errors
 */
export interface IErrorConstructor {
    new (...args): Error;
}

export const DecoratedError = function(...args) {
    Error.apply(this, args);
    Error.captureStackTrace(this);
    this.message = args.length > 0 ? args[0] : undefined;
    this.name = this.constructor.name;
    this.prototype = Object.create(Error.prototype);
} as any as IErrorConstructor;
