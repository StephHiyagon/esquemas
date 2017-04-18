
window.addEventListener('load',function(){
  var panel=document.getElementsByTagName('body')[0];
  var div1=document.createElement('div');
  div1.setAttribute("id","red");
  var div2=document.createElement('div');
  div2.setAttribute("id","purple");
  var div3=document.createElement('div');
  div3.setAttribute("id","yellow");

  div1.appendChild(div2);
  div2.appendChild(div3);
  panel.appendChild(div1);
})
