import { Stripe } from "@stripe/stripe-js";

import { IUserProps } from "@/types/user.interface";

export const stripeHandlers = {
  //test 1
  async handlePaymentStart(stripe: Stripe | null, user: IUserProps) {
    await stripe?.redirectToCheckout({
      lineItems: [
        {
          price: "price_1NjoNmGgimZoyZkMDZuSsc02",
          quantity: 1,
        },
      ],
      mode: "payment",
      successUrl: "http://localhost:5001",
      cancelUrl: "http://localhost:5001",
      customerEmail: user.email,
    });
  },
  async handlePaymentLanding(stripe: Stripe | null, user: IUserProps) {
    await stripe?.redirectToCheckout({
      lineItems: [
        {
          price: "price_1NnKrhGgimZoyZkMhYbp1LOE",
          quantity: 1,
        },
      ],
      mode: "payment",
      successUrl: "https://teriyaki-frontend.vercel.app/",
      cancelUrl: "https://teriyaki-frontend.vercel.app/",
      customerEmail: user.email,
    });
  },
  async handlePaymentMulti(stripe: Stripe | null, user: IUserProps) {
    await stripe?.redirectToCheckout({
      lineItems: [
        {
          price: "price_1NnkneGgimZoyZkM9draUFU6",
          quantity: 1,
        },
      ],
      mode: "payment",
      successUrl: "https://teriyaki-frontend.vercel.app/",
      cancelUrl: "https://teriyaki-frontend.vercel.app/",
      customerEmail: user.email,
    });
  },
  async handlePaymentStandart(stripe: Stripe | null, user: IUserProps) {
    await stripe?.redirectToCheckout({
      lineItems: [
        {
          price: "price_1No564GgimZoyZkMZJ4wyemp",
          quantity: 1,
        },
      ],
      mode: "payment",
      successUrl: "https://teriyaki-frontend.vercel.app/",
      cancelUrl: "https://teriyaki-frontend.vercel.app/",
      customerEmail: user.email,
    });
  },
  async handlePaymentBuisiness(stripe: Stripe | null, user: IUserProps) {
    await stripe?.redirectToCheckout({
      lineItems: [
        {
          price: "price_1No58cGgimZoyZkMxZ1BysWe",
          quantity: 1,
        },
      ],
      mode: "payment",
      successUrl: "https://teriyaki-frontend.vercel.app/",
      cancelUrl: "https://teriyaki-frontend.vercel.app/",
      customerEmail: user.email,
    });
  },
};
