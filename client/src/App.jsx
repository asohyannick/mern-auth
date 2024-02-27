import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home, About, SignIn, SignUp, Profile } from "./pages/index";
import { Header, PrivateRoute } from "./components/index";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
        {/* <Route path="/profile" element={<Profile />} /> */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
