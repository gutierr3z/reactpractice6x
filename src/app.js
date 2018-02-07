import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//--------------------------------------------------
//==================================================
class APP extends Component {

    constructor( props ) {
        super( props );
        this.state = {
            stateOne: 'un',
            stateTwo: 'deux'
        };
    };

    render() {
        return (
            
            <div>
                hello there!
            </div>
        );
    };
};
//==================================================
ReactDOM.render( <APP />, document.querySelector( '#main' ) );


