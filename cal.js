const val=document.getElementById("inp");
function agtoAdd(v){
    val.value+=v;
}

function cls(){
    val.value="";
}

function exe(){
    val.value=eval(val.value);
}