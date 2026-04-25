public with sharing class FutureExample {

    @future
    public static void updateAccount(List<Id> acid){

        List<Account> accList = [SELECT Id, Name FROM Account WHERE Id IN :acid];

        for(Account ac : accList){
            ac.Name = 'Updated by Future';
        }

        if(!accList.isEmpty()){
            update accList;
system.debug('the updated records'+accList);
        }
    }
}
