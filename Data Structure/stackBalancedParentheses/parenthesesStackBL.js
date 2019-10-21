const stack=require('../../Utility/stackUtility');

exports.parenthese=(a)=>{
try{
    var st=new stack.Stack();
    var count=0;
    for(let i=0;i<a.length;i++)
    {
        if(a[i]=='[' || a[i]=='{' || a[i]=='(')
        {
            st.push('[');
            count++;
            st.push('{');
            count++;
            st.push('(');
            count++;
        }
        else if(a[i]=='['){
        a[i].pop;
        count--;
        }
        else if(a[i]=='['){
        a[i].pop;
        count--;
        }
        else if(a[i]=='['){
        a[i].pop;
        count--;
        }
    }
}
catch (e) {
    console.log(e);
}
if (count == 0) {
    console.log('parentheses are balanced');
}
else {
    console.log('parentheses are not balanced');
}
}

