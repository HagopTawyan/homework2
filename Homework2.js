const imagea = 40;
const imageb = 60;
const imagec = 40+60;
const imaged = 10+"images";
const uploadedimage = imagea*imageb;
 console.log(uploadedimage);
 
 if (imagea===imageb){
 console.log("something is not right");

 }
  else {
    console.log(imageb - imagea);
  }
  
 if (uploadedimage>imagec){

 	console.log("your image has exeeded");
 }
else{
	console.log("Image uploaded!");
}
				
 if(imagea!==imageb && imageb<imagea){
 	console.log(uploadedimage);
 }
 else{
 	console.log(imaged);
 }				