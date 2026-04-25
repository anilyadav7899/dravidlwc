import { LightningElement } from 'lwc';
import createReturn  from '@salesforce/apex/ReturnController.returnController';
import {ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class OrderReturnComponent extends LightningElement {
    orderNumber;
    email;
    deliverydate;
    reason;

    handleOrder(event){
        this.orderNumber = event.target.value;
 }
 handleEmail(event){
this.email = event.target.value;
 }
 handleDate(event){
   this.deliverydate = event.target.value;
}
handleReason(event){
this.reason = event.target.value;
}
handleSubmit(){
  let req = {
    Order_Number__c : this.orderNumber,
    Customer_Email__c :this.email,
    Delivery_Date__c :this.deliverydate,
    Return_reason__c :this.reason
};
createReturn({req :req})
.then(result =>{
    if(result === 'success'){
        this.ShowToast('success','return requested','success');
    }
    else{
        this.showtoast('error','result','error');
    }
}).catch(error =>{
    this.showtoast('error',error.body.message,'error')
})
}
ShowToast (title,message,variant){
    this.dispatchEvent(new ShowToastEvent({
        title:title,
        message:message,
        variant:variant
    }) );
}
  }