// script.js
const palabrasIzquierda = ["Independencia", "Responsabilidad", "Conocimiento", "Transformación", "Sabiduría", "Creatividad", "Compromiso", "Innovación", "Perseverancia", "Iniciativa", "Integridad", "Excelencia", "Sustentabilidad", "Equidad", "Resiliencia", "Empatía", "Autenticidad", "Adaptabilidad", "Optimismo", "Diversidad", "Compasión", "Cortesía", "Solidaridad", "Dedicación", "Honestidad", "Paciencia", "Confianza", "Inspiración", "Colaboración", "Flexibilidad", "Puntualidad", "Reciprocidad", "Generosidad", "Tolerancia", "Cohesión", "Reconocimiento", "Valentía", "Comprometido", "Tolerante", "Diligencia", "Consistencia", "Organización", "Respeto", "Iniciador", "Aprendizaje", "Optimista", "Valiente", "Determinado", "Visionario", "Desarrollador", "Creativo", "Respetuoso", "Compasivo", "Prudencia", "Colaborador", "Meticuloso", "Proactividad", "Perseverante", "Curiosidad", "Entusiasmo", "Responsable", "Intuición", "Productividad", "Solidario", "Reflexivo", "Analítico", "Empoderamiento", "Motivación", "Entendimiento", "Paciente", "Estratégico", "Minucioso", "Carácter", "Esperanza", "Madurez", "Observador", "Conciencia", "Equilibrio", "Justicia", "Progresista", "Humanidad", "Educación", "Autodisciplina", "Autoestima", "Reflexión", "Desempeño", "Fiabilidad", "Sinceridad", "Estrategia", "Facilitador", "Resolución", "Simpatía", "Ambición", "Comunicador", "Sociabilidad", "Amabilidad", "Profesionalismo", "Comprometido", "Cuidado", "Disciplina", "Capacitado", "Disposición", "Consideración", "Iniciador", "Honradez", "Valentía"
];
const palabrasCentro = ["Percepción", "Aventura", "Dedicación", "Crecimiento", "Estabilidad", "Responsabilidad", "Escucha", "Empoderar", "Carácter", "Valoración", "Sabiduría", "Reflexión", "Claridad", "Transformación", "Conexión", "Intuición", "Sostenibilidad", "Desarrollo", "Fortaleza", "Acción", "Unidad", "Disciplina", "Confianza", "Liderazgo", "Adaptación", "Gratitud", "Tarea", "Compromiso", "Esfuerzo", "Éxito", "Progreso", "Calidez", "Autenticidad", "Innovación", "Poder", "Colaboración", "Motivación", "Apoyo", "Desafío", "Optimismo", "Responsable", "Creación", "Solución", "Equilibrio", "Objetivo", "Solidez", "Competencia", "Poderoso", "Acierto", "Visión", "Conocimiento", "Posibilidad", "Cultura", "Fortalecer", "Satisfacción", "Convivencia", "Rendimiento", "Bienestar", "Confianza", "Armonía", "Gracia", "Disciplina", "Refuerzo", "Eficiencia", "Empatía", "Audaz", "Comprometido", "Impacto", "Valioso", "Estabilidad", "Cualidad", "Esfuerzo", "Logro", "Apreciación", "Responsable", "Tendencia", "Interacción", "Apreciación", "Ponderación", "Seguridad", "Ética", "Resiliencia", "Lealtad", "Recompensa", "Desempeño", "Aliento", "Éxito", "Firmeza", "Paciencia", "Determinación", "Tarea", "Dedicación", "Aprovechar", "Éxito", "Positivo", "Avance", "Intensidad", "Concentración", "Atención", "Emprendimiento", "Recursos", "Claridad", "Dirección", "Cercanía", "Persistencia", "Cuidado", "Éxito", "Estrategia", "Actitud"
];
const palabrasDerecha = ["Sabiduría", "Adaptación", "Solidaridad", "Compromiso", "Autonomía", "Generosidad", "Innovación", "Inspiración", "Persistencia", "Equidad", "Creatividad", "Fortaleza", "Honestidad", "Valoración", "Empatía", "Optimismo", "Cuidado", "Dedicación", "Claridad", "Progreso", "Transformación", "Responsabilidad", "Tolerancia", "Éxito", "Colaboración", "Perseverancia", "Autodisciplina", "Visión", "Desempeño", "Colaborativo", "Conocimiento", "Integridad", "Reinversión", "Confianza", "Enfoque", "Compasión", "Generosidad", "Proactividad", "Valor", "Estrategia", "Colaboración", "Apreciación", "Innovador", "Auténtico", "Mente", "Consciencia", "Consistencia", "Fortaleza", "Poder", "Transformación", "Unidad", "Comprometido", "Paciencia", "Cohesión", "Motivación", "Desarrollo", "Excelencia", "Sostenibilidad", "Estabilidad", "Colaborativo", "Convivencia", "Escucha", "Estímulo", "Entusiasmo", "Concentración", "Tendencia", "Relevancia", "Disciplina", "Seguridad", "Poderoso", "Autenticidad", "Carácter", "Rendimiento", "Autonomía", "Cualidad", "Clarificación", "Ponderación", "Resiliencia", "Rendimiento", "Cuidado", "Lealtad", "Estabilidad", "Recompensa", "Desempeño", "Colaborativo", "Armonía", "Altruismo", "Rendimiento", "Enfoque", "Cercanía", "Relevancia", "Excelencia", "Sostenibilidad", "Posibilidad", "Acierto", "Iniciativa", "Solidez", "Creatividad", "Ponderación", "Logro", "Impacto", "Altruismo", "Trabajo", "Valioso", "Actitud", "Disciplina", "Confianza", "Motivación", "Comunidad"
];

let tiempoRestante = 180; // 3 minutos en segundos
let intervalId;
let timerId;

document.getElementById('start-btn').addEventListener('click', iniciarEjercicio);

function iniciarEjercicio() {
    // Oculta las instrucciones y muestra la pantalla de ejercicio
    document.getElementById("instructions").classList.add("hidden");
    document.getElementById("exercise-screen").classList.remove("hidden");

    const velocidad = parseInt(document.getElementById('speed').value);
    
    document.getElementById("end-message").classList.add("hidden");
    document.getElementById("timer").classList.remove("hidden");

    iniciarTemporizador();
    mostrarPalabrasAleatorias();

    intervalId = setInterval(mostrarPalabrasAleatorias, velocidad);
}

function mostrarPalabrasAleatorias() {
    const palabraIzquierda = palabrasIzquierda[Math.floor(Math.random() * palabrasIzquierda.length)];
    const palabraCentro = palabrasCentro[Math.floor(Math.random() * palabrasCentro.length)];
    const palabraDerecha = palabrasDerecha[Math.floor(Math.random() * palabrasDerecha.length)];

    document.getElementById("left-word").textContent = palabraIzquierda;
    document.getElementById("center-word").textContent = palabraCentro;
    document.getElementById("right-word").textContent = palabraDerecha;
}

function iniciarTemporizador() {

    actualizarTiempoRestante();

    timerId = setInterval(() => {
        tiempoRestante--;
        actualizarTiempoRestante();

        if (tiempoRestante <= 0) {
            finalizarEjercicio();
        }
    }, 1000);
}

function actualizarTiempoRestante() {
    const minutos = Math.floor(tiempoRestante / 60).toString().padStart(2, '0');
    const segundos = (tiempoRestante % 60).toString().padStart(2, '0');
    document.getElementById("time-remaining").textContent = `${minutos}:${segundos}`;
}

function finalizarEjercicio() {
    clearInterval(intervalId);
    clearInterval(timerId);
    alert("¡El ejercicio ha finalizado!")
    document.getElementById("end-message").classList.remove("hidden");
    document.getElementById("word-display").classList.add("hidden");
}
