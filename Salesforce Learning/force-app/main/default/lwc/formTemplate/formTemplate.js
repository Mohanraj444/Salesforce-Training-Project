import { LightningElement } from 'lwc';
import signinTemplate from './signinTemplate.html'
import signupTemplate from './signupTemplate.html'
import formTemplate from './formTemplate.html'

export default class FormTemplate extends LightningElement {

    templatevar = ""

    render(){
        if (this.templatevar === "Singin")
            return signinTemplate
        else if (this.templatevar === "Singup")
            return signupTemplate
        else
            return formTemplate
    }

    handleClick(event){
        this.templatevar = event.target.label
    }

    signHandler(event){
        console.log(`${event.target.label} is successful !!!`)
    }
}