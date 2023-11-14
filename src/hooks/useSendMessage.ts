import { useMutation } from "react-query";

import { ChatService } from "@/services/chat.service";
import { IMessage } from "@/types/chat.interface";

export const useSendMessage = () => {
  const { mutate: sendMessage } = useMutation(
    ["send message"],
    (data: IMessage) => ChatService.sendMessage(data)
  );

  return { sendMessage };
};
