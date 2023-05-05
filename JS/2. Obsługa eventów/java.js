function MouseOver(){
    document.getElementById('MouseOver').style.backgroundColor="blue";
    document.getElementById('MouseOver').style.height="200px";
    document.getElementById('MouseOver').style.width="200px";
    document.getElementById('MouseOver').style.textAlign="center";
    document.getElementById('MouseOver').style.fontSize="40px";
    document.getElementById('MouseOver').style.verticalAlign="middle";
    document.getElementById('MouseOver').style.display="table-cell";
    document.getElementById('MouseOver').style.borderRadius="75px"
    document.getElementById('MouseOver').innerHTML="jebac disa";
}
function MouseOut(){
    document.getElementById('MouseOver').style.backgroundColor="red";
    document.getElementById('MouseOver').style.height="100px";
    document.getElementById('MouseOver').style.width="100px";
    document.getElementById('MouseOver').innerHTML="";
    document.getElementById('MouseOver').style.borderRadius="25px";

}