import { LightningElement } from 'lwc';
import doSomething from '@salesforce/apex/ContactController.doSomething';
export default class ContactListViewer extends LightningElement {
contacts;
error;
handleClick(){
    doSomething().then(result =>{
        this.contacts = result;
    }).catch(error=>{
        this.error=error
    })
}
}