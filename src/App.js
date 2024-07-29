import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import { db } from "./firebase";

import Redirect from "./view/Redirect";
import Main from "./view/Main";
import LoginController from "./controller/LoginController";
import SignUpController from "./controller/SignUpController";

function App() {
  console.log(db);
  
  return (
    <div class="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginController/>}/>
          <Route path="/oauth" element={<Redirect/>}/>
          <Route path="/signup" element={<SignUpController/>}/>
          <Route path="/main" element={<Main/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
