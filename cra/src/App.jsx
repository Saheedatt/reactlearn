//rfce will give skeletal structure of functional component
import React from "react";
import confetti from "canvas-confetti";
import "./App.css";
// import {List} from "./components/List"; //export use
import List from "./components/List"; //export default use
//import audio;
import pack from '../package.json';
console.log(pack.dependencies);

//There are three ways to do conditional rendering in react:
//1. Using if statement
//2. Using ternary operator
//3. Using logical && operator
//using showing and hiding method just like we did with the button toggling below.

// AudioElement = new Audio('audio.mp3');
// AudioElement.play();

function App() {
  const [hide, setHide] = React.useState(false);
  const date = new Date();
  // console.log(date.toTimeString())
  const hour = date.getHours();
  const data = [
    "React",
    "JSX",
    "State",
    //"Props",
    "Hooks",
    "Context",
    "Redux",
  ];

  const greetings = "good morning";

  function addConfetti(event) {
    //console.log(event)

    confetti({
      particleCount: 5,
      origin: {
        x: event.pageX / window.innerWidth,
        y: event.pageY / window.innerHeight,
      },
      decay: 0.8,
    });
  }

  if (hour > 15) {
    return (
      <div onMouseMove={addConfetti}>
        {/* <h1>{hour < 12 ? greetings : 'Good Day'}, Saheedat</h1> */}
        <h1>Good day, Saheedat!</h1>

        {!hide && <p>This is React.</p>}
        <button
          onClick={() => {
            setHide(!hide);

             // AudioElement.play(); Adds audio to the button
          }}
        >
          Try me!(I'm learning)
        </button>
      </div>
    );
  }

  //Key is used to uniquely identify each element in the list. It is used to give the element a unique identity. It is like an id for each element in the list.
  return (
    <div onMouseMove={addConfetti}>
      <h1>{greetings}, Saheedat!</h1>
      <p>This is React.</p>
      <ul>
        {data.map((item, index) => (
          // <li key={Date().now}>Learn {item}</li>
          // <li key={index}>Learn {item}</li>
          // <List item={item} key={index} />
          <List item={item} key={crypto.randomUUID()} />
          //crypto.randomUUID() is used to generate a unique id for each element in the list. It generates a v4 random UUID.Cryptography is a way to encode information in computer science.
        ))}
      </ul>
      <h2>List of Dependencies Used In this Project!</h2>
      <ol>
        {Object.entries(pack?.dependencies).map((item)=>(
          <li key={crypto.randomUUID()} >{item[0]  + `${':'.repeat(30)}` + item[1]}</li>
        ))}
      </ol>
    </div>
  );
}
//The above is the use of conditional rendering using if statement. We formerly used conditional statement.
export default App;
