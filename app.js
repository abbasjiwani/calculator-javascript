function res(val){
    document.getElementById("result").value+=val

}

function sol(){
    let x=document.getElementById("result").value
    let y=eval(x);
    document.getElementById("result").value=y


}

function clearText(){
    document.getElementById("result").value=""
}