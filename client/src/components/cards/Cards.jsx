import Card from '../card/Card.jsx';
import styles from "./Cards.module.css";

export default function Cards({characters, onClose, numberOfCards}) {

   return (
      <div>
         <h4 className={styles.title}>{numberOfCards} of 826 characters</h4>
         <div className={styles.container}>
            {
               characters.map(character => (
                  <Card
                     key={character.id}
                     id={character.id}
                     name={character.name}
                     status={character.status}
                     species={character.species}
                     gender={character.gender}
                     origin={character.origin?.name}
                     image={character.image}
                     onClose={onClose}
                  />
               ))
            }
         </div>
      </div>
   );
};
