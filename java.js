var slova = ["мозги", "ауф", "игра", "слово"];
var slovo = [];
var n = 0;
var kolvo=0; 
var s="";
var permenn
function start() {

    //n=0-3
    n = Math.floor(Math.random() * 4);
    s = slova[n];
     kolvo = s.length;
    //сначала надо очистить все клеточки от подчеркивания
    //и убрать все буквы
        for (i = 0; i < 8; i++) {

        idtd = document.getElementById("buk" + i);
        idtd.className = "net";
        idtd = document.getElementById("buk" + i);
        idtd.innerHTML="";

    }
    //режем слово на буквы
    for (var i = 0; i < kolvo; i++) {
        slovo[i] = s.slice(i, i + 1);
    }
    //делаем подчеркивания
    for (i = 0; i < kolvo; i++) {
        idtd = document.getElementById("buk" + i);
        idtd.className = "downborder";
    }
}
document.addEventListener("keydown", move);
function move(event) {
   
    var b = event.key;
    
    //здесь бежим по всем буквам
    for (i = 0; i <=kolvo; i++) {;
          //если нажатая совпала с правильной буквой, ее показываем на экран
        if (String(b).toLocaleUpperCase() == slovo[i].toLocaleUpperCase()) { 
          
             idImg = document.getElementById("buk" + i);
            idImg.innerHTML = String(b).toUpperCase();
         permenn++;
         if(peremenn){
              

          }
          

            
        }
    }

}

