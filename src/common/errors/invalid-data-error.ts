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

export const I18NKEY_ERROR_INVALID_DATA = "shopolet.error.invalid.data";

export class InvalidDataError extends AbstractShopoletError {
    defaultI18nKey(): string {
        return I18NKEY_ERROR_INVALID_DATA;
    }
}
