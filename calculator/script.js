function disp(val){
    document.getElementById('num').value += val;
}
function clearscrn()
{
    document.getElementById('num').value='';
}
function equalClick()
{
    var num = document.getElementById('num').value;
    var result = eval(num);
    document.getElementById('num').value = result;
}