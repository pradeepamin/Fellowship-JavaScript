class chatRoom{
    constructor(user,message){
        this.user=user;
        this.message=message;

    }
    showMessage(){
        
        console.log("User name is: " + this.user+ " and message:" + this.message);
    }
}
class User{
    constructor(name){
        this.name=name;
    }
    setName(nm){
     this.name=nm;
    }
    getName(){
        this.name;
    }
    sendMessage(message)
    {
        this.message=message;
        let cr=new chatRoom(this.name,this.message);
        cr.showMessage();   
    }
}
let pradeep=new User();
let amin=new User();

pradeep.setName("pradeep");
amin.setName("amin");
pradeep.sendMessage("hi udupi");
amin.sendMessage("hi bangalore");

