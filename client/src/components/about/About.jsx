import styles from "./About.module.css";
import imageLinkedin from "../../assets/linkedin.png";

export default function About(props) {
    return (
        <div className={styles.container} >
            <h2>About me...</h2>
            <p>My name is...</p>
            <a
                target="blank"
                href="https://www.linkedin.com/in/ariel-alejandro-romero-fullstack-developer/"
            >
                <div className={styles.contactContainer} >
                    <p>Find me on linkedin </p>
                    <img src={imageLinkedin} alt="Linkedin logo" />
                </div>
            </a>
        </div>
    )
}