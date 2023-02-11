@isTest
private class AccountDOATest {
    
    @isTest
    private static void createSobjectTest(){
        List<Account> accountTest = new List<Account>();
        Account acc = new Account();
        acc.Name = 'Test';
        accountTest.add(acc);   
        AccountDAO accDoa = new AccountDAO();
        Test.startTest();
        List<Account> accounts = accDoa.createSobject(accountTest);
        Test.stopTest();
        System.assertEquals(1, accounts.size());

    }
    
     @isTest
    private static void updateSobjectTest(){
        List<Account> accountTest = new List<Account>();
        Account acc = new Account();
        acc.Name = 'Test';
        accountTest.add(acc);   
        AccountDAO accDoa = new AccountDAO();
        Test.startTest();
        Insert accountTest;
        List<Account> accounts = accDoa.updateSobject(accountTest);
        Test.stopTest();
        System.assertEquals(1, accounts.size());

    }
    
     @isTest
    private static void deleteSobjectTest(){
        List<Account> accountTest = new List<Account>();
        Account acc = new Account();
        acc.Name = 'Test';
        accountTest.add(acc);   
        AccountDAO accDoa = new AccountDAO();
        Test.startTest();
        Insert accountTest;
        List<Account> accounts = accDoa.deleteSobject(accountTest);
        Test.stopTest();
        System.assertEquals(1, accounts.size());

    }

}