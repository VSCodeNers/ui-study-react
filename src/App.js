import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import { db } from "./firebase";

import Redirect from "./view/Redirect";
import LoginController from "./controller/LoginController";
import SignUpController from "./controller/SignUpController";
import HomeController from "./controller/HomeController";

function App() {
  console.log(db);
  
  return (
    <div class="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginController/>}/>
          <Route path="/oauth" element={<Redirect/>}/>
          <Route path="/signup" element={<SignUpController/>}/>
          <Route path="/main" element={<HomeController/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
