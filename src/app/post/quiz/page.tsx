"use client";
import { Header } from "@/stories/Header";
import { Center, Container, Group, Paper, Stack, Text } from "@mantine/core";
import { getCookie, hasCookie } from "cookies-next";
import { useEffect, useState } from "react";
import { User } from "@/stories/Header";
import { jwtDecode } from "jwt-decode";
import { UserData } from "@/lib/auth";
import { Logo } from "@/stories/Logo";
import { Josefin_Sans } from "next/font/google";

const catchFont = Josefin_Sans({ weight: "400", subsets: ["latin"] });

export default function Home() {
  const [user, setUser] = useState({} as User);
  useEffect(() => {
    if (hasCookie("oauth-jwt")) {
      const decodedUserData = jwtDecode(
        getCookie("oauth-jwt") as string
      ) as UserData;
      setUser({
        name: decodedUserData.name,
        email: decodedUserData.email,
        avatar_url: decodedUserData.picture,
      } as User);
    }
  }, []);

  return (
    <>
      <Header user={user} />
      <Container w={"90%"} mx={"auto"} mt={"lg"}>
      </Container>
    </>
  );
}
