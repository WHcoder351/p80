var img = ["https://clipartstation.com/wp-content/uploads/2018/10/working-father-clipart-4.jpg",
  "https://webstockreview.net/images/mom-clipart-cartoon-4.png",
  "https://th.bing.com/th/id/R277a8e105c31d3209f29cd2ebdebe261?rik=QQHkFbfBrjyfsA&riu=http%3a%2f%2fclipart-library.com%2fnewimages%2fboy-clipart-14.jpg&ehk=8MZ8N5ALHqP2zWJvCywpCLMXx9m6JC9gfxd8k0eHurU%3d&risl=&pid=ImgRaw",
  "https://s-media-cache-ak0.pinimg.com/564x/47/e8/15/47e815e8fa0e4a00f1fe8dc017f48ccb.jpg"];
  var names = ["Raja","Rani","Jason","Jadon"]
var i = 1;
function move() {
  document.getElementById("album1").src = img[i]; 
  document.getElementById("name").innerHTML = names[i]; 
i++;
if (i==4)
  {
    i=0; }
}
