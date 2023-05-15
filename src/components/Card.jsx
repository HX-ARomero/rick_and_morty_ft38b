export default function Card(props) {
   console.log(props);
   return (
      <div>
         <button onClick={props.onClose}>X</button>
         <h2>{props.name}</h2>
         <h4>{props.status}</h4>
         <h4>{props.species}</h4>
         <h4>{props.gender}</h4>
         <h4>{props.origin}</h4>
         <img src={props.image} alt='Imagen' />
      </div>
   );
}
