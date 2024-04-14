import React, { useContext, createContext, useEffect, useState } from "react";

  //create a custom hook here
  const useGetData = (type) => {
    const [data, setData] = useState([]);
    useEffect(() => {
      const cars = [
        {
          id: 1,
          name: "tesla",
          year: "2020",
        },
        { id: 2, name: "toyota", year: "2019" },
        {
          id: 3,
          name: "mercedes",
          year: "2018",
        },
      ];
      //Books

      const books = [
        {
          id: 1,
          name: "The Alchemist",
        },
        {
          id: 2,
          name: "The Power of Now",
        },
      ];
      //Do something...
      if (type === "cars") {
        setData(cars);
      } else if (type === "books"){
        setData(books);
      }else{
        setData([]);
      }
    }, [type]);
    return [data];
  };


const App = () => {
  // const [count, setCount] =useState(0);
  //count is the current state of the data, setCount is used to update to the new state of the data that you'll assign it to do. i.e it updates the state of the data. The useState(0) is used to set the default value, incase you don't have a default state already set in your code.
  const [count, setCount] = useState(3);
  const [name, setName] = useState("");

  const handleMouseOver = (event) => {
    event.preventDefault();
    setName("Saheedat!");
    setTimeout(() => {
      setName("");
    }, 5000);
  };

  useEffect(() => {
    if (count > 0) {
      console.log("Count: ", count);
    }
  }, [count]);

  //crreate a context for our app
  const AuthContext = createContext({
    user: {
      username: "@saheedat",
      name: "Saheedat Afolabi",
      email: "afolabis@gmail.com",
    },
    verified: false,
  });

  //define context provider
  function AuthProvider(props) {
    const [user, setUser] = useState({
      username: "@saheedat",
      name: "Saheedat Afolabi",
      email: "afolabis@gmail.com",
      bio: "Auscultation is the process of listening to sounds made by the body.",
    });
    return (
      <AuthContext.Provider
        value={{
          user: user,
          verified: true,
          setUser: setUser,
        }}
      >
        {props.children}
      </AuthContext.Provider>
    );
  }
  //user profile component
  function UserProfile() {
    const { user, verified } = useContext(AuthContext);
    console.log(user);
    return (
      <div>
        <h1>User Profile</h1>
        <div>Username: {user.username}</div>
        <div>Name: {user.name}</div>
        <div>Email: {user.email}</div>
        <div>Verified: {verified ? "Yes" : "No"}</div>
        <UserBio />
      </div>
    );
  }

  //user bio
  function UserBio() {
    const { user, setUser } = useContext(AuthContext);

    //update the user bio on click
    const handleBioUpdate = (event) => {
      //update the user bio
      event.preventDefault();
      setUser((prev) => {
        return {
          ...prev,
          bio: "Do you know what it means to be a physiotherapist?",
        };
      });
    };
    return (
      <div>
        <h1>User Bio</h1>
        <div>{user.bio}</div>
        <button onClick={handleBioUpdate}>Update Bio</button>
      </div>
    );
  }

  const [data] = useGetData("cars");

  console.log(data);

  return (
    <>
      <section className="main-container">
        <h1 onMouseOver={handleMouseOver}>Hello {name} </h1>
        <h2>Count: {count}</h2>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </section>

      {/*The useEffect hook: This allows you to perform side effects in your components, It involves a component lifecycle where a component can get mounted, updated and unmounted. It accepts two arguments: a function and a dependency. The second argument is optional 
 function ABDSB(){
  //define effect
  useEffect(() => {
    //do something
 }, [])
 //...
 //Render...
 return <h2>Now you see me</h2>
 */}
      {/*The useContext hool allows one to manage state globally such as the current authenticated user, theme or preferred language. This hook should be used when there is a global state in mltiple components. */}
      <AuthProvider>
        <section>
          <UserProfile />
        </section>
      </AuthProvider>
    </>
  );
};
{
  /*Custom hooks are used for creating reusable functions and pieces within an application. You get to build your own hooks that lets you extract component logic into reusable functions. */
}
export default App;


//npm install react-router-dom@6 to install react router