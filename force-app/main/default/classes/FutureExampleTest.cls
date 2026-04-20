@isTest
public class FutureExampleTest {
    @isTest
  public static void testFutureMethod(){
    // prepare data //
    List<Account> acList = new list<Account>(); 
    Account ac = new Account();
    ac.Name = 'Ani infra';
    acList.add(ac);
    Insert acList;
 List<Id>lids = new List<Id>();
 for(Account acc :acList){
lids.add(acc.Id);
    }
    Test.startTest();
    FutureExample.updateAccount(lids);
    Test.stopTest();
    List<Account> updatedList = [select Id,Name from Account WHERE Id IN :lids];
    for(Account acs:updatedList){
        System.assertEquals('Updated by Future',acs.Name);
    }
  }
}