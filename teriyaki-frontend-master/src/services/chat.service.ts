import axiosRequest from "@/api/axios.settings";
import { IMessage } from "@/types/chat.interface";
import { IChat } from "@/types/user.interface";

export const ChatService = {
  async getChat(id: string) {
    return await axiosRequest.get<IChat>(`/chat/get/${id}`);
  },

  async sendMessage({ toId, chatId, message }: IMessage) {
    return await axiosRequest.post("/chat/message", { toId, chatId, message });
  },
};
