public class LwcDataTableExample8Apex {

    @AuraEnabled(cacheable=true)
    public static List<Contact> getContacts(id recordId, String searchKeys){
        string key = '%'+searchKeys+'%';
        if(searchKeys != null && searchKeys != ''){
            List<Contact> conList = [Select Id, Name From Contact Where AccountId =: recordId And Name Like : key ];
            return  conList;
        }else {
                 List<Contact> conList = [Select Id, Name from Contact where AccountId =: recordId];
                 if(conList.size() > 0){
                     return conList;
                 }
                 return null;
        }
        
    }

}