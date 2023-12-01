import { JsonCredential, Request } from "@henrotaym/api-client";

class AuthCredential extends JsonCredential {
  private _url: string;

  constructor(url: string) {
    super();
    this._url = url;
  }

  prepare(request: Request<any>): void {
    super.prepare(request);
    request.setBaseUrl(`${this._url}/api`);
  }
}

export default AuthCredential;
