import Link from "next/link";

import { useGetUser } from "@/hooks/useGetUser";

export const Chat = () => {
  const { user } = useGetUser();

  return (
    <div className="w-1/2 h-1/2 bg-gray-600 rounded-lg overflow-hidden">
      <ul>
        {user &&
          user.chats.length > 0 &&
          user.chats.map((chat) => (
            <Link href={`/chat/${chat.id}`} key={chat.id}>
              <li className="w-full py-3 px-2 bg-gray-500">{chat.id}</li>
            </Link>
          ))}
      </ul>
    </div>
  );
};
