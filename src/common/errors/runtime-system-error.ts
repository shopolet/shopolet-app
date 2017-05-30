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

export const I18NKEY_ERROR_RUNTIME_SYSTEM = "shopolet.error.runtime.system";

export class RuntimeSystemError extends AbstractShopoletError {
    defaultI18nKey(): string {
        return I18NKEY_ERROR_RUNTIME_SYSTEM;
    }
}
