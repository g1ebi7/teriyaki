import { useStripe } from "@stripe/react-stripe-js";
import { useRouter } from "next/router";

import { useTypedSelector } from "@/hooks/useTypedSelector";
import { stripeHandlers } from "@/stripe/stripe.config";

export const useTarrifPayments = (tarIndex: number) => {
  const stripe = useStripe();
  const user = useTypedSelector((state) => state.user);
  const { push } = useRouter();

  const handlePayment = () => {
    if (!user) {
      push("/auth");
      return;
    }

    switch (tarIndex) {
      case 1:
        stripeHandlers.handlePaymentLanding(stripe, user);
        break;
      case 2:
        stripeHandlers.handlePaymentMulti(stripe, user);
        break;
      case 3:
        stripeHandlers.handlePaymentStart(stripe, user);
        break;
      case 4:
        stripeHandlers.handlePaymentStandart(stripe, user);
        break;
      case 5:
        stripeHandlers.handlePaymentBuisiness(stripe, user);
        break;
    }
  };

  return { handlePayment };
};
