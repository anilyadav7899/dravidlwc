public with sharing class QueueableExample implements Queueable {
    public void execute(QueueableContext Context){
List<Account>aclist = [select Id,Name FROM Account LIMIT 1];
for(Account ac:aclist){
    ac.Name ='Updated by Queueable';
}
if(!aclist.isEmpty()){
    update aclist;
}
    }
}