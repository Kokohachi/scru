import { CredentialResponse } from "@react-oauth/google";
import { setCookie } from "cookies-next";

const setToken = (token: CredentialResponse) => {
  setCookie("oauth-jwt", token.credential, {
    maxAge: 60 * 60 * 24 * 366,
    path: "/",
  });
};

export interface UserData {
  aud: string;
  azp: string;
  email: string;
  email_verified: boolean;
  exp: number;
  family_name: string;
  given_name: string;
  iat: number;
  iss: string;
  jti: string;
  locale: string;
  name: string;
  nbf: number;
  picture: string;
  sub: string;
}
export default setToken;
