import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//--------------------------------------------------
import Comp1 from './components/comp1';
import Comp2 from './components/comp2';
//==================================================
class APP extends Component {

    constructor( props ) {
        super( props );
        this.state = {
            stateOne: 'un',
            stateTwo: 'deux',
            users: []
        };
    };

    componentWillMount() {
        fetch( 'http://jsonplaceholder.typicode.com/users' )
            .then( results => {
                return results.json();
            }).then( data => {
                // let data.results.map( ( user ) => {
                //     return (
                //         <div key={ user.id }>
                //             user
                //         </div>
                //     );
                // });
                this.setState( { users: data } );
                console.log( 'state: ', this.state.users );
            });
    }

    render() {
        return (
            
            <div className = "app">
                hello there!
                <Comp1 />
                <Comp2 />
            </div>
            
        );
    };
};
//==================================================
ReactDOM.render( <APP />, document.querySelector( '#main' ) );