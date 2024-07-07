export interface IUserInfo {
  id: string;
  name: string;
  roles: ("user" | "admin")[];
  phoneNumber: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  loginAttempts: number;
}

export interface IRegisterArguments {
  name?: string;
  email: string;
  password: string;
  phoneNumber: string;
}
export interface ILoginArguments {
  email: string;
  password: string;
}

export interface IPhoneArguments {
  cellphone: string;
}

export interface IOtpArguments {
  cellphone: string | undefined;
  password: string;
  otp: string;
}
