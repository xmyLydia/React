import * as actionTypes from '../store/actions';

const initialState = {
    persons: []
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.PERSON_ADD:
            const newPerson = {
                id: Math.random(), // not really unique but good enough here!
                name: action.personData.name,
                age: action.personData.age
            }
            return {
                ...state,
                persons: state.persons.concat(newPerson)
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