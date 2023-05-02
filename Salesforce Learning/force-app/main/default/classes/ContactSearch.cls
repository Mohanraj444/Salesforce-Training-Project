public class ContactSearch {
    public static List<Contact> searchForContacts(String Last_Name, String Postalcode){
        List<Contact> listofcont = [SELECT Id, Name from Contact WHERE LastName = :Last_Name 
                                    AND MailingPostalCode = :Postalcode];
        return listofcont;
        
    }
}