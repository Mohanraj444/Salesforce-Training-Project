public class AccountHandler {
    public static Account insertNewAccount(String AccName){
        try
        {
        Account acc = new Account(Name = AccName);
        Insert acc;
        return acc;
        }
            catch (DmlException e) {
            System.debug('A DML exception has occurred: ' +
            e.getMessage());
            return null;
            }
          
    }
}