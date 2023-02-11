public class RecordTypeDAO {
    
    public static Map<String,Map<Id,RecordType>> allRecordTypesSObjectMap;
    
    public static Map<String,Map<Id,RecordType>> getAllRecordTypes()
    {
        if(allRecordTypesSObjectMap == NULL){
            allRecordTypesSObjectMap = new Map<String,Map<Id,RecordType>>();
            List<RecordType> recList = allRecordTypeList;
            for(RecordType rt: recList){
                Map<Id,RecordType> tempMap = new Map<Id,RecordType>();
                if(allRecordTypesSObjectMap.get(rt.SobjectType) != NULL){
                    tempMap = allRecordTypesSObjectMap.get(rt.SobjectType);
                }
                tempMap.put(rt.Id,rt);
                allRecordTypesSObjectMap.put(rt.SobjectType,tempMap);
            }
        }
        return allRecordTypesSObjectMap;
    }
    
    public static List<RecordType> allRecordTypeList
    {
        get
        {
            if(allRecordTypeList == NULL)
            {
                allRecordTypeList = [SELECT Id, Name, DeveloperName, SobjectType, Description, IsActive
                                    FROM RecordType
                                    ORDER BY Id];
            }
            return allRecordTypeList;
        }
        private set;
    }

}