import React from 'react';
import './button.css'
class Button extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        const { classNameValue } = this.props;
        return <input type="submit" className={classNameValue} disabled={true}/>
    }
}

export {Button}