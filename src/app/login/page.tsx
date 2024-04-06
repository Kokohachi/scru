"use client";
import { Header } from "@/stories/Header";
import { Button, Card, Center, Container, Paper, Stack, Text } from "@mantine/core";
import GoogleLogin from "../../Components/GoogleLogin";
import { useSession, signIn, signOut } from 'next-auth/react';
import { Comfortaa } from "next/font/google";
import { Logo } from "@/stories/Logo";

const logoFont = Comfortaa({ weight: "500", subsets: ["latin"] });


export default function Login() {
  const { data: session } = useSession();
  return (
    <>
      <Header />
      <Container w={"90%"} mx={"auto"}>
        <Center>
          <Card withBorder p={"lg"} mt={"lg"} radius={"md"}>
          <Stack align="center" w={"100%"}>
          <Logo fontSize="lg" login={true} />
          <Button size="lg" fullWidth onClick={() => signIn('google')}>
            Googleでログイン
          </Button>
          </Stack>
          </Card>
        </Center>
      </Container>
    </>
  );
}
