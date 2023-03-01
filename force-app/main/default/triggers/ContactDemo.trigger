trigger ContactDemo on Contact (After insert, After Update, After delete, After undelete) {

 Set<Id> accountIds = new Set<Id>();
 
    if(trigger.isInsert || trigger.isUpdate || trigger.isUndelete){
        for(Contact con : trigger.new){
            if(con.AccountId != null){
                accountIds.add(con.AccountId);
            }
        }
    }
    
    if(trigger.isUpdate || trigger.isDelete){
        for(Contact con : trigger.new){
            if(con.AccountId != null){
                accountIds.add(con.AccountId);
            }
        }
    }
    
    Map<Id,Decimal> accountTotalAmount = new Map<Id,Decimal>();

    for(AggregateResult result : [Select AccountId, SUM(Amount__c) Total from Contact Where AccountID IN : accountIds Group By AccountID ]){
        accountTotalAmount.put((Id)result.get('AccountId'),(Decimal)result.get('Total'));
    }

    List<Account> accountToUpdate = new List<Account>();

    for(ID accountId : accountTotalAmount.keySet()){
        accountToUpdate.add(new Account(Id=accountId, TotalContactsAmount__c = accountTotalAmount.get(accountId)));
    }

    if(accountToUpdate.size()>0){
      update accountToUpdate;
    }    
}