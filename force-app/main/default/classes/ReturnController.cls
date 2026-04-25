/**
 * ――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――
 * Class Name      : ReturnController
 * Author          : <YourName>
 * Created Date    : Apr 24, 2026
 * Last Modified By: <YourName>
 * Last Modified On: Apr 24, 2026
 * Description     : This class implements for......
 *  
 * Change History  :
 *  Date          │   Author     │   Change
 * ――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――
 *  Apr 24, 2026  │ <YourName>   │ Initial version
 * ――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――
 */

public class ReturnController {

	@AuraEnabled
	public static string  returnController(Order_Return_c__c req) {
		// duplicate check //
		List<Order_Return_c__c> existing = [select id from Order_Return_c__c where Order_Number__c = :req.Order_Number__c LIMIT 1];
		if(!existing.isEmpty()){
			return 'return already requested';
		}
		 // date validation //
		 if(date.today().daysBetween(req.Delivery_Date__c)>7){
			return 'return period expired';
		 }
		 // prepare data //
		 req.Request_date__c = date.today();
		 req.status__c = 'Requested';
		 insert req;
		 return 'success';
	}	

}