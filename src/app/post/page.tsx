"use client";
import { Header, User } from "@/stories/Header";
import { Card, Container, Group, Stack, Text } from "@mantine/core";
import { FaFile } from "react-icons/fa";
import { BsBook, BsFiles, BsQuestionCircle } from "react-icons/bs";
import { VscChevronRight } from "react-icons/vsc";
import { UserData } from "@/lib/auth";
import { hasCookie, getCookie } from "cookies-next";
import { jwtDecode } from "jwt-decode";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
export default function Home() {
  const [user, setUser] = useState({} as User);
  const router = useRouter();
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
        <Stack gap={"xl"} >
          <Text fz={"30"} fw={500}>
            投稿の種類を選択
          </Text>
          <Card padding={"xl"} radius={"md"} withBorder style={{"cursor": "pointer"}} onClick={() => router.push("/post/file")}  >
            <Group>
              <BsFiles size={"30px"} />
              <Text>ファイル投稿</Text>
              <VscChevronRight size={"30px"} style={{"marginLeft": "auto"}}/>
            </Group>
          </Card>
          <Card padding={"xl"} radius={"md"} withBorder style={{"cursor": "pointer"}} onClick={() => router.push("/post/quiz")}>
            <Group>
              <BsQuestionCircle size={"30px"} />
              <Text>クイズレット投稿</Text>
              <VscChevronRight size={"30px"} style={{"marginLeft": "auto"}}/>
            </Group>
          </Card>
          <Card padding={"xl"} radius={"md"} withBorder style={{"cursor": "pointer"}} onClick={() => router.push("/post/note")}>
            <Group>
              <BsBook size={"30px"} />
              <Text>ノート投稿</Text>
              <VscChevronRight size={"30px"} style={{"marginLeft": "auto"}}/>
            </Group>
          </Card>
        </Stack>
      </Container>
    </>
  );
}
