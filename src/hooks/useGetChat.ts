import { useQuery } from "react-query";

import { ChatService } from "@/services/chat.service";

export const useGetChat = (id: string) => {
  const isAllowed = id !== "undefined" ? true : false;

  const { data: chat, isLoading } = useQuery(
    ["get chat"],
    () => ChatService.getChat(id),
    {
      enabled: isAllowed,
      select: ({ data }) => data,
      refetchInterval: 3000,
    }
  );

  return { chat, isLoading };
};
