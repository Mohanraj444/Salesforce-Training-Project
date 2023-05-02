import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement {
    fullname = "Dragon"
    power = "zero"

    changehandler(event){
        this.power = event.target.value
    }

    @track
    address = {
        city:"Melbourne",
        country:"Austrlia"
    }

    eventhandler(event){
        this.address.city = event.target.value
    }

    get cityname(){
        return this.address.city
    }

    @track
    user = ["abc", "hyt", "opl"]

    get firstname(){
        return this.user[0]
    }

    isVisible = false
    userEnteredText = ""
    isErrorVisible = false

    passwordhandler(event){
        this.userEnteredText = event.target.value
    }

    handleClick(){
        if(this.userEnteredText === "Password")
            {
            this.isVisible = true
            this.isErrorVisible = false
            }
        else
            {
            this.isErrorVisible = true
            this.isVisible = false
            }
    }

}