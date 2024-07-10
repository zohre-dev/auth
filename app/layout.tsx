import { AuthProvider } from "@/context/AuthContext";
import "./globals.css";
import { Suspense } from "react";
import Loading from "@/components/Loading";
import NextNProgressbar from "@/libraries/NextNProgressbar";
import { ConfigProvider } from "antd";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <ConfigProvider
          direction="rtl"
          theme={{
            components: {
              // #d9d9d9
              Button: {
                colorPrimary: "#d4b170",
                algorithm: true, // Enable algorithm
                fontSize: 16,
              },
              Input: {
                colorPrimary: "#d4b170 ",
                algorithm: true, // Enable algorithm
              },
            },
          }}
        >
          <AuthProvider>
            <NextNProgressbar>{children}</NextNProgressbar>
          </AuthProvider>
        </ConfigProvider>
      </body>
    </html>
  );
}
