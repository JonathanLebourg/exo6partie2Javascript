//appel de l'Id, puis écoute des évenements 'passage de la souris' puis fonction
document.getElementById("image1").addEventListener("mouseover",function(){
//changement d'image
  document.getElementById("image1").src="images/image1_2.jpg"
})
//appel de l'Id, puis écoute des évenements 'sortie de la souris de l'image' puis fonction
document.getElementById("image1").addEventListener("mouseout",function(){
//changement d'image
  document.getElementById("image1").src="images/image1.jpg"
})

//marche aussi avec mouseenter et mouseleave
document.getElementById("image2").addEventListener("mouseenter",function(){
  document.getElementById("image2").src="images/image2_2.jpg"
})
document.getElementById("image2").addEventListener("mouseleave",function(){
  document.getElementById("image2").src="images/image2.jpg"
})

document.getElementById("image3").addEventListener("mouseover",function(){
  document.getElementById("image3").src="images/image3_2.jpg"
})
document.getElementById("image3").addEventListener("mouseleave",function(){
  document.getElementById("image3").src="images/image3.jpg"
})

document.getElementById("image4").addEventListener("mouseover",function(){
  document.getElementById("image4").src="images/image4_2.jpg"
})
document.getElementById("image4").addEventListener("mouseleave",function(){
  document.getElementById("image4").src="images/image4.jpg"
})

document.getElementById("image5").addEventListener("mouseover",function(){
  document.getElementById("image5").src="images/image5_2.jpg"
})
document.getElementById("image5").addEventListener("mouseleave",function(){
  document.getElementById("image5").src="images/image5.jpg"
})
