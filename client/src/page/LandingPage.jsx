import { Header } from "../components/Header";
import { FooterApp } from "../components/FooterApp";
import PopularTeachers from "../components/PopularTeachers";
import { SubscriptionsPlans } from "../components/SubscriptionPlans";
import { Profile } from "../components/Profile";

export default function LandingPage() {
  return (
    <>
      <Header />
      <PopularTeachers />
      <SubscriptionsPlans />
      <Profile />
      <FooterApp />
    </>
  );
}
