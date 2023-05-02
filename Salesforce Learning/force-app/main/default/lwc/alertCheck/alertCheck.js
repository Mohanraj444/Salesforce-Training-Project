import { LightningElement } from 'lwc';
import LightningAlert from 'lightning/alert';

export default class AlertCheck extends LightningElement {
    async handleAlertClick(){
        await LightningAlert.open({
            message:"this is an alert message",
            theme:"error",
            label:"Serious Error"

        })
    }
}