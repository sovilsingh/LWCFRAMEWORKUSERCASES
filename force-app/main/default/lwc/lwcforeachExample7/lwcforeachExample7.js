import { LightningElement, wire, track } from 'lwc';
import getAccounts from '@salesforce/apex/lwcwireDemoExample3.getAccounts';

export default class LwcforeachExample7 extends LightningElement {

 @track dataList = [];
 @track dataError;   

@wire(getAccounts)
 wireAccount({data,error}){
     if(data){
        this.dataList = data;
     }else if(error){
        this.dataError = 'We have some error';
     }
 }

}