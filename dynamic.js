function loadJson(file,callback){
  var xhr= new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
   xhr.onreadystatechange=function(){
     if (xhr.readyState === 4 && xhr.status=="200"){
       callback(xhr.responseText);
     }
   }
   xhr.send();
}

loadJson("dynamic.json",function(text){
let data=JSON.parse(text);
console.log(data);
profile(data.profile);
career(data.career);
Education(data.Education_details);
Skills(data.Skills);
})

var left=document.querySelector(".left");
function profile(p){
var image=document.createElement("img");
image.src=p.image;
left.append(image);

var h2=document.createElement("h2");
h2.textContent=p.name;
left.append(h2);

var h3=document.createElement("h3");
h3.textContent=p.Designation;
left.append(h3);

var h4=document.createElement("h4");
h4.textContent=p.email_id;
left.append(h4);

var h5=document.createElement("h5");
h5.textContent=p.phone_no;
left.append(h5);
}

var right=document.querySelector(".right");
function career(c){
  var h1=document.createElement("h1");
  h1.textContent="career objective";
right.append(h1);

var hr=document.createElement("hr");
right.append(hr);

var h2=document.createElement("h2");
h2.textContent=c.info;
right.append(h2);
}

function Education(edu){
var h3=document.createElement("h3");
h3.textContent="Education_details";
right.append(h3);

var hr=document.createElement("hr");
 right.append(hr);

 var table=document.createElement("table");
 table.border="3";
 var tr1="<tr><th>Qualification</th><th>Institute</th><th>percentage</th><th>yop</th></tr>";
var tr2=" ";
for(i=0;i<edu.length;i++)
{
   tr2=tr2+"<tr><td>"+edu[i].Qualification+"</td><td>"+edu[i].Institute+"</td><td>"+edu[i].percentage+"</td><td>"+edu[i].yop+"</td></tr>"
 }
 table.innerHTML=tr1+tr2;
right.append(table);
}

function Skills(s){
  var h1=document.createElement("h2");
  h1.textContent="Skills";
  right.append(h1);
  var hr=document.createElement("hr");
  right.append(hr);
  var ul=document.createElement("ul");
  for(var i in s){
    var li=document.createElement("li");
    li.innerHTML=s[i].Name+":"+s[i].info;
    ul.append(li);
  }
right.append(ul);
}
