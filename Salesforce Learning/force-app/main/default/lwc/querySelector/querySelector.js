import { LightningElement } from 'lwc';

export default class QuerySelector extends LightningElement {

    userlist = ["user 1","user 2","user 3","user 4"]
    handleClick(){
        const txt = this.template.querySelector("div")
        console.log(txt.innerText)
        txt.style.color = "Red"
        txt.style.border = "1px solid blue"

        const userElement = this.template.querySelectorAll(".name")
        Array.from(userElement).forEach(item => {
            console.log(item.innerText)
            item.setAttribute("title", item.innerText)
        });

        const childElement = this.template.querySelector(".child")
        childElement.innerHTML = '<p> Hey I am the dynamic child </p>'
    }
}