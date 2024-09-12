import { LayoutContainer } from "@/components/Layout";
import { FC } from "react";
import { Home as HomeModules } from "@/modules";

const Home: FC = () => {
  return <LayoutContainer title="Home" children={<HomeModules />} />;
};

export default Home;
