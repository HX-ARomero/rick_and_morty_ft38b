import styles from "./Spinner.module.css";

export default function Spinner(props) {
    return (
        <div className={styles.container}>
            <h3>Please, search a character...</h3>
            <div className={styles.spinner} >
                <div></div>
                <div></div>
            </div>
        </div>
);
}