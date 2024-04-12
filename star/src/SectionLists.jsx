import StarRating from "./StarRating";

function SectionLists(props){
    const TOTAL = 5;
return(
    <section>
        <h2>{props.name}</h2>
        <p>Rating: {props.rating}/{TOTAL}</p>
        <StarRating ratings={props.rating} />  
    </section>
);
}

export default SectionLists;