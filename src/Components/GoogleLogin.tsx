"use client";

import { GoogleLogin } from "@react-oauth/google";
import { setCookie } from "cookies-next";
import setToken from "@/lib/auth";

export default function Login() {
  return (
    <>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          setToken(credentialResponse);
        }
      }
        onError={() => {
          console.log("Login Failed");
        }
      }
      size="large"
      />
    </>
  );
}