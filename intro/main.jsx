import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";
//import * as jquery from "jquery";
// import $ from "jquery"; We alternatively used cdn in index.html

//console.log(jquery);
// console.log($("#app"));

// console.log(React);
// console.log(ReactDOM);

// // $('#app')[0].innerHTML = `
// //   <div>
// //     <a href="https://vitejs.dev" target="_blank">
// //       <img src="${viteLogo}" class="logo" alt="Vite logo" />
// //     </a>
// //     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
// //       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
// //     </a>
// //     <h1>Hello Vite!</h1>
// //     <div class="card">
// //       <button id="counter" type="button"></button>
// //     </div>
// //     <p class="read-the-docs">
// //       Click on the Vite logo to learn more
// //     </p>
// //   </div>
// // `

// //setupCounter(document.querySelector('#counter'))

// // Simplest way to create react
// //To write more complex react code, we need to use JSX
// // const div = React.createElement('div', {className: 'dangerous', style:{color:'red', border: '1px solid red'}}, [React.createElement('h1', null, ['Hello, ',

// // React.createElement('span',{style:{color:'blue'}}, ['World!'])]),
// // ]) ;
// // console.log(div);

// // const div2 = React.createElement('div', null, ['Ajayi'],
// // );
// // console.log(div2);

// const Hello = (props) => {
//     const stateSetter = React.useState(0);
//     const [count, setCount] = stateSetter;
//     console.log(props);
//     const {greetings, name, id, className, style} = props;
//     console.log(greetings, name, id, className);
//   return (
//     <>
//     <p id={id} className={className} style = {style}>
//       Hello <br /> Good {greetings}
//     </p>
//     <button onClick ={()=>console.log(setCount(count + 1))}>{count}</button>
//     </>
//   );
// };
// const div2 = () => <p>Hello AltSchool</p>;

//ReactDOM.render([div(), div2()], document.getElementById("app"));

//console.log(<Hello greetings= {'morning'} name={'ola'} />);
// ReactDOM.render([Hello({greetings: 'Afternoon', name: 'I will figure this thing out'})], document.getElementById("app")); //using react in the simplest and most basic way.
// ReactDOM.render(<Hello greetings= 'Afternoon' name= 'I will figure this thing out' id="id" className="dangerous " style={{color: 'red', border: '1px solid #000',padding: '15px'}}/>, document.getElementById("app"));

//props is the first way of passing data to the react element
//children are arrays. This is the second way of passing data to the react element. It is a special prop in react. It is a special prop that signifies the content of that element.

function SmallerComponent(props) {
  return (
    <p id={props.id} className={props.className} style={props.style}>
      {props.children}
    </p>
  );
}

const Hello = (props) => {
  const stateSetter = React.useState(0);
  const [count, setCount] = stateSetter;
  const handClick = () => console.log(setCount(count + 1));
  //console.log(props);
  const { className, id, greetings, name, style } = props;

  return (
    <>
      {SmallerComponent({
        id,
        className,
        style: { ...style, color: "green" },
       // style: { ...props.style, color: "green" },// this is to say, take the current properties in our styles but now override it with the new color that we add. Other styles stay. This is a way to add a new style to the existing style.
        children: "Hello",
      })}
      <SmallerComponent
        id={id}
        className={className}
        style={{ ...style, color: "white" }}
      >
        <span>Hello</span>
      </SmallerComponent>
      <p id={id} className={className} style={style}>
        Hello <br /> Good {greetings}
      </p>
      <button onClick={handClick}>{count}</button>
    </>
  );
};
const toBeRendered = (
  <Hello
    greetings="Evening"
    name="Ola"
    id="id"
    className="dangerous"
    style={{ color: "red", border: "1px solid #000", padding: "15px" }}
  />
);
console.log(toBeRendered);

ReactDOM.render(toBeRendered, document.getElementById("app"));


//The life cycle of react components:There are 4 phases in the life cycle of react components.  They are:
//1. Mounting phase: This is the process of adding the react component to the DOM.When we render the component for the first time and there is no previous snapshot to compare it to,react will create all the necessary DOM Nodes from scratch and inject them into the page. This is the first time the component is being added to the DOM.

//2.Trigger phase: Eventually, the component will be updated.We are telling react to update the component. This is the second time the component is being added to the DOM.

//Render Phase: Because the state has changed, we need to generate a new description of the ui. Our component function will be invoked again and compared with the new one. This process of comparing is called reconciliation. It will figure out what needs to happen for the DOM to match the new description. It will figure out what needs to be added, removed or updated. It will then update the DOM to match the new description.

//Commit phase: If any DOM updates are required, React will perform these mutuations i.e it will take content of a dom node, create a new node or delete/replace some nodes. Once the DOM is updated, react goes idle and wait for the next trigger.