import { LightningElement ,wire} from 'lwc';
import sendMessage from '@salesforce/apex/LwcUtility.sendMessage';
import sendGreeting from '@salesforce/apex/LwcUtility.sendGreeting';
import calculate from '@salesforce/apex/LwcUtility.calculate';

export default class ApexDataBindingLwc extends LightningElement {
    greeting = null;
    n1 = null;
    n2 = null;
    operation = null;
    result = null;

    get options(){
        return [
            {label: "sum" , value :"sum"},
            {label:"difference" , value : "diff"},
            {label : "multiply" , value : "mul"},
            {label : "division" , value : "div"}
        ]
    }
    changehandler(event){
        switch(event.target.name){
            case "n1": this.n1 = event.target.value; break;
            case "n2": this.n2 = event.target.value; break;
            case "operation" : this.operation = event.target.value; break;
        }
    }
    calculateHandler(){
        console.log("calculatehandler()::\n n1 :"+this.n1+"\n n2 : "+this.n2+"\n operation:"+this.operation+"")
    }
    @wire(sendMessage) message 
    @wire(sendGreeting,{personName:"Anil Peyyala"})getGreeting({error,data}){
        if(data){
            console.log("DATA::"+data)
            this.greeting = data;
        }
        if(error){
            console.log("ERROR::"+JSON.stringify(error))
        }
    }
    constructor(){
        super()
       // console.log("message sent from backend::"+ this.message.data);
    }
    connectedCallback(){
      //  console.log("message sent from backend::"+this.message.data)
    }
    renderedCallback(){
    //    console.log("message sent from backend::"+ this.message.data)
    }
    changehandler(event){
        const field = event.target.name;
        const value = event.target.value;
        
    }
    calculateHandler(){
        console.log("calculatehandler()::\nn1::"+this.n1+"\nn2::"+this.n2+"\noperation::"+this.operation+"");
        calculate({x:this.n1,y:this.n2,oper:this.operation}).
        then(result=>{console.log("RESULT::"+JSON.stringify(result))
            this.result = result;
        }).
        catch(error=>{console.log("ERROR::"+JSON.stringify(error))})
    }

}