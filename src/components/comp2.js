import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//--------------------------------------------------

//==================================================
class Comp2 extends Component {

    constructor( props ) {
        super( props );
        this.state = {
            counter: 0
        };
    }

    render() {
        return (
            <div className="comp2">
                <h2>Class Component: { this.state.counter }</h2>
                <input type="button" value="Click" onClick={ this.onBtnClick.bind( this ) } />
            </div>
        );
    }

    onBtnClick() {
        this.setState( { counter: this.state.counter + 1 } );
    }
};
//==================================================
export default Comp2;