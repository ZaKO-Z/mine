var liuhua=document.getElementById("liuhua");
var yongtai=document.getElementById("yongtai");
var tushou=document.getElementById("tushou");
var xia=document.getElementById("xia");
var liuhua_j=document.getElementById("liu_j");
var yongtai_j=document.getElementById("yong_j");
var tushou_j=document.getElementById("tu_j");
var xia_j=document.getElementById("xia_j");
var body=document.body;
liuhua.onclick=function(){
   body.style.backgroundImage="url('b4.png')";
   yongtai_j.style.display='none';
   liuhua_j.style.display='block';
   tushou_j.style.display='none';
   xia_j.style.document='none';

}
yongtai.onclick=function(){
   body.style.backgroundImage="url('b3.png')";
   yongtai_j.style.display='block';
   liuhua_j.style.display='none';
   tushou_j.style.display='none';
   xia_j.style.display='none';
}
tushou.onclick=function(){
   body.style.backgroundImage="url('b2.png')";
   yongtai_j.style.display='none';
   liuhua_j.style.display='none';
   tushou_j.style.display='block';
   xia_j.style.display='none';
}
xia.onclick=function(){
   body.style.backgroundImage="url('b1.png')";
   yongtai_j.style.display='none';
   liuhua_j.style.display='none';
   tushou_j.style.display='none';
   xia_j.style.display='block';
}