import { LightningElement } from 'lwc';

export default class GreetingComponent extends LightningElement {
    greeting = 'Hello, welcome to LWC!';

    changeGreeting() {
        this.greeting = 'Have a great day!';
    }
}