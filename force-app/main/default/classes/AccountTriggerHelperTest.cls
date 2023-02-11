@isTest
private class AccountTriggerHelperTest {
    
    @isTest
    private static void methodToHandleAfterInsertTest(){
        
        AccountDAOMock mock = new AccountDAOMock();
        List<Account> accountTest = new List<Account>();
        Account acc = new Account();
        acc.Name = 'Test';
        accountTest.add(acc);
        mock.SobjectToReturn.add(acc);
        
        AccountTriggerHelper acchelper = new AccountTriggerHelper();
        AccountTriggerHelper.accountDaoInstance =  mock;
        
        Test.startTest();
        List<Account> accounts = acchelper.methodToHandleAfterInsert(accountTest);
        Test.stopTest();
        System.assertEquals(1, accounts.size());
    }
    
     @isTest
    private static void methodToHandleBeforeInsert(){
        
        AccountDAOMock mock = new AccountDAOMock();
        List<Account> accountTest = new List<Account>();
        Account acc = new Account();
        acc.Name = 'Test';
        accountTest.add(acc);
        mock.SobjectToReturn.add(acc);
        
        AccountTriggerHelper acchelper = new AccountTriggerHelper();
        AccountTriggerHelper.accountDaoInstance =  mock;
        
        Test.startTest();
        List<Account> accounts = acchelper.methodToHandleBeforeInsert(accountTest);
        Test.stopTest();
        System.assertEquals(1, accounts.size());
    }
}