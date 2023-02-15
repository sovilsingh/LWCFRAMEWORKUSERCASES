public class comboBoxApexExample10 {

    @AuraEnabled(cacheable=true)
    public static List<Contact> getContactsforAccounts(id accountId){
     
     List<Contact> conList = [Select Id, Name from Contact Where AccountId =: accountId];
     return conList;
    }

}