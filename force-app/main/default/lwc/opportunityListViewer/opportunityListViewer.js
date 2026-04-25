import { LightningElement,api } from 'lwc';
import doSomething from '@salesforce/apex/OpportunityController.doSomething';
export default class OpportunityListViewer extends LightningElement {
    @api recordId;
Opportunities;
errors;
handleOnClick(){
doSomething({recordId:this.recordId}).then(result =>{
    this.Opportunities = result; 
}).catch(error =>{
    this.errors = error;
})
}
}