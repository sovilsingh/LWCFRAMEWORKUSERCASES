public class AccountDAOMock implements IAccountDAO {
    
    public List<Sobject> SobjectToReturn = new List<Sobject>();
    
    public List<Sobject> createSobject(List<Sobject> sobjectList){
        return SobjectToReturn;
    }
    public List<Sobject> updateSobject(List<Sobject> sobjectList){
        return SobjectToReturn;
    }
    public List<Sobject> deleteSobject(List<Sobject> sobjectList){
        return SobjectToReturn;
    }
}