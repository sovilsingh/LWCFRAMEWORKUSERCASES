public class assignAccountContactsExample11 {

    @AuraEnabled
    public static List<Contact> getContactList(id selectedId){
        List<Contact> conList = [Select Id, Name From Contact Where AccountId =: selectedId ]; 
        if(!conList.isEmpty())
        {
         return conList;
        }
        return null;
    }

    @AuraEnabled
    public static Boolean assignContactToAccount(ID contactselectedId,ID accountId ){
        System.debug('contactselectedId '+contactselectedId+' '+'accountId '+accountId);
        List<Account> accList = new List<Account>();
        List<Contact> conList = [Select Id, Name, AccountId from Contact Where AccountId =: accountId];
        if(!conList.isEmpty()){
            for(Contact con : conList)
            {
                if(contactselectedId == con.ID){
                   Account acc = new Account();
                   acc.ID = con.AccountId;
                   acc.Main_Contact__c = con.id;
                   accList.add(acc);
                }
               
            }
        }
        if(!accList.isEmpty()){
            update accList;
        }
        return false;
    }

}