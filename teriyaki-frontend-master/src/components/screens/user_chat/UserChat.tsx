/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

import ChatItem from "../chat/ChatItem";

import { useGetUser } from "@/hooks/useGetUser";
import Container from "@/ui/Container/Container";
import Section from "@/ui/Section";
import Meta from "@/utils/Meta/Meta";
import { useGetChat } from "@/hooks/useGetChat";
import Loader from "@/ui/Loader";

export const UserChat = () => {
  const { user } = useGetUser();
  const { chat, isLoading } = useGetChat(user?.chats[0].id || "undefined");

  if (isLoading) return <Loader />;

  if (!chat) return null;

  return (
    <Meta title="chat">
      <Section>
        <Container className="flex justify-center items-center">
          <ChatItem chat={chat} />
        </Container>
      </Section>
    </Meta>
  );
};
