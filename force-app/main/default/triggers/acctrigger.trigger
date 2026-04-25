trigger acctrigger on Account (before delete) {
contactBirthdaywishes.method1(trigger.old);
}