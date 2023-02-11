public class AccountManager implements IManager {
    
    public AccountTriggerHelper helper;
    public AccountManager() {
        this.helper = new AccountTriggerHelper();
    }
    
    public void beforeInsert(List<Account> lstOfNewRecord){
        system.debug('before inser manager');
         helper.methodToHandleBeforeInsert(lstOfNewRecord);
    }
    
    public void beforeUpdate(List<Account> lstOfNewRecord, Map<Id,SObject> mapOfOldRecord){}
    
	public void beforeDelete(Map<Id,SObject> mapOfOldRecord){}
    public void afterInsert(List<Account> lstOfNewRecord){
        helper.methodToHandleAfterInsert(lstOfNewRecord);
    }
    public void afterUpdate(List<Account> lstOfNewRecord, Map<Id,SObject> mapOfOldRecord){}
	public void afterDelete(Map<Id,SObject> mapOfOldRecord){}
    public void afterUndelete(List<Account> lstOfNewRecord){}
    
    
}