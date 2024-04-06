// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
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

import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { NavigationProgress } from '@mantine/nprogress';
import { SessionProvider } from "next-auth/react";
import NextAuthProvider from "./providers/NextAuth";

export const metadata = {
  title: "scru.me",
  description: "scru.me - a platform for students",
};

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <NextAuthProvider>
        <GoogleOAuthProvider
          clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string}
        >

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
            <NavigationProgress />
            {children}
            {modal}
            <div id="modal-root" />
          </MantineProvider>
        </GoogleOAuthProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
