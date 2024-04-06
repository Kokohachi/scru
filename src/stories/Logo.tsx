import { Comfortaa } from "next/font/google";
import { Text } from "@mantine/core";

const logoFont = Comfortaa({ weight: "500", subsets: ["latin"] });

type LogoProps = {
  fontSize?: string;
  color?: string;
  login?: boolean;
};

export function Logo({ fontSize = "lg", color = "black", login = false }: LogoProps) {
  return (
    login ? (
    <Text fz={fontSize} className={logoFont.className} color={color}>
      Scru にログイン
    </Text>
    ) : (
    <Text fz={fontSize} className={logoFont.className} color={color}>
      Scru
    </Text>
    )
  );
}