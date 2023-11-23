import React, { Suspense } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { CompleteRouting } from "./app/util/routes/CompleteRouting";

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense>
          <CompleteRouting />
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
