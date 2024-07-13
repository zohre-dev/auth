import { AuthProvider } from "@/context/AuthContext";
import "./globals.css";

import NextNProgressbar from "@/libraries/NextNProgressbar";
import { AppConfigProvider } from "@/components/Providers/ConfigProvider";
import StyledComponentsRegistry from "./styled-components/registry";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <StyledComponentsRegistry>
          <AppConfigProvider>
            <AuthProvider>
              <NextNProgressbar>{children}</NextNProgressbar>
            </AuthProvider>
          </AppConfigProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
