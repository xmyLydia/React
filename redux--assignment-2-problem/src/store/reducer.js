import * as actionTypes from '../store/actions';

const initialState = {
    persons: [
        {
            id: 1,
            value: {
                id: Math.random(), // not really unique but good enough here!
                name: 'Max',
                age: Math.floor(Math.random() * 40)+10
            }
        }
    ]
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.PERSON_ADD:
            return {
                ...state,
                results: state.persons.concat({ id: new Date(), value: action.person })
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