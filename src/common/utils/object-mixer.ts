/**
 * @license
 * GNU GENERAL PUBLIC LICENSE
 * Version 3, 29 June 2007
 *
 * @module
 * @description
 * Returns and intersection of 2 classes
 */
export function mixObjects<T, U>(first: T, second: U): T & U {
    let result = <T & U>{};

    for (let key in first) {
        (<any>result)[key] = (<any>first)[key];
    }

    for (let key in second) {
        if (!result.hasOwnProperty(key)) {
            (<any>result)[key] = (<any>second)[key];
        }
    }

    return result;
}
