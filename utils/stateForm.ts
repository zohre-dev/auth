import { NoticeType } from "antd/es/message/interface";

export interface IFormState {
  notify?: {
    status: NoticeType | undefined;
    message: string;
  };
  userInfo?: {} | undefined;
}
