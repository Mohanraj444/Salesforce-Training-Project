public class TestAccountDeleter {
    public static void DeleteTestAccounts(){
        List<Account> Acc = [SELECT Id,Name FROM Account WHERE Name like 'Test Account%'];
        delete Acc;
    }
}