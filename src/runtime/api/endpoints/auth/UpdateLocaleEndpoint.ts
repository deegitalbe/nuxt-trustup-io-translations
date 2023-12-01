import type { AvailableLocale } from "@deegital/vue-3-trustup-io-translations";
import { Client, Request } from "@henrotaym/api-client";
import { useResponseParser } from "@henrotaymcorp/api-client-parser-addon";
import { z } from "zod";

const schema = z.any();

class UpdateLocaleEndpoint {
  private client: Client;

  constructor(client: Client) {
    this.client = client;
  }

  public async update(locale: AvailableLocale, token: string) {
    const request = new Request()
      .setVerb("PATCH")
      .setUrl("user/update-locale")
      .addHeaders({
        authorization: `Bearer ${token}`,
      })
      .addData({ locale });

    return useResponseParser({
      response: await this.client.try(request),
      schema,
    });
  }
}

export default UpdateLocaleEndpoint;
