import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "./types";

const initialState = {
    myFavorites: [], // QUE RENDERIZO
    allCharacters: [], // TODOS MIS FAVORITOS
    errors: false
};
// [ {id: 1}, , ...]

export default function reducer(
        state = initialState,
        { type, payload } // action = { type, payload }
    ) {
        switch(type) {
            case ADD_FAV:
                return { ...state, myFavorites: payload, allCharacters: payload, errors: false  };
            case REMOVE_FAV:
                return { ...state, myFavorites: payload, errors: false };
            case "ERROR":
                return {
                    ...state, errors: payload
                }
            case FILTER:
                // EXTRA: => Caso "All"
                if(payload === "All") return {
                    ...state,
                    myFavorites: state.allCharacters
                }
                const allCharactersCopy = [...state.allCharacters];
                const filteredCharacters = allCharactersCopy.filter(
                    character => character.gender === payload
                );
                return {
                    ...state,
                    myFavorites: filteredCharacters
                }
            case ORDER:
                let orderedCharacters = [];
                if(payload === "A") {
                    orderedCharacters = state.allCharacters.sort(
                        (a, b) => a.id - b.id
                    )
                } else if(payload === "D") {
                    orderedCharacters = state.allCharacters.sort(
                        (a, b) => b.id - a.id
                    )
                }
                console.log(orderedCharacters);
                return {
                    ...state,
                    myFavorites: orderedCharacters
                }
            default:
                return { ...state }
        }
}

/*
* myFavorites = [ {F}, {F}, {M}, {F}, {G} ]
*               1 -> Guarda/Remueve Favoritos
*               2 -> Qué RENDERIZAR !!!

* allCharacters = [ {F}, {F}, {M}, {F}, {G} ]
*               Quiero filtrar G => myFavorites.filter = [ {G} ]
*               Quiero a tod@s => myFavorites = [ {F}, {F}, {M}, {F}, {G} ]

* Cuando agregue = "allCharacters" => pisar "myFavorites"
* Elimina un favorito = DESDE "allCharacters" => pisar "myFavorites"




*/