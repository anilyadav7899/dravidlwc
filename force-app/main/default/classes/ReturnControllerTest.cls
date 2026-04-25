@isTest
public class ReturnControllerTest {

    // SUCCESS CASE
    @isTest 
    static void testSuccess(){

        Order_Return_c__c req = new Order_Return_c__c();
        req.Order_Number__c = 'ORD-100';
        req.Customer_Email__c = 'valid@gmail.com';
        req.Delivery_Date__c = Date.today().addDays(-2); // ✅ correct (no quotes)
        req.Return_Reason__c = 'Damaged';

        Test.startTest();
        String result = ReturnController.returnController(req); // ✅ correct variable
        Test.stopTest();

        System.assertEquals('success', result);

        List<Order_Return_c__c> recs = [
            SELECT Id, Status__c 
            FROM Order_Return_c__c 
            WHERE Order_Number__c = 'ORD-100'
        ];

        System.assertEquals(1, recs.size());
        System.assertEquals('Requested', recs[0].Status__c); 
    }

    // DUPLICATE VALIDATION
    @isTest
    static void testDuplicate(){

        // First insert (existing record)
        Order_Return_c__c existing = new Order_Return_c__c();
        existing.Order_Number__c = 'ORD-200';
        existing.Customer_Email__c = 'test@gmail.com';
        existing.Delivery_Date__c = Date.today().addDays(-2);
        existing.Return_Reason__c = 'old';
        insert existing;

        // Try duplicate
        Order_Return_c__c req = new Order_Return_c__c();
        req.Order_Number__c = 'ORD-200'; // same → duplicate
        req.Customer_Email__c = 'test@gmail.com';
        req.Delivery_Date__c = Date.today().addDays(-2);
        req.Return_Reason__c = 'duplicate try';

        Test.startTest();
        String result = ReturnController.returnController(req);
        Test.stopTest();

        System.assertEquals('return already requested', result);
    }

    // DATE VALIDATION
    @isTest
    static void testDateValidation(){

        Order_Return_c__c req = new Order_Return_c__c();
        req.Order_Number__c = 'ORD-300';
        req.Customer_Email__c = 'test@gmail.com';
        req.Delivery_Date__c = Date.today().addDays(-10); // ❗ force failure
        req.Return_Reason__c = 'late';

        Test.startTest();
        String result = ReturnController.returnController(req);
        Test.stopTest();

        System.assertEquals('return period expired', result);
    }
}