import React, { useState } from "react";

const App = () => {
  //state is the data that is rendered by the component on the screen. It manipulates the data and re-renders the component.
  const [counter, setCounter] = useState(0);
  const[state, setState] = useState("Magic is here")

  const handleClick = (event) => {
    console.log("Hello, you clicked me!");
  };
  const handleIncrement = () => {
    event.preventDefault();
    console.log("Incrementing");
    console.log("Counter value: ", counter);

    //now, uodate state
    setCounter((prev) => prev + 1);
    console.log("See new value: ", counter);
  };
  const handleDecrement = () => {
    event.preventDefault();
    console.log("Decrementing");
    setCounter((prev) => prev - 1);
  };

  //handle change
  const handleChange = (event) => {
    event.preventDefault();
    console.log("Value:", event.target.value);
  };

  //handle mouseover event
  const handleMouseOver = (event) => {
    event.preventDefault();
    // console.log("You hovered over me!");
    setState("Welcome to Nigeria. It sucks!")
    setTimeout(() => {
      setState("Magic is here")
    }, 1000)
  };
  return (
    //events
    <section>
      <button onClick={handleClick}>Click me!</button>
      <div className="button-container">
        <div className="counter">{counter}</div>
        <button className="action-btn" onClick={handleIncrement}>
          Increment
        </button>
        <button className="action-btn" onClick={handleDecrement}>
          Decrement
        </button>
      </div>
      {/* change events */}
      <form
        className="form"
        onSubmit={(event) => {
          event.preventDefault();
          console.log("Form submitted");
          const { name, email, tel } = event.target.elements; //event = onSubmit, target= form, elements = input fields
          // console.log(elements);
          alert(
            `Hello ${name.value}, your email is ${email.value}, and your number is ${tel.value}`
          );
        }}
      >
        <input
          onChange={handleChange}
          type="text"
          placeholder="Enter your name"
          name="name"
        />
        <input type="text" placeholder="Enter your email" name="email" />
        <input type="tel" placeholder="Enter your number" name="tel" />
        <button type="submit">Submit</button>
      </form>
      {/*The name attribute is neccessary because it allows us to collect the values entered into the form*/}
      {/*Basically, onChange event is used to capture the input value of the user. It captures changes that a user is making as they are inputing it to the field.*/}

      {/*Form events*/}
      {/* Here we look at how we collect inputed data from forms The form in react has an amazing event listener called onSubmit. Check form above for use case*/}
      {/*Mouse events*/}
      <h1
        onMouseOver={handleMouseOver}
        className="hover-me"
      >
       {state}
      </h1>
    </section>
  );
};

export default App;

//Handling events with React elements is very similar to handling events on DOM elements.
// Events in React are named using camelCase, rather than lowercase.
// With JSX you pass a function as the event handler, rather than a string.
// Example events are onClick, onChange, onSubmit.
