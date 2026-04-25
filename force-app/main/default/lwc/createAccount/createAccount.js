import { LightningElement } from 'lwc';
import doSomething from '@salesforce/apex/AccountControllerfromUiToApex.doSomething';
export default class CreateAccount extends LightningElement {
accname; //store input
account;
error;
handlechnage(event){
this.accname = event.target.value;
}
handleclick(){
doSomething({accname:this.accname}).then(result =>{
    this.account = result;
}).catch(error =>{
    this.error = error;
})

}
}