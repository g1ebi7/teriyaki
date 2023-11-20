export interface ISite {
  createdAt: string;
  id: string;
  price: number;
  tariff: string;
  active: boolean;
}

export interface IChat {
  id: string;
  createdAt: string;
  messages: IMessages[];
  userIds: String[];
}

export interface IUserProps {
  email: string;
  password: string;
  isAdmin: boolean;
  id: string;
  sites: ISite[];
  chats: IChat[];
  createdAt: string;
}

export interface IUser {
  user: IUserProps;
  accessToken: string;
  refreshToken: string;
}

export interface IUserCode {
  email: string;
  code: number;
}

export interface IMessages {
  id?: string;
  createdAt?: string;
  toId: string;
  from?: string;
  chatId: string;
  message: string;
}
