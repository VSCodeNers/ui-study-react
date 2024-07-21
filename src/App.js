import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

// import Login from "./page/Login";
import Redirect from "./view/Redirect";
import Main from "./view/Main";
import LoginController from "./controller/LoginController";

function App() {
  return (
    <div class="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginController/>}/>
          <Route path="/oauth" element={<Redirect/>}/>
          <Route path="/main" element={<Main/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
