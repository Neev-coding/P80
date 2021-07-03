function submit(){
var display_guest_array=[];
for(var j=1;j<=4;j++){
    var name_of_the_guest=document.getElementById("name_of_the_guest_"+j).value;
    console.log(name_of_the_guest);
    name_of_guest_array.push(name_of_the_guest);

}
console.log(name_of_guest_array);
var length_of_the_name_of_the_guest_array=name_of_guest_array.length;
console.log(length_of_the_name_of_the_guest_array);

for(var k=0;k<length_of_the_name_of_the_guest_array;k++){
    display_guest_array.push("<h4>NAME-"+name_of_guest_array[k]+"</h4>");
    console.log(display_guest_array);

}



}
function sorting(){
name_of_guest_array.sort();
console.log(name_of_guest_array);
var display_guest_array_sorting=[];
var length_of_the_name=name_of_guest_array.length;
console.log(length_of_the_name);
for(var k=0;k<length_of_the_name;k++){
    display_guest_array_sorting.push("<h4>NAME-"+ name_of_guest_array[k]+"</h4>");
    console.log(display_guest_array_sorting);

