import React, { PureComponent } from 'react';
import Person from './Person/Person';


class Persons extends PureComponent {
    // static getDerivedStateFromProps(props,state){
    //     console.log('[Persons.js] getDerivedStateFromProps');
    //     return state;
    // }
    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('[Persons.js] shouldComponentUpdate');
    //     if (nextProps.persons !== this.props.persons 
    //         || nextProps.changed !== this.props.changed 
    //         || nextProps.clicked !== this.props.clicked) {
    //         return true;
    //     }
    //     return false;
    // }
    getSnapshotBeforeUpdate(previousProps, previousState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return { message: 'snapshot' };
    }
    componentDidUpdate(previousProps, previousState, snapshot) {
        console.log('Person.js component update');
        console.log({ snapshot });
    }
    render() {
        console.log('[Persons.js] is rendering');
        return (

            this.props.persons.map((person, index) => {
                return <Person
                    click={() => this.props.clicked(index)}
                    name={person.name}
                    age={person.age}
                    key={person.id}
                    changed={(event) => this.props.changed(event, person.id)}
                >
                </Person>
            }
            )
        )
    }
};
export default Persons;