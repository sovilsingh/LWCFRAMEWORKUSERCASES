import { LightningElement } from 'lwc';
import singin from './signin.html';
import signinup from './singinup.html';
import renderTemplate from './lwcrendermethodExample21.html';
export default class LwcrendermethodExample21 extends LightningElement {

    selectedBtn = '';

    render() {
        return this.selectedBtn === 'SignUp' ? signinup :
            this.selectedBtn === 'SignIn' ? singin :
            renderTemplate;
    }

    handleClick(event) {
        this.selectedBtn = event.target.label;
    }

    submitClick(event){
        alert('Created BoBo');
    }

}