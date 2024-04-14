import React, { useEffect } from "react";
import {
  Link,
  NavLink,
  Routes,
  Route,
  useSearchParams,
  useLocation,
} from "react-router-dom";

function Home() {
  //use the useLocation hoop to get the url meta data
  const location = useLocation();
  console.log(location);

  return (
    <section className="home-container">
      <h1>This is home!</h1>
      <p>Click the link below to go to the about page</p>
      <Link to="/about">About Page </Link>
    </section>
  );
}

function About() {
  //using the useSearchParams hook.
  // const { searchParams, setSearchParams } = useSearchParams();

  // useEffect(() => {
  //   setSearchParams({
  //     id: "123456",
  //   });

  //   console.log(searchParams.get("id"));
  // }, [searchParams, setSearchParams]);
  return (
    <section className="about-container">
      <h1>All about me</h1>
      <p>Click the link below to go back to the home page</p>
      <Link to="/">Home Page </Link>
    </section>
  );
}

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}

const App = () => {
  return (
    <>
      <section className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </section>
      <Navigation />

      <section className="navigation">
        <NavLink
          style={({ isActive }) =>
            isActive ? { color: "blue" } : { color: "black" }
          }
          className="navigate"
          to="/"
        >
          Home page
        </NavLink>
        <NavLink
          style={({ isActive }) =>
            isActive ? { color: "blue" } : { color: "black" }
          }
          className="navigate"
          to="/about"
        >
          About page
        </NavLink>
        {/*Navlink compared to link makes it possible to have a function/callback function within it. */}
      </section>

      {/*Router hooks: They can read and manipulate the search params with the useSearchParams hook, Return a location that tells us information about the URL with useLocation hook and change a url when some action happens using the useNavigate hook.*/}
    </>
  );
};

export default App;
