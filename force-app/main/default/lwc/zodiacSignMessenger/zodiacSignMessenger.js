import { LightningElement } from 'lwc';

export default class ZodiacSignMessenger extends LightningElement {
    UserName;
    UserDateOfBirth;
    handleonchangeName(event){
this.UserName = event.Target.Value;
    }
    handleonchangeDate(event){
this.UserDateOfBirth = event.Target.Value;
    }
    handleonsubmit(){
console.log("the name is :"+UserName);
console.log("the data of birth :"+UserDateOfBirth)
    }

}