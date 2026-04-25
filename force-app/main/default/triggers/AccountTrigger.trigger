trigger AccountTrigger on Account(before insert) {
	if(trigger.IsBefore && Trigger.IsInsert){
		AccountTriggerHandler.beforeInsert(trigger.new);
	}
	if(trigger.IsBefore && trigger.IsUpdate){
		AccountTriggerHandler.beforeUpdate(Trigger.New,Trigger.oldmap);
	}
}