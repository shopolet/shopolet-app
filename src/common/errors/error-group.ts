/**
 * @license
 * GNU GENERAL PUBLIC LICENSE
 * Version 3, 29 June 2007
 *
 * @module
 * @description
 * A special throwable class that can hold multiple errors in it
 */
import {DecoratedError} from "./decorated-error";

export class ErrorGroup extends DecoratedError {
    private _errors: Array<Error> = [];

    public add(error: Error) {
        this._errors.push(error);
    }

    get errors(): Array<Error> {
        return this._errors;
    }
}
