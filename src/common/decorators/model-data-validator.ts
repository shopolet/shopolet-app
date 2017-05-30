/**
 * @license
 * GNU GENERAL PUBLIC LICENSE
 * Version 3, 29 June 2007
 *
 * @module
 * @description
 * Decorates a domain class by adding a domain validation function. The validation function
 * is the only parameter to the decorator function. The validation function must return
 * an Error or ErrorGroup {@link ../errors/error} to indicate validation failure.
 * @
 */

export function ModelDataValidator(validatorFunction: Function) {
    return function(target: any) {
        target.validateData = validatorFunction;
        return target;
    };
}
