import { lazy } from "react";
import { MainBoard } from "../../containers/MainBoard";
import { Route, Routes } from "react-router-dom";
import { Header } from "../../containers/header/Header";

const LazyMainBoard = lazy(() =>
  import("../../containers/MainBoard").then(() => ({ default: MainBoard }))
);
export const CompleteRouting = () => {
  return (
    <Routes>
      <Route path="/*" element={<LazyMainBoard />} />
    </Routes>
  );
};
