function pc(name){
    this.name=name;
    this.type="Produce PC";
}
function laptop(name){
    this.name=name;
    this.type="Produce Laptop";
}
function server(name){
    this.name=name;
    this.type="Produce Server";
}

function computerFactory()
{
    this.device=(name,type)=>{
        switch(type)
        {
            case 1: return new pc(name);
            break;
            case 2: return new laptop(name);
            break;
            case 3: return new server(name);
        }
    }
}

function say()
{
    console.log("The product " +this.name+ " belongs " +this.type);
}

const companyfactory=new computerFactory()
let factory=[];
factory.push(companyfactory.device("zebronic",1));
factory.push(companyfactory.device("lenevo",2));
factory.push(companyfactory.device("shell",3));

factory.forEach(ele=>{
    say.call(ele);
})
