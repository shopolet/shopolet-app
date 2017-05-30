/**
 * @license
 * GNU GENERAL PUBLIC LICENSE
 * Version 3, 29 June 2007
 *
 * @module
 * @description
 *
 */
import {AbstractShopoletError} from "./abstract-shopolet-error";

export * from "./abstract-shopolet-error";
export * from  "./data-delete-failed-error";
export * from "./data-save-failed-error";
export * from "./error-group";
export * from "./invalid-data-error";
export * from "./runtime-system-error";

/**
 * The first argument in i18nArgs can be a string formatted as "key:<key name>". If so the first argument is used to
 * replace the i18nKey
 * @param type
 * @param i18nArgs
 * @returns {T}
 */
export function createError<T extends AbstractShopoletError>(type: { new(): T ; }, ...i18nArgs): T {
    let error: T = new type();

    if (i18nArgs && i18nArgs.length > 0) {
        (typeof i18nArgs[0] === "string" && i18nArgs[0].substr(0, 4) === "key:") ? (() => {
                error.i18nKey = i18nArgs[0].substr(4);
                //todo - type of i18n variable field to be modified based on i18n implementation module
                error.i18nVars = i18nArgs.length > 1 ? i18nArgs.slice(1) : null;
            })() : (() => {
                //todo - type of i18n variable field to be modified based on i18n implementation module
                error.i18nVars = i18nArgs;
            })();
    }

    return error;
}
