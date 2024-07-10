import { ConfigProvider } from "antd";
import { FC, PropsWithChildren } from "react";
import { AntdComponents } from "./AntdConfig";

export const AppConfigProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ConfigProvider
      direction="rtl"
      theme={{
        components: AntdComponents,
      }}
    >
      {children}
    </ConfigProvider>
  );
};
