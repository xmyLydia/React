import * as actionTypes from '../store/actions';

const initialState = {
    persons: [
        {
            id: 1,
            value: {
                id:  null,
                name: null,
                age: null
            }
        }
    ]
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.PERSON_ADD:
            return {
                ...state,
                persons: state.persons.concat({ id: new Date()+Math.random(), value: action.person })
            }
        case actionTypes.PERSON_DELETE:
            // const id = 2;
            // const newArray = [...state.results];
            // newArray.splice(id, 1);
            const updatedArray = state.persons.filter(person =>
                person.id !== action.personId);
            return {
                ...state,
                persons: updatedArray
            }
    }
    return state;
}
export default reducer;