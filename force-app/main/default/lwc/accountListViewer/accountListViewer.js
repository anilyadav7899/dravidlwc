import { LightningElement } from 'lwc';
import doSomething from '@salesforce/apex/AccountController.doSomething';
export default class AccountListViewer extends LightningElement {
accounts;
error;
    handleClick(){
        doSomething().then(result =>{
this.accounts = result;
        })
        .catch(error =>{
            this.error = error;
        })
    }

}