import { LightningElement } from 'lwc';
import doSomething from '@salesforce/apex/AccountSearchController.doSomething';
export default class AccountSearch extends LightningElement {
    searchkey;
    accounts;
    error;
handlechange(event){
 this.searchkey = event.target.value;
    }
    handleclick(){
        doSomething({searchkey:this.searchkey})
        .then(result=>{
            this.accounts = result;
        }).catch(error=>{
            this.error;
        })
    }

}