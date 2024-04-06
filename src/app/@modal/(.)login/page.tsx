"use client";
import { Header } from "@/stories/Header";
import { Button, Card, Center, Container, Paper, Stack, Text } from "@mantine/core";
import GoogleLogin from "../../../Components/GoogleLogin";
import { LoginModal } from "./modal";
import { Logo } from "@/stories/Logo";
import { useSession, signIn, signOut } from 'next-auth/react';

export default function Login() {
  return (
    <LoginModal>
        <Center>
          <Container p={"lg"} mt={"lg"}>
            <Stack align="center" w={"100%"}>
              <Logo fontSize="lg" login={true} />
              <Button size="lg" fullWidth onClick={() => signIn('google')}>
            Googleでログイン
          </Button>
            </Stack>
          </Container>
        </Center>
    </LoginModal>
  );
}
