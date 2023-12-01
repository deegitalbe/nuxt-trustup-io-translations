import { JsonCredential, Request } from "@henrotaym/api-client";

class AuthCredential extends JsonCredential {
  prepare(request: Request<any>): void {
    super.prepare(request);
    request.setBaseUrl(`${useRuntimeConfig().public.trustupIoAuthUrl}/api`);
  }
}

export default AuthCredential;
