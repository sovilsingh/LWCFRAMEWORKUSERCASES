public class comboBoxApexExample9 {

    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts(){
     return [Select Id, Name From Account];
    }    
 

}