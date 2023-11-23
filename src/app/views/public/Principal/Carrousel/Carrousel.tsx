import styles from "./Carrousel.module.css";
import "react-multi-carousel/lib/styles.css";
import logonext1 from "../../../../../assets/image/1x/logonext1.png";
import logonext2 from "../../../../../assets/image/1x/logonext2.png";
import logonext3 from "../../../../../assets/image/1x/logonext3.png";
import logonext4 from "../../../../../assets/image/1x/logonext4.png";
import logonext5 from "../../../../../assets/image/1x/logonext5.png";

import logo2carrusel from "../../../../../assets/image/1x/logocarrusel2.png"
import logo2carrusel1 from "../../../../../assets/image/1x/logocarrusel21_1.png"
import logo2carrusel2 from "../../../../../assets/image/1x/logocarrusel22_1.png"
import logo2carrusel3 from "../../../../../assets/image/1x/logocarruse23.png"

import React from "react";
import { Slider } from "./Slider/Slider";

type Slide = {
  id: string;
  image: string;
};

export const Carrousel = () => {
  const [slides] = React.useState<Slide[]>([
    
  ]);

  const [slides_next] = React.useState<Slide[]>([
    
  ]);

  const [visibleItemsNumber, setVisibleItemsNumber] = React.useState(5);

  return (
    <>
      
    
    </>
  );
};
