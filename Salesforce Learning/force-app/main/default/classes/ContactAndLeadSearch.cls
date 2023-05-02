public class ContactAndLeadSearch {
    public static List<List<SObject>> searchContactsAndLeads(String Input){
        String findquery = Input;
        List<List<SObject>> searchList = [FIND :findquery IN ALL FIELDS 
                                      RETURNING Lead(FirstName,LastName), Contact(FirstName,LastName)];
        Return searchList;
    }
}