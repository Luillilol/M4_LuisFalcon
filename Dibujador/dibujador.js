window.addEventListener('load', ()=>{
    let boton = document.getElementById("dibujarBoton");
    boton.addEventListener("click", ()=>{
        function color(color1, color2){
            if(tipo_degradado.value === "solido"){
                ctx.fillStyle = color1;
                ctx.fill();
            }
            else if(tipo_degradado.value === "circular"){
                let radial = ctx.createRadialGradient(420, 300, 1, 400, 300, 300);
                radial.addColorStop(0, color1);
                radial.addColorStop(1, color2);
                ctx.fillStyle = radial;
                ctx.fill();
            }else if(tipo_degradado.value === "lineal"){
                let lineal = ctx.createLinearGradient(350, 250, 350, 500);
                lineal.addColorStop(0, color1);
                lineal.addColorStop(1, color2);
                ctx.fillStyle = lineal;
                ctx.fill();
            }                
        }
        let canvas = document.getElementById("canvas");
        let ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, 600, 600);
        let color_fondo = document.getElementById("color");
        console.log(color_fondo.value);
        let color_fondo2 = document.getElementById("color2");
        console.log(color_fondo2.value);
        let tipo_degradado = document.getElementById("tipoDeFondo");
        console.log(tipo_degradado.value);
        let forma = document.getElementById("tipo_figura");
        console.log(forma.value);
        if(tipo_degradado.value === "solido"){

            const text_color = document.getElementById("text_color2");
            const input_color = document.getElementById("color2");
            input_color.style.display = "none";
            text_color.style.display = "none";
        }
        if(tipo_degradado.value === "lineal" || tipo_degradado.value === "circular"){
           console.log("hola");
            const text_color = document.getElementById("text_color2");
            const input_color = document.getElementById("color2");
            input_color.style.display = "block";
            text_color.style.display = "block";
        }

        if(forma.value === "cruz"){
            ctx.beginPath();
                ctx.rect(350, 200, 100, 300);
                ctx.rect(250, 300, 300, 100);
                color(color_fondo.value, color_fondo2.value);

            ctx.closePath();
        }else if(forma.value === "mickey"){
            ctx.beginPath();
                ctx.arc(400, 400, 150, 0, Math.PI*2);
                ctx.arc(300, 280, 100, 0, Math.PI*2);
                ctx.arc(500, 280, 100, 0, Math.PI*2);
                color(color_fondo.value, color_fondo2.value);
            ctx.closePath();
        }else if(forma.value === "estrella"){
            ctx.beginPath();
                ctx.moveTo(200, 300);
                ctx.lineTo(350, 300);
                ctx.lineTo(400, 150);
                ctx.lineTo(450, 300);
                ctx.lineTo(600, 300);
                ctx.lineTo(500, 400);
                ctx.lineTo(550, 550);
                ctx.lineTo(400, 450);
                ctx.lineTo(250, 550);
                ctx.lineTo(300, 400);
                ctx.lineTo(200, 300);
                color(color_fondo.value, color_fondo2.value);
            ctx.closePath();
        }
    });
});
 