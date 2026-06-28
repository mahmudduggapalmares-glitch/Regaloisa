// Cambiar de pestañas suavemente
function openTab(evt, tabName) {
    const tabContent = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabContent.length; i++) {
        tabContent[i].classList.remove("active");
    }

    const tabLinks = document.getElementsByClassName("tab-btn");
    for (let i = 0; i < tabLinks.length; i++) {
        tabLinks[i].classList.remove("active");
    }

    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
}

// Generador de destellos de polvo estelar sutil
function lanzarDestellos() {
    const status = document.getElementById("love-status");
    status.innerHTML = "El espacio se llena de pequeños destellos para ti...";
    
    for (let i = 0; i < 20; i++) {
        let spark = document.createElement("div");
        
        // Estilo de pequeña partícula de luz
        spark.style.position = "fixed";
        spark.style.left = Math.random() * 100 + "vw";
        spark.style.top = "100vh";
        
        // Tamaños muy pequeños para que parezca polvo estelar
        const size = Math.random() * 3 + 2 + "px";
        spark.style.width = size;
        spark.style.height = size;
        spark.style.borderRadius = "50%";
        
        // Colores suaves (blanco dorado o plateado sutil)
        const colors = ["rgba(255,255,255,0.6)", "rgba(255,244,180,0.5)", "rgba(220,230,255,0.4)"];
        spark.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        spark.style.boxShadow = "0 0 8px " + spark.style.backgroundColor;
        
        // Animación suave
        spark.style.animation = `floatStardust ${Math.random() * 2 + 3}s linear forwards`;
        spark.style.zIndex = "100";
        
        document.body.appendChild(spark);
        
        // Eliminar del código al terminar
        setTimeout(() => { spark.remove(); }, 5000);
    }
}

// Inyección de la animación CSS para el polvo estelar
const style = document.createElement('style');
style.innerHTML = `
@keyframes floatStardust {
    0% {
        transform: translateY(0) scale(1);
        opacity: 0;
    }
    10% {
        opacity: 1;
    }
    90% {
        opacity: 0.8;
    }
    100% {
        transform: translateY(-105vh) translateX(${Math.random() * 40 - 20}px);
        opacity: 0;
    }
}`;
document.head.appendChild(style);

