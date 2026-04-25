import { api, LightningElement,track } from 'lwc';

export default class MyFirstLwc extends LightningElement {
    greeting = null
    personname = 'anil'
    company = null
    city = null
    phone = null
    clickedbuttonlabel = null
    state = null
    country = null
    isActive = false
    cars = ["audi","benz","lamborgini","bmw"]
    @track vehicle = {type : "car",
        colour:"red",
        refurbished : "false",
        insurence :"true"}
        @api recordId
    constructor(){
        super()
        console.log("constructor() is executed")
       this.company = 'ushi technologies'
    }
    connectedCallback(){
        console.log("connectedcallback() is executed")
        this.city = 'eluru'
    }
    phonenumberassigned(){
        console.log("phone number is executed")
        this.phone = '9381312156'
    }
    capturebuttonlabel(event){
        console.log("EVENT::"+JSON.stringify(event))
        console.log("TARGET::"+JSON.stringify(event.target))
        console.log("LABEL::"+JSON.stringify(event.target.label))
        this.clickedbuttonlabel = event.target.label
 }
 capturestate(event){
this.state = event.target.value
 }
 capturecountry(event){
if(event === 13){
    this. country = event.target.value
}
 }
 changehandler(){
let checkbox = this.template.querySelector('.cbox')
console.log("check box state::"+ checkbox.checked)
this.isActive = checkbox.checked
 }
 ToggleRefurbished(){
    this.vehicle.refurbished = !this.vehicle.refurbished
 }

}