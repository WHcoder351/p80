var img = ["https://media.istockphoto.com/vectors/happy-fathers-day-man-open-shirt-to-show-super-dad-vector-id931805078?k=6&m=931805078&s=612x612&w=0&h=Ec0VoyAs9SlYp-xXTd9VPDEaJ-tULt-BLqpXyQmqDME=",
  "https://static.vecteezy.com/system/resources/previews/000/126/700/original/super-mom-vector.jpg",
  "https://image.shutterstock.com/z/stock-vector-big-brother-reading-to-younger-brother-vector-22804474.jpg"];
  var names = ["Rani","Raj","Jason&Jadon"]
var i = 1;
function move() {
  document.getElementById("album1").src = img[i]; 
  document.getElementById("name").src = names[i]; 
i++;
if (i==3)
  {
    i=0; }
}