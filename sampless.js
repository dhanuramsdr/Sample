const Display=(req,res)=>{
const val=true;
if(val){
    req("ok")
}
else{
    res("no")
}
}

async function asyncStatus(){
console.log('succes');
 red=await Display
console.log(res);

}
asyncStatus()