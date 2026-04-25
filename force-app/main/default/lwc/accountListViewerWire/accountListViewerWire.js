import { LightningElement,wire,api } from 'lwc';
import doSomething from '@salesforce/apex/AccountControllerWire.doSomething';
export default class AccountListViewerWire extends LightningElement {
    @api recordId;
    Accounts;
    errors;
  @wire(doSomething,{recordId:'$recordId'})
  wiredaccounts({data,error}){
    if(data){
        this.Accounts = data;
    }
    else if(error){
        this.error = error;
    }
  }


  }