// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
"use client";
import "@mantine/core/styles.css";
import "@mantine/code-highlight/styles.css";
import "@mantine/carousel/styles.css";
import "@mantine/charts/styles.css";
import "@mantine/dropzone/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/notifications/styles.css";
import "@mantine/nprogress/styles.css";
import "@mantine/spotlight/styles.css";
import "@mantine/tiptap/styles.css";

import React, { useEffect } from "react";
import { addons } from "@storybook/preview-api";
import { DARK_MODE_EVENT_NAME } from "storybook-dark-mode";
import { MantineProvider, useMantineColorScheme } from "@mantine/core";

const channel = addons.getChannel();

function ColorSchemeWrapper({ children }: { children: React.ReactNode }) {
  const { setColorScheme } = useMantineColorScheme();
  const handleColorScheme = (value: boolean) =>
    setColorScheme(value ? "dark" : "light");

  useEffect(() => {
    channel.on(DARK_MODE_EVENT_NAME, handleColorScheme);
    return () => channel.off(DARK_MODE_EVENT_NAME, handleColorScheme);
  }, [channel]);

  return <>{children}</>;
}

export const decorators = [
  (renderStory: any) => (
    <ColorSchemeWrapper>{renderStory()}</ColorSchemeWrapper>
  ),
  (renderStory: any) => (
    <MantineProvider
      theme={{
        colors: {
          sakuraGreen: [
            "#e5faf6",
            "#dbefea",
            "#bedbd4",
            "#9cc5bc",
            "#81b4a7",
            "#6ea99a",
            "#63a394",
            "#518f80",
            "#437f72",
            "#316f61",
          ],
          sakuraMoegi: [
            "#f4fae9",
            "#e8f2db",
            "#d2e3b8",
            "#b9d391",
            "#a4c671",
            "#97bd5d",
            "#8fb950",
            "#7ca241",
            "#6d9036",
            "#5b7d29",
          ],
          sakuraOrange: [
            "#fff4e6",
            "#ffe7d0",
            "#fdcc9f",
            "#fdb168",
            "#fd993c",
            "#fd8a21",
            "#fd8213",
            "#e27007",
            "#c96200",
            "#af5300",
          ],
          sakuraPink: [
            "#ffe9e9",
            "#ffd0d0",
            "#fd9d9d",
            "#fc6766",
            "#fc3c39",
            "#fc231c",
            "#fd160e",
            "#e20a03",
            "#c90000",
            "#b00000",
          ],
        },
      }}
    >
      {renderStory()}
    </MantineProvider>
  ),
];
