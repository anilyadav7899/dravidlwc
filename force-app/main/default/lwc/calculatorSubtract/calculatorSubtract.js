import { LightningElement } from 'lwc';

export default class CalculatorSubtract extends LightningElement {
    number1 = 0;
    number2 = 0;
    result = 0;

    handleChange1(event) {
        this.number1 = event.target.value;
    }
    handleChange2(event) {
        this.number2 = event.target.value;
    }
    subtract(){
        this.result = this.number1 - this.number2;

    }

}