"use client";
import React, { useEffect } from "react";

import {
  Avatar,
  Button,
  Divider,
  Group,
  Menu,
  Paper,
  Space,
  Stack,
  Text,
} from "@mantine/core";
import { Comfortaa } from "next/font/google";
import { FaBookDead, FaPencilAlt, FaUser } from "react-icons/fa";
import { VscSettings, VscSignOut } from "react-icons/vsc";
import { TbBooks, TbDashboard, TbPencil } from "react-icons/tb";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Logo } from "./Logo";

export type User = {
  name: string;
  avatar_url: string;
  email: string;
};

interface HeaderProps {
  user?: User;
}

const logoFont = Comfortaa({ weight: "500", subsets: ["latin"] });

export function Header({ user }: HeaderProps) {
  const [isLoggedIn, setLoggedIn] = React.useState(false);
  const [userData, setUserData] = React.useState({} as User);
  const router = useRouter();
  const { data: session } = useSession();
  //tokenがあるかどうかでログイン状態を判定

  useEffect(() => {
    if (typeof session !== "undefined") {
      setLoggedIn(true);
      setUserData({
        name: session?.user?.name!,
        email: session?.user?.email!,
        avatar_url: session?.user?.image!,
      });
      console.log(userData)
    }
  },[session]);
  return (
    <header>
      <Paper p={"sm"} w={"90%"} mx={"auto"} withBorder radius={"md"} mt={"lg"} shadow="lg">
        <Group>
          {/* show favicon.svg */}
          <Group onClick={() => router.push("/")} style={{ cursor: "pointer" }}>
            <img
              src={`${process.env.NEXT_PUBLIC_HOST_URL}/favicon.ico`}
              alt="favicon"
              style={{ width: 48, height: 48, filter: "invert(0)" }}
            />
            <Logo fontSize="28" color="gray.7" login={false} />
          </Group>
          {isLoggedIn ? (
            <>
              <Menu
                trigger="hover"
                openDelay={500}
                closeDelay={500}
                transitionProps={{ transition: "fade", duration: 300 }}
                position="bottom-start"
                radius={"lg"}
                offset={20}
              >
                <Menu.Target>
                  <Group ml={"auto"}>
                    <Avatar
                      src={userData.avatar_url}
                      size="md"
                      radius="md"
                    />
                  </Group>
                </Menu.Target>
                <Menu.Dropdown p={"sm"} w={"250px"}>
                  <Stack gap={0}>
                    <Text>{userData?.name}</Text>
                    <Text color="gray" fz={"xs"}>
                      {userData?.email}
                    </Text>
                  </Stack>
                  <Menu.Divider />
                  <Menu.Label>管理</Menu.Label>
                  <Menu.Item leftSection={<TbDashboard />}>
                    ダッシュボード
                  </Menu.Item>
                  <Menu.Item leftSection={<TbBooks />}>投稿管理</Menu.Item>
                  <Menu.Label>アカウント</Menu.Label>
                  <Menu.Item leftSection={<FaUser />}>プロファイル</Menu.Item>
                  <Menu.Item leftSection={<VscSettings />}>設定</Menu.Item>
                  <Menu.Item
                    color="red"
                    leftSection={<VscSignOut style={{ margin: "auto" }} />}
                    onClick={() => {
                      signOut();
                    }}
                  >
                    ログアウト
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>
              <Button
                variant="subtle"
                color="sakuraGreen.4"
                size="md"
                radius="lg"
                leftSection={<TbPencil />}
                onClick={() => {
                  router.push("/post");
                }}
              >
                投稿する
              </Button>
            </>
          ) : (
            <Button
              variant="subtle"
              color=""
              size="md"
              radius="xs"
              ml={"auto"}
              onClick={() => {
                router.push("/login");
              }}
            >
              ログイン
            </Button>
          )}
        </Group>
      </Paper>
      <Space h={"lg"} />
    </header>
  );
}
