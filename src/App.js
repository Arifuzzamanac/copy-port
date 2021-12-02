import * as React from "react";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
function App() {
  return (
    <main>
      <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}/>
                </Routes>
            </BrowserRouter>
    </main>
  );
}

export default App;
