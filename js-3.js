function oper(arr){
   arr=arr.toString();
    let str='',count=0,pre=0,next=0,result=0;
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]=='+' || arr[i]=='-' || arr[i]=='*' || arr[i]=='/'){
        str=arr[i];
        count=1;
        continue;
        }
        if(count==1)
        next+=arr[i];
        else
        pre+=arr[i];
    }
    pre=pre-0;
    next=next-0;
    if(str=="+")
    result=pre+next;
    
    else if(str=="-")
    result=pre-next;
    else if(str=="*")
    result=pre*next;
    else if(str=="/")
    result=pre/next;
    alert(result);
    document.getElementById('result').value = result ;
}