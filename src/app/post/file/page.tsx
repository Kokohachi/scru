"use client";
import { Header } from "@/stories/Header";
import {
  Button,
  Card,
  Center,
  Container,
  FileButton,
  Group,
  Paper,
  Stack,
  Stepper,
  Text,
} from "@mantine/core";
import { getCookie, hasCookie } from "cookies-next";
import { useEffect, useState } from "react";
import { User } from "@/stories/Header";
import { jwtDecode } from "jwt-decode";
import { UserData } from "@/lib/auth";
import { Logo } from "@/stories/Logo";
import { Josefin_Sans } from "next/font/google";
import PostDropzone from "@/stories/PostDropzone";
import { TbFile, TbPdf, TbPlus } from "react-icons/tb";
import { BsFile, BsFiles, BsPlus } from "react-icons/bs";
import { useMediaQuery } from '@mantine/hooks';

const catchFont = Josefin_Sans({ weight: "400", subsets: ["latin"] });

export default function Home() {
  const [user, setUser] = useState({} as User);
  const [active, setActive] = useState(0);
  const [files, setFiles] = useState([] as File[]);
  const isMobile = useMediaQuery('(max-width: 768px)');
  const nextStep = () =>
    setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));
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
      <Container w={"90%"} mih={400}>
        <Text fz={"24"} fw={500}>
          ファイル投稿
        </Text>
        <Stepper active={active} onStepClick={setActive} mt={"sm"}>
          <Stepper.Step
            label="ファイル選択"
            description="ファイルを選択してアップロード"
          >
            <Container mx={"auto"} mt={"lg"}>
              {files.length > 0 && (
                <Stack gap={"md"}>
                  {files.map((file) => (
                    <Card key={file.name} shadow="md" p={"md"} radius={"md"}>
                      <Group>
                        <BsFiles size={"20px"} />
                        <Text>{file.name}</Text>
                        <Button
                          color="sakuraGreen.5"
                          radius={"md"}
                          variant="outline"
                          ml={"auto"}
                          onClick={() => {
                            const reader = new FileReader();
                            reader.onload = (e) => {
                              const data = e?.target?.result as ArrayBuffer;
                              const blob = new Blob([data], {
                                type: file.type,
                              });
                              const url = URL.createObjectURL(blob);
                              url && window.open(url, "_blank");
                            };
                            reader.readAsArrayBuffer(file);
                          }}
                        >
                          プレビュー
                        </Button>
                        <Button
                          color="sakuraPink.4"
                          radius={"md"}
                          variant="outline"
                          onClick={() =>
                            setFiles((current) =>
                              current.filter((f) => f !== file)
                            )
                          }
                        >
                          削除
                        </Button>
                      </Group>
                    </Card>
                  ))}
                  <FileButton onChange={(file: File | null) => {setFiles([...files, file as File])}} accept="image/*, application/pdf">
                    {(props) => <Button {...props} leftSection={<BsPlus />} color="sakuraMoegi.5">更にファイルを追加</Button>}
                  </FileButton>
                </Stack>
              )}
              {files.length === 0 && (
                <PostDropzone mt={"sm"} onDrop={setFiles} h={"320px"} />
              )}
              <Group mt={"lg"}>
                <Button color="gray" radius={"md"}>
                  キャンセル
                </Button>
                <Button
                  color="sakuraMoegi.5"
                  radius={"md"}
                  variant="outline"
                  ml={"auto"}
                  miw={"100px"}
                  onClick={nextStep}
                >
                  次へ
                </Button>
              </Group>
            </Container>
          </Stepper.Step>
          <Stepper.Step label="詳細の入力" description="ファイルの詳細を記入">
            Step 2 content: Verify email
          </Stepper.Step>
          <Stepper.Step label="最終確認" description="アップロード内容を確認">
            Step 3 content: Get full access
          </Stepper.Step>
          <Stepper.Completed>
            Completed, click back button to get to previous step
          </Stepper.Completed>
        </Stepper>
      </Container>
    </>
  );
}
