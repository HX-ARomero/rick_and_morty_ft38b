import { useState } from "react";
import styles from "./SearchBar.module.css";

export default function SearchBar(props) {
   const [id, setId] = useState("");

   const handleChange = event => {
      const {value} = event.target;
      setId(value);
   }

   const handleOnClick = event => {
      event.preventDefault();
      props.onSearch(id);
      setId("");
   }

   return (
      <div className={styles.container}>
         <input
            value={id}
            type="text"
            name="search"
            id="search"
            placeholder="Enter character id..."
            onChange={handleChange}
         />
         <button onClick={handleOnClick}>Search</button>
      </div>
   );
}
