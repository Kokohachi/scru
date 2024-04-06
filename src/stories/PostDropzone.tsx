import { Group, Text } from "@mantine/core";
import { Dropzone, DropzoneProps, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import { BsFile, BsFiles } from "react-icons/bs";
import { FaFile } from "react-icons/fa";
import { TbUpload, TbX } from "react-icons/tb";

export default function PostDropzone(props: Partial<DropzoneProps>) {
  return (
    <Dropzone
      onDrop={(files) => props.onDrop?.(files)}
      onReject={(files) => props.onReject?.(files)}
      accept={[
        ...IMAGE_MIME_TYPE,
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "application/vnd.ms-excel",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "text/plain",
        "application/zip",
        "application/x-rar-compressed",
      ]}
      {...props}
    >
      <Group
        justify="center"
        gap="xl"
        mih={200}
        h={props.h}
        style={{ pointerEvents: "none" }}
      >
        <Dropzone.Accept>
          <TbUpload
            style={{
              width: 52,
              height: 52,
              color: "var(--mantine-color-blue-6)",
            }}
            stroke={"1.5"}
          />
        </Dropzone.Accept>
        <Dropzone.Reject>
          <TbX
            style={{
              width: 52,
              height: 52,
              color: "var(--mantine-color-red-6)",
            }}
            stroke={"1.5"}
          />
        </Dropzone.Reject>
        <Dropzone.Idle>
          <BsFiles
            style={{
              width: 52,
              height: 52,
              color: "var(--mantine-color-dimmed)",
            }}
            stroke={"1.5"}
          />
        </Dropzone.Idle>

        <div>
          <Text size="xl" inline>
            クリックしてファイルを選択
          </Text>
          <Text size="sm" c="dimmed" inline mt={7}>
            ドラッグアンドドロップも可能・複数選択可
          </Text>
        </div>
      </Group>
    </Dropzone>
  );
}
