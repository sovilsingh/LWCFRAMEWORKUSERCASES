import { LightningElement, track} from 'lwc';
import getAccounts from '@salesforce/apex/lwcwireDemoExample3.getAccounts';

const columns = [

    {label : "Name", fieldName : "Name"},
    {label : "Account ID", fieldName : "Id"},
];

export default class LwcimperativelydemoExample5 extends LightningElement {

@track columnsList = columns;
@track dataList = [];
connectedCallback() {
    
    getAccounts()
     .then(result=>{
        this.dataList = result;
     })
     .catch(error =>{
         console.log("error happen");
     })
}


}