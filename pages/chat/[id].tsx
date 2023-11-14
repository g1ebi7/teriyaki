import { useRouter } from "next/router";
import { useEffect } from "react";

import ChatItem from "@/components/screens/chat/ChatItem";
import { useGetChat } from "@/hooks/useGetChat";
import Section from "@/ui/Section";
import Container from "@/ui/Container/Container";
import Loader from "@/ui/Loader";

const ChatPage = () => {
  const { query } = useRouter();
  const { chat, isLoading } = useGetChat(String(query.id));

  if (isLoading) return <Loader />;

  if (!chat) return null;

  return (
    <Section>
      <Container className="flex">
        <ChatItem chat={chat} />
      </Container>
    </Section>
  );
};

export default ChatPage;
