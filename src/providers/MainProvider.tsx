import { I18nextProvider } from "react-i18next";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import i18n from "../../i18next";
import { CheckAuthProvider } from "./CheckAuthProvider";

import Layout from "@/components/Layout/Layout";
import { store } from "@/store/store";

interface IMainProvider {
  children?: React.ReactNode;
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      keepPreviousData: true,
    },
  },
});

const stripePromise =
  process.env.APP_ENV === "production"
    ? loadStripe(
        "pk_live_51NiFboGgimZoyZkMvRvjgyzb58BjP2arILRMiDwixPx0lX8h9K15NMve9s7z48zA8vzwgERlZjgDjkuDN8xJBySx00u3qLlzgz"
      )
    : loadStripe(
        "pk_test_51NiFboGgimZoyZkM0dSOV9ny1LddVjfpftJJXi61e7BidbQypo0jHziTsGPZWqm4BOk6mc8LsZYHAhe0hD5zUpVY00bjIj8lOV"
      );

const MainProvider = ({ children }: IMainProvider) => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <I18nextProvider i18n={i18n}>
          <Elements stripe={stripePromise}>
            <CheckAuthProvider>
              <Layout>{children}</Layout>
            </CheckAuthProvider>
          </Elements>
        </I18nextProvider>
      </QueryClientProvider>
    </Provider>
  );
};
export default MainProvider;
