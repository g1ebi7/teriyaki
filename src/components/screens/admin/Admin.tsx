import { useEffect } from "react";

import { Chat } from "./Chat/Chat";

import Container from "@/ui/Container/Container";
import Section from "@/ui/Section";

const Admin = () => {
  return (
    <Section className="h-screen">
      <Container className="h-full flex justify-center items-center">
        <Chat />
      </Container>
    </Section>
  );
};

export default Admin;
