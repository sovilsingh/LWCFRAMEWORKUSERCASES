import { LightningElement, track } from 'lwc';
export default class LwcIfElsedemoExample6 extends LightningElement {

@track onClickButtonLabel= 'Show';
@track cardShow = false;

handleClick(event){
    const label = event.target.label;
    if(label==='Show'){
      this.onClickButtonLabel = 'Hide';
      this.cardShow = true;
    }else if(label==='Hide'){
      this.onClickButtonLabel = 'Show';
      this.cardShow = false;
    }
}

}