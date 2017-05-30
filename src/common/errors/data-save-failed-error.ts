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

export const I18NKEY_ERROR_DATA_SAVE_FAILED = "shopolet.error.data.save.failed";

export class DataSaveFailedError extends AbstractShopoletError {
    defaultI18nKey(): string {
        return I18NKEY_ERROR_DATA_SAVE_FAILED;
    }
}
