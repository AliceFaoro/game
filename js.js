function gioca() {
    var numRandom1 = (Math.random() * 3);
    num1 = Math.floor(numRandom1);
    var carta1 = document.getElementById("carta1");
    carta1.innerHTML = num1;
    var numRandom2 = (Math.random() * 3);
    num2 = Math.floor(numRandom2);
    var carta2 = document.getElementById("carta2");
    carta2.innerHTML = num2;
    var numRandom3 = (Math.random() * 3);
    num3 = Math.floor(numRandom3);
    var carta3 = document.getElementById("carta3");
    carta3.innerHTML = num3;
    carta1.style.fontSize = "29vh";
    carta2.style.fontSize = "29vh";
    carta3.style.fontSize = "29vh";

    var screenWidth = window.innerWidth;
    var fontSize = (screenWidth < 700) ? "10vh" : "29vh";
    carta1.style.fontSize = fontSize;
    carta2.style.fontSize = fontSize;
    carta3.style.fontSize = fontSize;

    carta1.style.textAlign = "center";
    carta2.style.textAlign = "center";
    carta3.style.textAlign = "center";
    var gioca2 = document.getElementById("gioca");
    gioca2.style.display = "none";
    if (num1 === num2 && num1 === num3) {
        vittoria = true;
        var vite = document.getElementById("vite");
        vite.style.display = "none";
        setTimeout(function () {
            var main = document.getElementById("contenitore");
            main.style.display = "none";
            var risultato = document.getElementById("result");
            risultato.innerHTML = '<video autoplay muted loop id="myVideo"> <source src="win.mp4" type="video/mp4" autoplay></video>';
        
            var screenWidth = window.innerWidth;
            var width = (screenWidth < 700) ? "100vw" : "50vw";
            risultato.style.width = width;
            risultato.style.marginTop = "40vh";
            return;
        }, 1300);
        setTimeout(function () {
            document.getElementById("result").style.display="none";
            var rinizia = document.getElementById("restart2");
            rinizia.style.display ="block";
            rinizia.style.margin = "0 auto";
            rinizia.style.marginTop = "15vh";
        
            var bottonenew = document.createElement("button");
            bottonenew.innerHTML = "Restart";
            var rest = document.getElementById("restart");
            rest.style.display="block";
            rest.appendChild(bottonenew);
            bottonenew.style.display = "block";
            bottonenew.style.fontSize = "30px";
            bottonenew.style.backgroundColor = "black";
            bottonenew.style.color = "#99ebff"
            bottonenew.style.border = "2px solid #99ebff";
            bottonenew.style.borderRadius = "5px"; 
            bottonenew.style.marginLeft="45vw";
            bottonenew.style.marginTop="55vh";
            bottonenew.addEventListener("click", function () {
                window.location.reload(false);
            });

        }, 8000);
    }
}

var s = 1;
function contatore() {
    s++;
    var vittoria = false;
    if (s <= 11 && vittoria == false) {
        var num1 = Math.floor(Math.random() * 3);
        var carta1 = document.getElementById("carta1");
        carta1.innerHTML = num1;
        var num2 = Math.floor(Math.random() * 3);
        var carta2 = document.getElementById("carta2");
        carta2.innerHTML = num2;
        var num3 = Math.floor(Math.random() * 3);
        var carta3 = document.getElementById("carta3");
        carta3.innerHTML = num3;
        carta1.style.fontSize = "29vh";
        carta2.style.fontSize = "29vh";
        carta3.style.fontSize = "29vh";

        var screenWidth = window.innerWidth;
        var fontSize = (screenWidth < 700) ? "10vh" : "29vh";
        carta1.style.fontSize = fontSize;
        carta2.style.fontSize = fontSize;
        carta3.style.fontSize = fontSize;
    
        carta1.style.textAlign = "center";
        carta2.style.textAlign = "center";
        carta3.style.textAlign = "center";

        if (num1 === num2 && num1 === num3) {
            vittoria = true;
            var vite = document.getElementById("vite");
            vite.style.display = "none";
            setTimeout(function () {
                var main = document.getElementById("contenitore");
                main.style.display = "none";
                var risultato = document.getElementById("result");
                risultato.innerHTML = '<video autoplay muted loop id="myVideo"> <source src="win.mp4" type="video/mp4" autoplay></video>';
                risultato.style.marginTop = "40vh";

                return;
            }, 1100);
            setTimeout(function () {
                document.getElementById("result").style.display="none";
                var rinizia = document.getElementById("restart2");
                rinizia.style.display ="block";
                rinizia.style.margin = "0 auto";
                rinizia.style.marginTop = "15vh";
                var bottonenew = document.createElement("button");
                bottonenew.innerHTML = "Restart";
                var rest = document.getElementById("restart");
                rest.style.display="block";
                rest.appendChild(bottonenew);
                bottonenew.style.display = "block";
                bottonenew.style.fontSize = "30px";
                bottonenew.style.backgroundColor = "black";
                bottonenew.style.color = "#99ebff"
                bottonenew.style.border = "2px solid #99ebff";
                bottonenew.style.borderRadius = "5px";
                bottonenew.style.marginLeft="45vw";
                bottonenew.style.marginTop="55vh";
                bottonenew.addEventListener("click", function () {
                    window.location.reload(false);
                });
    
            }, 8000);
        }

        if (s === 11) {
            var vite = document.getElementById("vite");
            vite.style.display = "none";
            setTimeout(function () {
                var main = document.getElementById("contenitore");
                main.style.display = "none";
                var risultato = document.getElementById("result");
                risultato.innerHTML = '<video autoplay muted loop id="myVideo"> <source src="loose.mp4" type="video/mp4" autoplay></video>';
                risultato.style.height = "80vh";
                return;
            }, 1100);
            setTimeout(function () {
                document.getElementById("result").style.display="none";
                var rinizia = document.getElementById("restart2");
                rinizia.style.display ="block";
                rinizia.style.margin = "0 auto";
                rinizia.style.marginTop = "15vh";
                var bottonenew = document.createElement("button");
                bottonenew.innerHTML = "Restart";
                var rest = document.getElementById("restart");
                rest.style.display="block";
                rest.appendChild(bottonenew);
                bottonenew.style.display = "block";
                bottonenew.style.fontSize = "30px";
                bottonenew.style.backgroundColor = "black";
                bottonenew.style.color = "#99ebff"
                bottonenew.style.border = "2px solid #99ebff";
                bottonenew.style.borderRadius = "5px";
                bottonenew.style.marginLeft="45vw";
                bottonenew.style.marginTop="55vh";
                bottonenew.addEventListener("click", function () {
                    window.location.reload(false);
                });
    
            }, 8000);
        }

    }

}















