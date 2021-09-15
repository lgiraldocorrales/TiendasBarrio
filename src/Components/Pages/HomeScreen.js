import React from "react";
import { Cards } from "../Cards/Cards";
import image1 from "../../Images/tienda1.jpg";
import image2 from "../../Images/tienda2.jpg";
import image3 from "../../Images/tienda3.jpg";
import bg from "../../Images/bg-image.png";

export const HomeScreen = () => {
  return (
    <div
      className="container"
      style={{ display: "flex", justifyContent: "center", backgroundImage: `url(${bg})` }}
    >
      <div className="mx-3">
        <Cards linkto="/productStore1" isStore={true} name={"Mercados Express"} address="Calle A #40F" image={image1} />
      </div>
      <div className="mx-3">
        <Cards linkto="/productStore2" isStore={true} name={"Autoservicio el mono"} address="Diagonal 34A Sur" image={image2} />
      </div>
      <div className="mx-3">
        <Cards linkto="/productStore3" isStore={true} name={"Mercaderia Stw"} address="Transversal 44 # 30B" image={image3} />
      </div>
    </div>
  );
};
