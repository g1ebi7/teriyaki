/* eslint-disable react-hooks/exhaustive-deps */
import cl from "classnames";
import { SubmitHandler, useForm } from "react-hook-form";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import styles from "./ChatItem.module.scss";

import { AuthHelper } from "@/helpers/auth.helper";
import { IChat, IMessages } from "@/types/user.interface";
import { useSendMessage } from "@/hooks/useSendMessage";
import logo from "@/assets/images/logo.png";

interface IChatItem {
  chat: IChat;
}
interface IForm {
  message: string;
}

const ChatItem = ({ chat }: IChatItem) => {
  const user = AuthHelper.getUser();
  const { sendMessage } = useSendMessage();
  const { register, handleSubmit, reset } = useForm<IForm>();
  const [messagesArray, setMessagesArray] = useState<IMessages[]>([]);
  const scrollContainerRef = useRef<HTMLUListElement>(null);
  const { push } = useRouter();

  useEffect(() => {
    setMessagesArray(chat.messages);
  }, []);

  useEffect(() => {
    if (chat.messages !== messagesArray) {
      setMessagesArray(chat.messages);
    }
  }, [chat.messages]);

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        top: scrollContainerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [scrollContainerRef.current]);

  const submit: SubmitHandler<IForm> = (data) => {
    if (!user) return;

    const toId = String(
      chat.userIds.splice(chat.userIds.indexOf(user?.id), 1)[0]
    );
    const req: IMessages = {
      toId,
      id: Math.floor(Math.random() * (1000 - 100 - 1) + 100).toString(36),
      from: user.id,
      chatId: chat.id,
      message: data.message,
    };

    sendMessage(req);
    reset();

    setMessagesArray((prev) => [...prev, req]);
  };

  if (!user) return null;

  return (
    <div className="flex flex-col w-full justify-center items-center pt-[100px]">
      <h1 className="mb-6 text-3xl font-semibold">Support chat</h1>
      <div
        className={cl(
          "w-1/2 bg-gray-600 rounded-lg overflow-hidden flex flex-col",
          styles.cont
        )}
      >
        <div className={styles.logo}>
          <Image
            onClick={() => push("/")}
            src={logo}
            width={147}
            height={48}
            alt="Teriyaki"
            className="cursor-pointer z-10 sticky"
          />
        </div>
        <ul
          ref={scrollContainerRef}
          className={cl(
            "flex flex-col gap-4 px-24 py-16 overflow-y-auto max-h-[500px] min-h-[500px]",
            styles.list
          )}
        >
          {messagesArray.map((messageItem) => (
            <div
              key={messageItem.id}
              className={cl("flex items-center gap-4", {
                "self-end": user.id !== messageItem.from,
                "self-start": user.id === messageItem.from,
              })}
            >
              {user.id === messageItem.from && (
                <div className="rounded-full w-[60px] h-[60px] bg-white"></div>
              )}
              <li
                className={cl("py-4 pl-3 pr-8 rounded-lg w-fit", {
                  "bg-[#6495ED] text-white self": user.id === messageItem.from,
                  "bg-white text-black": user.id !== messageItem.from,
                })}
              >
                {messageItem.message}
              </li>
              {user.id !== messageItem.from && (
                <div className="rounded-full w-[60px] h-[60px] bg-white"></div>
              )}
            </div>
          ))}
        </ul>
        <form
          className={cl(
            "flex items-center justify-between w-full bg-white mt-auto px-8 py-6",
            styles.form
          )}
          onSubmit={handleSubmit(submit)}
        >
          <input
            {...register("message", { required: true })}
            type="text"
            className="w-full py-4 px-2 outline-none border-none text-xl font-semibold"
            placeholder="Write a message..."
          />
          <button className="py-4 px-16 bg-gray-600 text-white uppercase rounded-lg">
            SEND
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatItem;
