// export  function List({item}){
//the above lets us use {List} when importing in other files

import  PropTypes from 'prop-types';

export default function List({ item }) {
//this lets us use just List in other files
  return <li>Learn {item}</li>;
}

//using export default because it is the only thing in the file.
//using export alone will work too but for better practice and consitency sake, we use export default

List.propTypes =  {
    item:PropTypes.string.isRequired,
}
//Note: It is the child, un the file you are importing to, that has the key.

//pnpm add prop-types to install prop-types