import React, { Component } from 'react';
import { connect } from 'react-redux';
import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import * as actionTypes from '../store/actions';

class Persons extends Component {
    state = {
        persons: []
    }
 
    // personAddedHandler = () => {
    //     const newPerson = {
    //         id: Math.random(), // not really unique but good enough here!
    //         name: 'Max',
    //         age: Math.floor( Math.random() * 40 )
    //     }
    //     this.setState( ( prevState ) => {
    //         return { persons: prevState.persons.concat(newPerson)}
    //     } );
    // }

    // personDeletedHandler = (personId) => {
    //     this.setState( ( prevState ) => {
    //         return { persons: prevState.persons.filter(person => person.id !== personId)}
    //     } );
    // }

    render () {
        const newPerson = {
            id: Math.random(), // not really unique but good enough here!
            name: 'Max',
            age: Math.floor( Math.random() * 40 )
        }
        return (
            <div>
                <AddPerson personAdded={()=>this.props.onPersonAdd(newPerson)} />
                {this.props.storedPersons.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.props.onPersonDelete(person.id)}/>
                ))}
            </div>
        );
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onPersonAdd: (addedPerson) => dispatch({ type: actionTypes.PERSON_ADD, person: addedPerson }),
        onPersonDelete: (id) => dispatch({ type: actionTypes.PERSON_DELETE, personId: id })
    }
}

const mapStateToProps = state => {
    return { 
        storedPersons: state.pes.persons
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Persons);