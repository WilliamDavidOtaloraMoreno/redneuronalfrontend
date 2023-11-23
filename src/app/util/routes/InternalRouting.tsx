import { lazy } from "react";
import { Index } from "../../views/public/Principal/indext";
import { Route, Routes } from "react-router-dom";
import { SocialMedia } from "../../views/public/SocialMedia/Socialmedia";
import { WebDevelopment } from "../../views/public/WebDeveloment/Web";
import { SoftwareDeveloment } from "../../views/public/Develoment/Develoment";
import { GraficDesing } from "../../views/public/grafDesing/GrafDesing";
import { AudioVisual } from "../../views/public/AudioVisual/Audiovisual";

const LazyInit = lazy(()=> import("../../views/public/Principal/indext").then(()=>({default:Index})));
const LazySocialMedia = lazy(()=> import("../../views/public/SocialMedia/Socialmedia").then(()=>({default:SocialMedia})));
const LazyWebDeveloment = lazy(()=> import("../../views/public/WebDeveloment/Web").then(()=>({default:WebDevelopment})))
const LazySoftDev = lazy(()=> import("../../views/public/Develoment/Develoment").then(()=>({default:SoftwareDeveloment})))
const LazyGrafDesi = lazy(()=> import("../../views/public/grafDesing/GrafDesing").then(()=>({default:GraficDesing})))
const LazyAudiVisu = lazy(()=> import("../../views/public/AudioVisual/Audiovisual").then(()=>({default:AudioVisual})))


export const InternalRouting = () => {
    
  return <>
  <Routes>
    <Route path="/" element={<LazyInit/>}/>
    <Route path="/social-media" element={<LazySocialMedia/>}/>
    <Route path="/web-develoment" element={<LazyWebDeveloment/>}/>
    <Route path="/soft-develoment" element={<LazySoftDev/>}/>
    <Route path="/grafic-desing" element={<LazyGrafDesi/>}/>
    <Route path="/audio-visual-production" element={<LazyAudiVisu/>}/>
  </Routes>
  </>;
  };