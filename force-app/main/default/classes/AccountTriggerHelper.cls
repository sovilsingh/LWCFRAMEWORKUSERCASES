public class AccountTriggerHelper {
    
    @testVisible static IAccountDAO accountDaoInstance = new AccountDAO();
    
    //public void methodToHandleBeforeInsert(List <Account> newAccounts)
    public List<Account> methodToHandleBeforeInsert(List <Account> newAccounts) {
        for(Account acc : newAccounts){
            acc.Name = acc.Name +' Trigger Handler Framework';
        }
        return newAccounts;
    }
    public void methodToHandleBeforeDelete(list <Account> accountList) {
      
    }
    public List<Account> methodToHandleAfterInsert(List<Account> newRecordList) {
        List<Contact> conList = new List<Contact>();
        for(Account acc: newRecordList){
            contact con = new contact();
            con.LastName = acc.Name;
            con.AccountId = acc.Id;
            conList.add(con);
        }    
         accountDaoInstance.createSobject(conList);
         return newRecordList;
    }
    public void methodToHandleAfterDelete(list <Account> listofoldRecord) {
      
    }
    public void methodToHandleAfterUpdate(list <Account> listofNewRecord) {
       
    }
    public void methodToHandleBeforeUpdate(list <Account> listofNewRecord) {
        
    }
  

}