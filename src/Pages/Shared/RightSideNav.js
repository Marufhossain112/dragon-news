import React from "react";
import ButtonGroups from "../../components/ButtonGroup/ButtonGroups";
import SocialLinks from "../../components/SocialLinks/SocialLinks";

const RightSideNav = () => {
  return (
    <div>
      <ButtonGroups></ButtonGroups>
      <p className="mt-4">Find us on :</p>
      <SocialLinks></SocialLinks>
    </div>
  );
};

export default RightSideNav;
