public class TransactionLogHandler 
{
         public static void doHandleException(System.Exception ex, String ProcessName)
         {
             Error_Log__c transactionLog = new Error_Log__c(
             Log_Details__c = ex.getStackTraceString() +' <br/> '+ex.getMessage()
             +' <br/> '+ex.getCause()+' <br/> '+ex.getTypeName()+' <br/> '+ex.getLineNumber(),
             Lod_DateTime__c = System.Now(),
             Process_Name__c = ProcessName
             );
             
             
            // if(Schema.SObjectType.Error_Log__c.isCreateable())
            // {
                 insert transactionLog;
            // }
         }
}