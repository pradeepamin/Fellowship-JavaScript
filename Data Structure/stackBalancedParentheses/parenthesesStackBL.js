

let stack=require('../../Utility/stackUtility');

let s = new stack.Stack();
exports.parenthese = (express) => {
    let e = express.split('');
    e.forEach(element => {
        if (element == '(' || element=='{' || element=='[')
        {
            s.push('(');
            s.push('{');
            s.push('[');
        }
        else if (element == ')' || element=='}' || element==']')
            s.pop();
    });
    //at last if the stack is empty that means expression is balanced else not balanced
    if (s.isempty()) console.log('arithematic expression ' + express + " is balanced");
    else console.log('arithematic expression ' + express + " is not balanced");
}