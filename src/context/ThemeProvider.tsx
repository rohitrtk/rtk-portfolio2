import { ThemeProvider as MTProvider } from "@material-tailwind/react";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function ThemeProvider({ children }: Props) {
  const customTheme = {
    typography: {}
  };

  return <MTProvider>{children}</MTProvider>;
}
