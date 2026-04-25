import { LightningElement,api } from 'lwc';

export default class DataBindingLwc extends LightningElement {
    greeting = null;
    personName = 'Anil';
    company = null;
    city = null;
    phoneNumber = null;
    clickedButtonLabel = null;
    state = null;
    country = null;
    isActive = false;
    cars = ["benz","honda","ferrari","lamborgini","kia"];
    vehicle = {type :'car',
      colour :'red',
      wheels : 4,
      insurance :true,
      refurbished :false
    }
   @api recordId;
    // constructor will construct the component 
    constructor(){
        super()
        console.log("constructor() is executed")
        this.company = "Abhyram It Solutions"
  }
  connectedCallback(){
    console.log("connectedCallback() is executed")
    this.city = 'eluru'
  }
  assignPhoneNumber(){
    console.log("assignPhoneNumber() is executed")
    this.phoneNumber = '9381312156'
  }
  captureButtonLabel(event){
    console.log("Event::"+JSON.stringify(event))
    console.log("TARGET::"+JSON.stringify(event.target))
    console.log("LABEL::"+ JSON.stringify(event.target.label))
    this.clickedButtonLabel = event.target.label
  }
  capturestate(event){
this.state = event.target.value;
  }
  capturecountry(event){
    if(event.keyCode === 13){
      this.country = event.target.value;
    }
  }
  changeHandler(event){
  const checkbox =  this.template.querySelector('.myCheck')
  this.isActive = checkbox.checked
  }
 
}