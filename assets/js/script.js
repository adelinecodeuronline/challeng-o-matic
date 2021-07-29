var support = [
    
    'Designer et coder une landing page' ,
   'Designer une landing page' ,
   'Designer et coder une application hybride' ,
   'Designer un flyer' ,
   'Designer une carte de visite' ,
  
  
       
     
        
   ]
   
   
   var theme = [
       
    ' au sujet de sushis de licorne' ,
   ' ayant pour thème la soupe froide à la banane' ,
   ' vantant les vertues de la carotte' ,

     
        
   ]
   
   
   var temps = [
       
    ', à réaliser en deux mois' ,
   ', à créer en une journée' ,
   ', à faire en une semaine' ,
   
     
        
   ]
   
   
   
   
   function newChallenge() {
   var randomNumber = Math.floor(Math.random() * (support.length));
   var randomNumber2 = Math.floor(Math.random() * (theme.length));
   var randomNumber3 = Math.floor(Math.random() * (temps.length));    
   
   
   
   document.getElementById('challenges').innerHTML = support[randomNumber] + theme[randomNumber2] + temps[randomNumber3];
       
       }
   
   
   