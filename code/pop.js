  var PopBol = new Array(4); //Js, HTML,CSS,PHP
  var OldStraal = new Array(4);
  var DeltaR    = new Array(4);
  var Ontwikkeldoel = new Array(4);
  var Anr;
  var IntervalStarted; 
  var AniReady;
  var x;  
  var radius;
  var Vergroting; 
  var BolSelectednr;
  var NiveauSelected;
 
  for (var i = 0; i < 4; i++) {
    PopBol[i] = new Array(8); //Naam, Beginniveau, Doelniveau, Bolkleur, TekstKleur, Xpos, Ypos, Straal
    Ontwikkeldoel[i] =new Array(7); //Naam, beginniveau, eindniveau, prioriteit, Begindatum, Einddatum, Opmerkingen   
  }  

  //*******************************************************************************************
  function VulOntwikkeldoelen() {    
    //JavaScript
    Ontwikkeldoel[0][0] = "JavaScript"; //naam
    Ontwikkeldoel[0][1] = "6"; //beginniveau 
    Ontwikkeldoel[0][2] = "9"; //eindniveau
    Ontwikkeldoel[0][3] = "medium"; //prioriteit
    Ontwikkeldoel[0][4] = "15-1-2018"; //Begindatum
    Ontwikkeldoel[0][5] = "28-2-2018"; //Einddatum
    Ontwikkeldoel[0][6] = "Beheers ik al aardig, maar kan vast nog een stuk beter."; //Opmerkingen 
    //CSS
    Ontwikkeldoel[1][0] = "CSS"; //naam
    Ontwikkeldoel[1][1] = "4"; //beginniveau 
    Ontwikkeldoel[1][2] = "7"; //eindniveau
    Ontwikkeldoel[1][3] = "medium"; //prioriteit
    Ontwikkeldoel[1][4] = "1-2-2018"; //Begindatum
    Ontwikkeldoel[1][5] = "31-3-2018"; //Einddatum
    Ontwikkeldoel[1][6] = "Vind ik nog lastig, moet dus beter. Ik ben meer programmeur dan designer dus een 7 als eindniveau is ok."; //Opmerkingen
    //HTML
    Ontwikkeldoel[2][0] = "HTML"; //naam
    Ontwikkeldoel[2][1] = "3"; //beginniveau 
    Ontwikkeldoel[2][2] = "7"; //eindniveau
    Ontwikkeldoel[2][3] = "medium"; //prioriteit
    Ontwikkeldoel[2][4] = "1-2-2018"; //Begindatum
    Ontwikkeldoel[2][5] = "31-3-2018"; //Einddatum
    Ontwikkeldoel[2][6] = "Ook hier is nog veel ruimte voor verbetering"; //Opmerkingen
    //PHP
    Ontwikkeldoel[3][0] = "PHP"; //naam
    Ontwikkeldoel[3][1] = "2"; //beginniveau 
    Ontwikkeldoel[3][2] = "8"; //eindniveau
    Ontwikkeldoel[3][3] = "hoog"; //prioriteit
    Ontwikkeldoel[3][4] = "15-1-2018"; //Begindatum
    Ontwikkeldoel[3][5] = "30-4-2018"; //Einddatum
    Ontwikkeldoel[3][6] = "Dit ken ik vrijwel alleen in theorie. In praktijk nog weinig mee gedaan."; 
    Ontwikkeldoel[3][6]+= " Essentieel voor echte webapplictie, daarom hoge prioriteit"; //Opmerkingen   
  } 

  //*******************************************************************************************
  function IniBollen(canvas) {
    //namen
    PopBol[0][0] = "JS";
    PopBol[1][0] = "CSS";
    PopBol[2][0] = "HTML";
    PopBol[3][0] = "PHP";
    //beginniveau
    PopBol[0][1] = 6;
    PopBol[1][1] = 4;
    PopBol[2][1] = 3;
    PopBol[3][1] = 2;
    //streefniveau
    PopBol[0][2] = 9;
    PopBol[1][2] = 7;
    PopBol[2][2] = 7;
    PopBol[3][2] = 8;
    //bolkleur    
    PopBol[0][3] = "#EEDD22";
    PopBol[1][3] = "#3333FF";
    PopBol[2][3] = "#FF6600";
    PopBol[3][3] = "#2222BB";
    //tekstkleur
    PopBol[0][4] = "#000000";
    PopBol[1][4] = "#FFFFFF";
    PopBol[2][4] = "#FFFFFF";
    PopBol[3][4] = "#000000";
    
    //Xpositie
    PopBol[0][5] = 100; 
    PopBol[1][5] = 300;
    PopBol[2][5] = 500;
    PopBol[3][5] = 700;

    //Ypositie
    PopBol[0][6] = 100;
    PopBol[1][6] = 100;
    PopBol[2][6] = 100;
    PopBol[3][6] = 100;

    //Straal
    PopBol[0][7] = PopBol[0][1] * Vergroting;
    PopBol[1][7] = PopBol[1][1] * Vergroting;
    PopBol[2][7] = PopBol[2][1] * Vergroting;
    PopBol[3][7] = PopBol[3][1] * Vergroting;  
  }
    

  //*******************************************************************************************
  function LaadCanvas() {                
    canvas = document.getElementById("myCanvas");  
    rect = canvas.getBoundingClientRect();    

    Vergroting = 10;
    BolSelectednr = -1;     
    NiveauSelected = 1; //1: beginniveau 2: streefniveau  
    AniReady = true;
    IntervalStarted = false;
    IniBollen(canvas);
    VulOntwikkeldoelen();
    VulOntwikkeldoelTabel(0);
    
    TekenBollen();
    
  }

  //******************************************************************************************
  function TekenBollen() {
    canvas = document.getElementById("myCanvas");  
    var ctx = canvas.getContext("2d");         

    ctx.fillStyle =  "#006666"; //"#000000"; 
    ctx.fillRect(0,0,canvas.width,canvas.height);

    for (var b = 0; b< 4; b++) {
      ctx.beginPath();
      ctx.fillStyle = PopBol[b][3] ;          
      radius = PopBol[b][7];
      ctx.arc(PopBol[b][5], PopBol[b][6], radius, 0, 2*Math.PI);          
      ctx.fill(); 
      ctx.beginPath();
      ctx.fillStyle = PopBol[b][4];
      ctx.font = "bold " + (radius /2) + "px arial";   
      ctx.textBaseline="middle";
      ctx.textAlign="center";      
      ctx.fillText(PopBol[b][0], PopBol[b][5],PopBol[b][6]);                
    }     
  }  


  //******************************************************************************************
  function SelectBallon(e) {
    canvas = document.getElementById("myCanvas");  
    var ctx = canvas.getContext("2d"); 
    rect = canvas.getBoundingClientRect();

    var selectiebol;
    
    var Xpos = e.clientX - rect.left;
    var Ypos = e.clientY - rect.top;    

    if ((IntervalStarted) && (AniReady)) {StopInterval();}
    selectiebol = BolKlik(Xpos, Ypos);
    
    if (selectiebol!= -1) { //er is een bol geselecteerd          
      if (BolSelectednr != selectiebol) {          
        ctx.beginPath();
        ctx.strokeStyle = "#FFFFFF";          
        var radius = PopBol[selectiebol][7]; 
        ctx.lineWidth = 5;      
        ctx.arc(PopBol[selectiebol][5], PopBol[selectiebol][6], radius, 0, 2*Math.PI);          
        ctx.stroke();       
        VulOntwikkeldoelTabel(selectiebol);
      }
      if (BolSelectednr != -1) {        
        ctx.beginPath();
        ctx.strokeStyle = "#006666"; //"#000000";          
        var radius = PopBol[BolSelectednr][7]; 
        ctx.lineWidth = 7;      
        ctx.arc(PopBol[BolSelectednr][5], PopBol[BolSelectednr][6], radius+1, 0, 2*Math.PI);          
        ctx.stroke();   
      }    
      if (BolSelectednr == selectiebol) {
        BolSelectednr = -1;
      }
      else {
        BolSelectednr = selectiebol;
      }
    }
  }

  //******************************************************************************************
  function VulOntwikkeldoelTabel(Bolnr) {
    var tekst;
    var Doelid;

    for (var i = 0; i<=6;i++) {
      Doelid = "b" + (i + 1); 
      tekst = document.getElementById(Doelid);  
      tekst.innerHTML = Ontwikkeldoel[Bolnr][i];               
    }
  }

  //******************************************************************************************
  function BolKlik(Xpos, Ypos) {
    var Bolklik = false; 
    var bol;
    var a,b,c; //pytagoras   
    
    //bepaal of binnen bol is geklikt
    if (!AniReady) {Return -1;}   
    bol= 0;
    while ((Bolklik == false) && (bol<=3)) {       
       a = Math.abs(Xpos - PopBol[bol][5]);    
       b = Math.abs(Ypos - PopBol[bol][6]); 
       c = Math.sqrt((a*a) + (b*b));
       if (c < PopBol[bol][7]) {
         return bol;
       }
       if (!Bolklik) {bol++;}  
     }      
     return -1;  
  }

  //******************************************************************************************
  function StopInterval() {  
    clearInterval(TekenInterval); 
  }

  //******************************************************************************************
  function NiveauVeranderd(Level) {
     canvas = document.getElementById("myCanvas");  
     var ctx = canvas.getContext("2d"); 

     NiveauSelected = parseInt(Level);
         
     for (var b = 0; b< 4; b++) { 
       OldStraal[b] = PopBol[b][7];
       PopBol[b][7] = PopBol[b][NiveauSelected] *Vergroting;
     } 

     for (var b = 0; b< 4; b++) {      
       DeltaR[b]= (PopBol[b][7] - OldStraal[b]) / 50; //50 stappen
     }

     Anr = 0; 
     AniReady = false;
     IntervalStarted = true;
     TekenInterval = setInterval(function(){BolGroei(canvas, ctx);}, 25);    
  } 
       
  //******************************************************************************************
  function BolGroei(canvas,ctx) {  //voor de animatie
    if (!AniReady) {
    ctx.fillStyle = "#006666"; //"#000000";
    ctx.fillRect(0,0,canvas.width,canvas.height);  
    
    
    for (var b = 0; b< 4; b++) {
      ctx.beginPath();
      ctx.fillStyle = PopBol[b][3] ;          
      radius = Math.floor(OldStraal[b] + DeltaR[b] * Anr);            
      ctx.arc(PopBol[b][5], PopBol[b][6], radius, 0, 2*Math.PI);          
      ctx.fill(); 
      ctx.beginPath();
      ctx.fillStyle = PopBol[b][4];
      ctx.font = "bold " + (radius /2) + "px arial";   
      ctx.textBaseline="middle";
      ctx.textAlign="center";      
      ctx.fillText(PopBol[b][0], PopBol[b][5],PopBol[b][6]);                
    }        
    }
    if (Anr >= 50) {clearInterval(TekenInterval); AniReady = true;}      
    else (Anr++);
  }