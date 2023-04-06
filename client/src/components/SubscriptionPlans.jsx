import { CardPlane } from "./CardPlans";

export const SubscriptionsPlans = () => {
  return (
    <>
      <div className="w-[1400px] h-[700px] bg-brand-0 rounded my- pt-16 mx-auto px-6">
        <h1 className="font-bold text-[32px] text-brand-500 mb-10">Pricing</h1>
        <p className="text-text-meta pb-16 mx-20 ">
          At our study platform, our philosophy in pricing is to offer fair and
          transparent pricing that provides value to our customers. We believe
          in offering competitive pricing while maintaining the highest quality
          of educational content and services. Our goal is to provide accessible
          education to everyone, regardless of their financial background, and
          offer flexible pricing options such as monthly subscriptions and
          pay-per-course models. We aim to be transparent in our pricing
          policies and ensure that our customers are aware of any changes to
          pricing or fees.
        </p>

        <div className="flex gap-1 justify-center items-center">
          <div className="bg-brand-50 h-[370px] w-[300px] rounded-xl drop-shadow-md md:drop-shadow-2xl text-black text-center">
            <div className="m-9">
              <blockquote>
                <p class="text-4xl font-medium my-5">Single Ticket</p>
              </blockquote>
              <blockquote>
                <p class="text-4xl font-medium my-5">120 E£</p>
              </blockquote>
              <div class="whitespace-pre-line text-left">
                - 1 Ticket <br /> - Limited Chatting <br /> - Limited Ask <br />
              </div>
              <button class="rounded-xl bg-brand-100 text-white w-[90%] h-[30px] mt-10 hover:bg-brand-500 transition-all">
                Start
              </button>
            </div>
          </div>
          <div
            className={`bg-brand-400 h-[400px] w-[315px] rounded-xl drop-shadow-md md:drop-shadow-2xl text-center`}
          >
            <div className="m-9">
              <blockquote>
                <p class="text-4xl font-medium text-white my-5">Full Bundle</p>
              </blockquote>
              <blockquote>
                <p class="text-4xl font-medium text-white my-5">990 E£</p>
              </blockquote>
              <div class="whitespace-pre-line text-white text-left">
                - 10 Tickets <br /> - Full Access <br /> - Chatting <br /> - Ask{" "}
                <br /> - Add Afilliate <br /> - Gifts
              </div>
              <button class="rounded-xl bg-brand-50 text-black w-[90%] h-[30px] mt-6 hover:bg-brand-500 hover:text-brand-50 transition-all">
                Start
              </button>
            </div>
          </div>
          <div
            className={`bg-brand-50 h-[370px] w-[300px] rounded-xl drop-shadow-md md:drop-shadow-2xl text-black text-center`}
          >
            <div className="m-9">
              <blockquote>
                <p class="text-4xl font-medium my-5">Half Bundle</p>
              </blockquote>
              <blockquote>
                <p class="text-4xl font-medium my-5">520 E£</p>
              </blockquote>
              <div class="whitespace-pre-line text-left">
                - 5 Tickets <br /> - 50% Access <br /> - Limited Chatting <br />{" "}
                - Limited Ask
              </div>
              <button class="rounded-xl bg-brand-100 text-black w-[90%] h-[30px] text-white mt-5 hover:bg-brand-500 transition-all">
                Start
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
