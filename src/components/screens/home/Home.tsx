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

import image from "/public/Preview.png";

export const Home = () => {
  const { data } = useQuery(["get users"], () => UserService.getAllUsers(), {
    select: ({ data }) => data,
  });

  useEffect(() => {
    document.body.style.overflow = "visible";
  }, []);

  return (
    <main>
      <Meta
        title="AFFORDABLE WEBSITES FOR SMALL BUISNESS"
        description="Teriyaki Sites - Crafting custom websites that reflect your unique vision. Our experienced team offers end-to-end web development services, from design to optimization. Contact us to bring your online presence to life."
      >
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
