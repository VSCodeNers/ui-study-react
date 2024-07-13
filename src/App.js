import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Login from "./page/Login";
import Redirect from "./page/Redirect";
import Main from "./page/Main";

function App() {
  return (
    <div class="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/oauth" element={<Redirect/>}/>
          <Route path="/main" element={<Main/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
