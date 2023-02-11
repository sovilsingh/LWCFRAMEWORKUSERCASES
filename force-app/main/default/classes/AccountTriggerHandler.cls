public class AccountTriggerHandler extends TriggerHandler {
    
     private static String handlerNameInternal = null;

    public AccountTriggerHandler() {
       // To prevent recursion, you can set a max loop count for Trigger Handler. 
       // If this max is exceeded, and exception will be thrown. 
       // A great use case is when you want to ensure that your trigger runs once and only once within a single execution.
       // Example:
        //this.setMaxLoopCount(1);
    }

    public override String getHandlerName() {
        if(handlerNameInternal == null) {
            handlerNameInternal = AccountTriggerHandler.class.getName();
        }
        system.debug(' AccountTriggerHandler handlerNameInternal '+ handlerNameInternal);
        return handlerNameInternal;
    }
	
	public override String getSObjectType() {
        return 'Account';
    }
    
}