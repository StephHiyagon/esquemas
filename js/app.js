window.addEventListener('load',function(){
  var panel=document.getElementsByTagName('body')[0];
  var div1=document.createElement('div');
  div1.setAttribute("id","red");
  div1.setAttribute("class","divG");
  var div2=document.createElement('div');
  div2.setAttribute("id","purple");
  div2.setAttribute("class","divM");
  var div3=document.createElement('div');
  div3.setAttribute("id","yellow");
  div3.setAttribute("class","divP");

  div1.appendChild(div2);
  div2.appendChild(div3);
  panel.appendChild(div1);

  var div4=document.createElement('div');
  div4.setAttribute("id","azul");
  div4.setAttribute("class","divG");
  var div5=document.createElement('div');
  div5.setAttribute("id","verde");
  div5.setAttribute("class","divM");
  var div6=document.createElement('div');
  div6.setAttribute("id","negro");
  div6.setAttribute("class","divP");

  div4.appendChild(div5);
  div5.appendChild(div6);
  panel.appendChild(div4);

})
