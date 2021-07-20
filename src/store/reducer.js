
const initialState = {
    persons: []
}

const reducer = (state = initialState, action) => {
    if(action.type === 'PERSON_ADD') {
        const newPerson = {
            id: Math.random(), // not really unique but good enough here!
            name: 'Max',
            age: Math.floor( Math.random() * 40 )
        }
        // this.setState( ( prevState ) => {
        //     return { persons: prevState.persons.concat(newPerson)}
        // } );
        return {
            ...state,
            persons: state.persons.concat(newPerson)
        }
    }
    if(action.type === 'PERSON_DELETE') {
        // this.setState( ( prevState ) => {
        //     return { persons: prevState.persons.filter(person => person.id !== personId)}
        // } );
        const updatedArray = state.persons.filter((person) => person.id !== action.personId);
        return {
            ...state,
            persons: updatedArray
        }
    }
    return state;
}
export default reducer;
