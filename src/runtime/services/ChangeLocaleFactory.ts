import { Client } from "@henrotaym/api-client";
import { AuthCredential } from "../api/credentials/auth";
import { ApiAuthUpdateLocaleEndpoint } from "../api/endpoints/auth";
import ChangeLocale from "./ChangeLocale";

class ChangeLocaleFactory {
  public create(url: string, token: string): ChangeLocale {
    const client = new Client(new AuthCredential(url));

    const endpoint = new ApiAuthUpdateLocaleEndpoint(client);

    return new ChangeLocale(token, endpoint);
  }
}
export default ChangeLocaleFactory;
