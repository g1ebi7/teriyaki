import { useQuery } from "react-query";
import { useEffect } from "react";

import About from "./about-us/About";
import Clients from "./clients/Clients";
import Faq from "./faq/Faq";
import Hero from "./hero/Hero";
import Solutions from "./solutions/Solutions";
import Tariff from "./tariffs/Tariff";

import Meta from "@/utils/Meta/Meta";
import { UserService } from "@/services/user.service";

export const Home = () => {
  const { data } = useQuery(["get users"], () => UserService.getAllUsers(), {
    select: ({ data }) => data,
  });

  useEffect(() => {
    document.body.style.overflow = "visible";
  }, []);

  return (
    <main>
      <Meta title="Home" description="We Create Amazing Interface">
        <Hero />
        <Solutions />
        <About />
        <Faq />
        <Clients />
        <Tariff />
      </Meta>
    </main>
  );
};
