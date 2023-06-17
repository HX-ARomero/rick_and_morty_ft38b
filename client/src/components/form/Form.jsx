import React from "react";
import styles from "./Form.module.css";
import validation from "./validation";
import image from "../../assets/rick-and-morty-nav.png";

export default function Form(props) {

    const [userData, setUserData] = React.useState({
        email: "",
        password: ""
    })

    const [errors, setErrors] = React.useState({});
    
    const handleChange = event => {
        const {name, value} = event.target;
        setUserData({
            ...userData,
            [name]: value
        })
        setErrors(validation({
            ...userData,
            [name]: value
        }))
    }

    const handleSubmit = event => {
        event.preventDefault();
        props.login(userData);
    }

    return(
        <div className={styles.container} >
            <div >
                <img src={image} alt="Rick and Morty" />
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <label>Email: </label>
                    <input
                        type="text"
                        name="email"
                        value={userData.email}
                        placeholder="Enter email..."
                        onChange={handleChange}
                    />
                    <p className={styles.error}>{errors.email ? errors.email : null}</p>

                    <label>Password: </label>
                    <input
                        type="password"
                        name="password"
                        value={userData.password}
                        placeholder="Enter password..."
                        onChange={handleChange}
                    />
                    <p className={styles.error}>{errors.password ? errors.password : null}</p>

                    <button type="submit">Submit</button>

                </form>
            </div>
        </div>
    )
}

/*
1- Cargar lo que el usuario ingresa en "userData" {email, password}
2- Valido lo que hay en userData + lo que está ingresando {}
    Cargo al objeto en "errors"
3- Tomo "errors" y muestro mensajes al usuario
*/