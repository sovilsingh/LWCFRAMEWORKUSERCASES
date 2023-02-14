public class lwcwireDemoExample3 {

   @AuraEnabled(cacheable=true)
   public static List<Account> getAccounts(){
    List<Account> accList = [Select ID, Name from Account];
    return accList; 
 }
}