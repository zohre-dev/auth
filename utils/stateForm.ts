import { IUserInfo } from "@/services/users/models";
import { NoticeType } from "antd/es/message/interface";

export interface IFormState {
  notify?: {
    status: NoticeType | undefined;
    message: string;
  };
  userInfo?: IUserInfo;
  userCellPhone?: string;
}

// userInfo: {
//             "id": "667fa8834d2d4a8b0cfa4660",
//             "name": "roya",
//             "roles": [
//                 "user"
//             ],
//             "phoneNumber": "123456",
//             "email": "roya@gmail.com",
//             "createdAt": "2024-06-29T06:24:03.604Z",
//             "updatedAt": "2024-06-29T06:24:03.604Z",
//             "loginAttempts": 0
//         }
