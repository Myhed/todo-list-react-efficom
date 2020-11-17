import React from 'react';
import './form.css';
import {Button, Input} from '../../components';
class FormWrapper extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return <form>
            <Input type="text" descPlaceHolder="Entrer votre email..."/>
            <Button classNameValue="button"/>
        </form>
    }
}

export {FormWrapper}