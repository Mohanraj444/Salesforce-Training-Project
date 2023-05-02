public class TestAccountCreater {
    public static void CreateNewAccounts(Integer Num){
        //New Comment Added
        Integer Input = Num;
        String Temp = '';
        List<Account> Acc = new List<Account>();
            for (Integer I = 1; I <= Input; I++)
            {	
                Temp = 'Test Account ' + I;
        		Acc.add(New Account(Name  = Temp));
            }
        	Insert Acc;
    }
}