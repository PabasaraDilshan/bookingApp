import React from "react";
import Header from "../../components/header/Header";
import NavBar from "../../components/navbar/NavBar";

const HotelsList: React.FC<{}> = () => {
  return (
    <div>
      <NavBar />
      <Header type="list" />
    </div>
  );
};

export default HotelsList;
