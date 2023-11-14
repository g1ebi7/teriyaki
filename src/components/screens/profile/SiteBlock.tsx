import { useRouter } from "next/router";

import styles from "./Profile.module.scss";
import SiteItem from "./SiteItem";

import Section from "@/ui/Section";
import Container from "@/ui/Container/Container";
import { useGetUser } from "@/hooks/useGetUser";
import { useDateFormatter } from "@/hooks/useDateFormatter";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import { Button } from "@/ui/Button/Button";
import Loader from "@/ui/Loader";

const SiteBlock = () => {
  const { user, isLoading } = useGetUser();
  const date = useDateFormatter(user?.createdAt || null);
  const { push } = useRouter();

  if (isLoading) return <Loader />;

  return (
    <Section className="py-16">
      <Container className="flex gap-[30px]">
        <div className="flex flex-col w-full gap-[30px]">
          <h1 className="text-4xl font-semibold">Your Profile</h1>
          <div className={styles.user}>
            <div>
              <h1>Email:</h1>
              <h2>{user?.email}</h2>
              <span>{`id: ${user?.id}`}</span>
            </div>
            <p>{`Joined ${date}`}</p>
          </div>
          <h1 className="text-4xl font-semibold">Websites</h1>
          <ul className={styles.sites}>
            {user?.sites && user.sites.length > 0 ? (
              user.sites.map((site) => <SiteItem key={site.id} site={site} />)
            ) : (
              <p>You dont have any website.</p>
            )}
          </ul>
        </div>
        <div className={styles.support}>
          <h1>Chat with support</h1>
          <Button
            title="Send a message"
            handleClick={() => push("user_chat")}
          />
        </div>
      </Container>
    </Section>
  );
};

export default SiteBlock;
