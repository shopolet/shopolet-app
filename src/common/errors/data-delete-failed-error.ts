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

export const I18NKEY_ERROR_DATA_DELETE_FAILED = "shopolet.error.data.delete.failed";

export class DataDeleteFailedError extends AbstractShopoletError {
    defaultI18nKey(): string {
        return I18NKEY_ERROR_DATA_DELETE_FAILED;
    }
}
