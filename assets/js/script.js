var support = [
    
    'Une soucoupe volante atterrit' ,
   'Une chercheuse met au point une potion miracle' ,
   'De curieux personnages fondent une fraternite' ,
   'Un enfant se decouvre de curieux pouvoirs...' ,
   'Un moine se reconvertit en trader a la Bourse' ,
   'Une femme fait un voyage temporel contre son gre' ,
   'Des habitants decouvrent un etrange objet' ,
   'Une medium devient milliardaire' ,
   'Un ecrivain vit reellement ce qu\'il ecrit' ,
   'Une cosmonaute se perd' ,
   'Une creature s\'echappe' ,
   'Un robot invente un Art unique' ,
   'Une personne s\'eveille apres un long moment' , 
   'Un nettoyeur est charge de nettoyer de droles de choses' ,
   'Un individu se trouve coince dans un curieux appareil' ,
   'Des prisonnieres sont victimes d\'experiences' ,
   'Une vieille femme decouvre un secret' ,
   'Un homme a tout faire arrive a resoudre des equations indechiffrables' ,
   'Une romanciere ecrit une nouvelle qui prend vie' ,  
   'Une vampire choisit de devenir vegetarienne' ,
   'Des historien.enne.s s\'inventent une machine a explorer le temps' ,
   'Un soldat perd ses freres d\'armes' ,
   'Il.elle se reveille amnesique' ,
   'Un vieil homme atteint de mutisme est proprietaire d\'un perroquet particulierement bavard' ,
   'Un chat doue de parole fuit ses maitres' ,
   'Une femme, pourtant vierge, tombe enceinte' ,
   'Les vegetaux deviennent les maitres du monde' ,
   'Une geek decouvre un nouveau jeu tres immersif' ,
   'Apres un choc psychologique, une epouse voit a travers les yeux de son mari' ,
   'Deux personnes que tout oppose tombent eperdument amoureuses' ,
   'Un athlete devient insensible a la douleur' ,
   'Un avocat defend les droits d\'une mineure accusee de meurtre' ,
   'Une femme pouvant influer sur les sentiments amoureux d\'autrui' ,
   'Un virus declenche des combustions spontannees chez les contamine.e.s' ,
   'Un.e enfant decouvre un labyrinthe magique' ,    
       
     
        
   ]
   
   
   var theme = [
       
    ' durant les annees 80' ,
   ' dans un bunker des annees 30/40' ,
   ' pendant un discours presidentiel' ,
   ' lors d\'une terrible explosion' ,
   ' pendant les annees 50' ,
   ' en 3050' ,
   ' lors d\'une ceremonie' ,
   ' pendant un mariage ou une celebration d\'union' ,
   ' lors d\'un jeu' ,
   ' durant un incendie' ,
   ' apres une terrible tempete' ,
   ' pendant un match de cricket' ,
   ' durant un temps fige' ,
   ' lors d\'une simulation d\'attentat' ,
   ' pendant le tournage d\'un film' ,
   ' lors d\'un spectacle dans un parc aquatique' ,
   ' au 19 eme siecle' ,
   ' au XVI eme siecle' ,
   ' au 50 eme millenaire' ,
   ' en l\'an mil' ,
   ' a l\'epoque Victorienne (1837-1901)' ,
   ' pendant une invasion extraterrestre' ,
   ' dans une dimension ou le temps est fluctuant' ,
   ' a l\'ere des conquistadors' ,
   ' en 1929, apres le crash boursier' ,
   ' dans un futur proche' ,
   ' au coeur d\'une boucle temporelle (journee perpetuelle)' ,
   ' au cours de la Guerre Froide' ,
   ' le 12 septembre 2001' ,
   ' dans les annees 1990' ,
   ' lors d\'un week-end tres ensoleille' ,
   ' pendant un hiver glacial' ,
   ' au lever du jour' ,
   ' lors du 1er Empire (1804-1815)' ,
   ' pendant l\'Antiquite' ,   
     
        
   ]
   
   
   var temps = [
       
    ', au Mexique' ,
   ', en Australie' ,
   ', pres d\'un bois' ,
   ', proche d\'une usine' ,
   ', dans un vieux manoir' ,
   ', dans une salle de cinema' ,
   ', a un concert de jazz' ,
   ', dans un champ de betteraves' ,
   ', sur une colline' ,
   ', en Egypte' ,
   ', dans un temple' ,
   ', au milieu de nulle part' ,
   ', sur un bateau' ,
   ', dans un sous-sol' ,
   ', dans un sous-marin' ,
   ', en plein desert' ,
   ', dans un endroit hyper glace' ,
   ', a un endroit de l\'Univers' ,
   ', sur une exoplanete d\'une galaxie lointaine' ,
   ', dans la campagne japonaise' ,
   ', sur le continent antarctique' ,
   ', au sein d\'un vaisseau interstellaire' ,
   ', dans un hopital psychiatrique isole' ,
   ', sous terre (surface radioactive)' ,
   ', dans un Londres uchronique' ,
   ', dans des ruines azteques' ,
   ', au coeur d\'une ville cotiere en Galice' ,
   ', dans un hotel pretendument hante' ,
   ', dans une foret en Europe' ,
   ', dans une cite subaquatique' ,
   ', a bord de l\'Orient Express' ,
   ', au cimetiere du Pere Lachaise' ,
   ', dans les Highlands ecossais' ,
   ', dans une communaute fermee en Californie' ,
   ', au coeur d\'un vignoble bourguignon' ,    
     
        
   ]
   
   
   
   
   function newChallenge() {
   var randomNumber = Math.floor(Math.random() * (support.length));
   var randomNumber2 = Math.floor(Math.random() * (theme.length));
   var randomNumber3 = Math.floor(Math.random() * (temps.length));    
   
   
   
   document.getElementById('challenges').innerHTML = support[randomNumber] + theme[randomNumber2] + temps[randomNumber3];
       
       }
   
   
   