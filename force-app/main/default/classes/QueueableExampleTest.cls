/**
 * This class contains unit tests for validating the behavior of Apex classes
 * and triggers.
 *
 * Unit tests are class methods that verify whether a particular piece
 * of code is working properly. Unit test methods take no arguments,
 * commit no data to the database, and are flagged with the testMethod
 * keyword in the method definition.
 *
 * All test methods in an org are executed whenever Apex code is deployed
 * to a production org to confirm correctness, ensure code
 * coverage, and prevent regressions. All Apex classes are
 * required to have at least 75% code coverage in order to be deployed
 * to a production org. In addition, all triggers must have some code coverage.
 * 
 * The @isTest class annotation indicates this class only contains test
 * methods. Classes defined with the @isTest annotation do not count against
 * the org size limit for all Apex scripts.
 *
 * See the Apex Language Reference for more information about Testing and Code Coverage.
 */
@isTest
private class QueueableExampleTest {

    @isTest
    static void myUnitTest() {
        // TO DO: implement unit test
        List<Account>aclist = new List<Account>();
        Account ac = new Account();
        ac.Name = 'Test Account';
        aclist.add(ac);
        Insert aclist;
        Test.startTest();
        System.enqueueJob(new QueueableExample());
        Test.stopTest();
        List<Account> updatedList = [select Id,Name From Account where Id IN :aclist];
        for(Account a:updatedList){
            System.assertEquals('Updated by Queueable',a.Name);
        }
    }
}