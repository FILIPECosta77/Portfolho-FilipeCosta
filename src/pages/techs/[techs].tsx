import React from "react";
import { useRouter } from "next/router";
import Header from "../../components/Header";

const Techs = () => {
  const router = useRouter();
  const { techs } = router.query;

  return (
    <div>
      <Header>{techs}</Header>
    </div>
  );
};

export default Techs;
