import React from 'react';
import './input.css'
class Input extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        const {type, descPlaceHolder} = this.props;
        return <input type="submit" type={type} placeholder={descPlaceHolder} />
    }
}

export {Input}