import { useTranslation } from "@deegital/vue-3-trustup-io-translations";
import type { AvailableLocale } from "@deegital/vue-3-trustup-io-translations";
import { ApiAuthUpdateLocaleEndpoint } from "../api/endpoints/auth";

class ChangeLocale {
  private _token: string;
  private _endpoint;

  constructor(token: string, endpoint: ApiAuthUpdateLocaleEndpoint) {
    this._token = token;
    this._endpoint = endpoint;
  }

  public updateLocale(locale: AvailableLocale) {
    this.updateAppLocale(locale);
    this.updateUserLocale(locale);
  }

  private updateAppLocale(locale: AvailableLocale) {
    useTranslation().setCurrentLocale(locale);
  }

  private updateUserLocale(locale: AvailableLocale) {
    this._endpoint.update(locale, this._token);
  }
}

export default ChangeLocale;
