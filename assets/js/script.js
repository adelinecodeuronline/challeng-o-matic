var support = [
    
    'Designer et coder une landing page' ,
   'Designer une landing page' ,
   'Designer et coder une application hybride' ,
   'Designer un flyer' ,
   'Designer une carte de visite' ,
   'Créer un logo' ,
   'Développer un concept visuel' ,
   'Inventer un concept à intégrer' ,
   'Concevoir une illustration' ,
   'Imaginer un UI kit' ,
   'Designer une identité visuelle' ,
   'Designer et coder un site web' ,
   'Créer une newsletter' ,

  
  
       
     
        
   ]
   
   
   var theme = [
       
    ' au sujet de sushis de licorne' ,
   ' ayant pour thème la soupe froide à la banane' ,
   ' vantant les vertues de la carotte' ,
   ' à propos d\'algues radioactives' ,
   ' mettant en avant les transports en soucoupe volante' ,
   ' au sujet d\'un service de garde de chats multicolores ' ,
   ' possédant le thème de la téléportation ' ,
   ' au sujet de produits invisibles ' ,
   ' ayant pour thème les voitures caméléons' ,
   ' vantant les bénéfices de ne jamais dormir' ,

     
        
   ]
   
   
   var temps = [
       
    ', à réaliser en deux mois' ,
   ', à créer en une journée' ,
   ', à faire en une semaine' ,
   ', à finir en un mois' ,
   ', à terminer en deux heures' ,
   ', à effectuer en un week-end' ,
   ', à réaliser en trois jours' ,
   ', à créer en une soirée' ,
   ', à faire en deux semaines' ,
   ', à finir en un temps indéterminé' ,
   ', à terminer hier' ,
   ', à effectuer pour demain' ,
   
     
        
   ]
   
   
   
   
   function newChallenge() {
   var randomNumber = Math.floor(Math.random() * (support.length));
   var randomNumber2 = Math.floor(Math.random() * (theme.length));
   var randomNumber3 = Math.floor(Math.random() * (temps.length));    
   
   
   
   document.getElementById('challenges').innerHTML = support[randomNumber] + theme[randomNumber2] + temps[randomNumber3];
   document.getElementById('challenges').style.textAlign = "center";
   document.getElementById('challenges').style.paddingTop = "80px";
  
 
       
       }
   
   
   