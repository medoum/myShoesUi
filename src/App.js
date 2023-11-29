import Home from "./Home";
import Login from "./component/Login";

import { BrowserRouter, Route, Routes} from "react-router-dom";
import Register from "./component/Register";


const App = () => {
//   // const [isLoggedIn, setLoggedIn] = useState(false);
//   // const handleLogin = () => {
//   //   setLoggedIn(true);
//   };
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route index element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="register" element={Register} />
      </Routes>
    </BrowserRouter>
    </div>
  );
};

export default App;
