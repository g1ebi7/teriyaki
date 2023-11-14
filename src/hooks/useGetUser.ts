import { useQuery } from "react-query";

import { UserService } from "@/services/user.service";

export const useGetUser = () => {
  const { data: user, isLoading } = useQuery(
    ["get user"],
    () => UserService.getUser(),
    {
      select: ({ data }) => data,
    }
  );

  return { user, isLoading };
};
