import { lazy } from "react";
import { Index } from "../../views/public/Principal/indext";
import { Route, Routes } from "react-router-dom";
import { SoftwareDeveloment } from "../../views/public/Develoment/Develoment";
import { GraficDesing } from "../../views/public/grafDesing/GrafDesing";


const LazyInit = lazy(()=> import("../../views/public/Principal/indext").then(()=>({default:Index})));
const LazySoftDev = lazy(()=> import("../../views/public/Develoment/Develoment").then(()=>({default:SoftwareDeveloment})))
const LazyGrafDesi = lazy(()=> import("../../views/public/grafDesing/GrafDesing").then(()=>({default:GraficDesing})))



export const InternalRouting = () => {
    
  return <>
  <Routes>
    <Route path="/" element={<LazyInit/>}/>
    <Route path="/soft-develoment" element={<LazySoftDev/>}/>
    <Route path="/grafic-desing" element={<LazyGrafDesi/>}/>
  </Routes>
  </>;
  };