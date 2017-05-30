/**
 * @license
 * GNU GENERAL PUBLIC LICENSE
 * Version 3, 29 June 2007
 *
 * @module
 * @description
 * abstract app error class. App error classes hold a key and optional variables to be used to display localized messages.
 * Each concrete implementation needs to provide a default key. Client code can override that with "set i18nKey".
 */
import {DecoratedError} from "./decorated-error";

export abstract class AbstractShopoletError extends DecoratedError {
    private _i18nKey: string;
    public i18nVars?: any; //todo - type of i18n variable field to be modified based on i18n implementation module

    protected abstract defaultI18nKey():string;

    get i18nKey(): string {
        return this._i18nKey || this.defaultI18nKey();
    }

    set i18nKey(key: string) {
        this._i18nKey = key;
    }
}
