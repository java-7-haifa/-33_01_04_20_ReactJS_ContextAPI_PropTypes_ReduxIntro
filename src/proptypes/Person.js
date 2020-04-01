import React from 'react';
import PropTypes from 'prop-types';

class Person extends React.Component{
    constructor(props){
        super(props);
        this.inputRef2 = React.createRef();
    }
    componentDidMount(){
        console.dir(this.inputRef);
        // this.inputRef.focus();
        this.inputRef2.current.focus();
    }

    render(){
        return (
            <div>
                <input ref={(inputRef) => this.inputRef = inputRef} type='text' />
                <input ref={this.inputRef2} type='text' />
                <h2>{this.props.name}</h2>
                <h3>{this.props.age}</h3>
            </div>
        );
    }
}

Person.defaultProps = {
    name: 'John'
}

Person.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number.isRequired
}


export default Person;