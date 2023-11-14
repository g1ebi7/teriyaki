import { bindActionCreators } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { useDispatch } from "react-redux";

import { actions } from "@/store/user.reducer";

export const useActions = () => {
  const dispatch = useDispatch();

  return useMemo(() => bindActionCreators(actions, dispatch), [dispatch]);
};
