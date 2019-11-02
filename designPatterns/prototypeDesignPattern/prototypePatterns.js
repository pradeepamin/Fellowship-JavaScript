function student(name,age,add){
    this.name=name;
    this.age=age;
    this.add=add;
    this.say=()=>{
        console.log("Student name is "+this.name+ " and age is " +this.age+ " address " +this.add );
    };

}

function customerPrototype(proto){
    this.proto=proto;
     this.clone=function(){
        var std=new student();
        std.name=proto.name;
        std.age=proto.age;
        std.add=proto.add;
        return std;
    };
}
function run(){
var proto=new student('prp','25','kaup');
var prototype=new customerPrototype(proto);
var std=prototype.clone();
std.say();
}
run();



// let obj=new student('prp','26','kaup');
// obj.say();