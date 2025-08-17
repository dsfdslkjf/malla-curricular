// Espera a que todo el contenido HTML esté cargado antes de ejecutar el script
document.addEventListener('DOMContentLoaded', () => {

    // --- BASE DE DATOS DE LOS RAMOS ---
    // Aquí definimos todos los ramos de la carrera en un formato estructurado.
    // id: un identificador único y corto para cada ramo.
    // nombre: el nombre completo que se mostrará.
    // semestre: el número del semestre al que pertenece.
    // ambito: el tipo de ramo para asignarle un color.
    // requisitos: un array con los 'id' de los ramos que se deben aprobar antes.
    const ramos = [
        // Semestre 1
        { id: 'hp1', nombre: 'Habilidades Profesionales I', semestre: 1, ambito: 'general', requisitos: [] },
        { id: 'ada', nombre: 'Introducción al Análisis de Datos', semestre: 1, ambito: 'general', requisitos: [] },
        { id: 'fbp', nombre: 'Fundamentos Biológicos de la Psicología', semestre: 1, ambito: 'disciplinario', requisitos: [] },
        { id: 'ip', nombre: 'Introducción a la Psicología', semestre: 1, ambito: 'disciplinario', requisitos: [] },
        { id: 'fecs', nombre: 'Fundamentos Epistemológicos de las CC.SS.', semestre: 1, ambito: 'disciplinario', requisitos: [] },
        { id: 'fsp', nombre: 'Fundamentos Sociales de la Psicología', semestre: 1, ambito: 'disciplinario', requisitos: [] },

        // Semestre 2
        { id: 'neuro', nombre: 'Neurofisiología', semestre: 2, ambito: 'disciplinario', requisitos: ['fbp'] },
        { id: 'pp', nombre: 'Procesos Psicológicos', semestre: 2, ambito: 'disciplinario', requisitos: ['ip'] },
        { id: 'fcp', nombre: 'Fundamentos Científicos de la Psicología', semestre: 2, ambito: 'disciplinario', requisitos: [] },
        { id: 'ts', nombre: 'Teorías Sociales', semestre: 2, ambito: 'disciplinario', requisitos: ['fsp'] },
        { id: 'ep', nombre: 'Epistemología para Psicología', semestre: 2, ambito: 'disciplinario', requisitos: ['fecs'] },
        { id: 'adai1', nombre: 'Seminario ADAI I', semestre: 2, ambito: 'practico', requisitos: ['ada'] },

        // Semestre 3
        { id: 'hp2', nombre: 'Habilidades Profesionales II', semestre: 3, ambito: 'general', requisitos: ['hp1'] },
        { id: 'pd1', nombre: 'Psicología del Desarrollo I', semestre: 3, ambito: 'disciplinario', requisitos: ['pp'] },
        { id: 'psicofis', nombre: 'Psicofisiología', semestre: 3, ambito: 'disciplinario', requisitos: ['neuro'] },
        { id: 'psicosoc', nombre: 'Psicología Social', semestre: 3, ambito: 'disciplinario', requisitos: ['ts'] },
        { id: 'mis1', nombre: 'Metodología de la Investigación Social I', semestre: 3, ambito: 'disciplinario', requisitos: ['fcp'] },
        { id: 'iyp', nombre: 'Identidad y Personalidad', semestre: 3, ambito: 'disciplinario', requisitos: [] },

        // Semestre 4
        { id: 'ep1', nombre: 'Evaluación Psicológica I', semestre: 4, ambito: 'profesional', requisitos: ['pd1', 'psicofis'] },
        { id: 'pd2', nombre: 'Psicología del Desarrollo II', semestre: 4, ambito: 'disciplinario', requisitos: ['pd1'] },
        { id: 'psicopat', nombre: 'Psicopatología', semestre: 4, ambito: 'disciplinario', requisitos: ['iyp'] },
        { id: 'tp1', nombre: 'Teorías Psicológicas I', semestre: 4, ambito: 'disciplinario', requisitos: [] },
        { id: 'mis2', nombre: 'Metodología de la Investigación Social II', semestre: 4, ambito: 'disciplinario', requisitos: ['mis1'] },
        { id: 'adai2', nombre: 'Seminario ADAI II', semestre: 4, ambito: 'practico', requisitos: ['adai1'] },

        // Semestre 5
        { id: 'ep2', nombre: 'Evaluación Psicológica II', semestre: 5, ambito: 'profesional', requisitos: ['ep1'] },
        { id: 'pc', nombre: 'Psicología Comunitaria', semestre: 5, ambito: 'profesional', requisitos: ['psicosoc'] },
        { id: 'psiq', nombre: 'Psiquiatría', semestre: 5, ambito: 'disciplinario', requisitos: ['psicopat'] },
        { id: 'tp2', nombre: 'Teorías Psicológicas II', semestre: 5, ambito: 'disciplinario', requisitos: ['tp1'] },
        { id: 'ppub', nombre: 'Políticas Públicas', semestre: 5, ambito: 'disciplinario', requisitos: [] },
        { id: 'aep', nombre: 'Áreas Emergentes de la Psicología', semestre: 5, ambito: 'disciplinario', requisitos: [] },
        
        // Semestre 6
        { id: 'ep3', nombre: 'Evaluación Psicológica III', semestre: 6, ambito: 'profesional', requisitos: ['ep2'] },
        { id: 'tiis', nombre: 'Taller Integrado de Investigación Social', semestre: 6, ambito: 'profesional', requisitos: ['mis2'] },
        { id: 'psicot1', nombre: 'Psicoterapias I', semestre: 6, ambito: 'profesional', requisitos: ['tp2'] },
        { id: 'cij1', nombre: 'Clínica Infanto Juvenil I', semestre: 6, ambito: 'profesional', requisitos: ['pd2', 'psiq'] },
        { id: 'psicom', nombre: 'Psicología de la Comunicación', semestre: 6, ambito: 'disciplinario', requisitos: [] },
        { id: 'adai3', nombre: 'Seminario ADAI III', semestre: 6, ambito: 'practico', requisitos: ['adai2'] },

        // Semestre 7
        { id: 'ep4', nombre: 'Evaluación Psicológica IV', semestre: 7, ambito: 'profesional', requisitos: ['ep3'] },
        { id: 'ps1', nombre: 'Proyectos Sociales I', semestre: 7, ambito: 'profesional', requisitos: ['pc'] },
        { id: 'pe1', nombre: 'Psicología Educacional I', semestre: 7, ambito: 'profesional', requisitos: [] },
        { id: 'psicot2', nombre: 'Psicoterapias II', semestre: 7, ambito: 'profesional', requisitos: ['psicot1'] },
        { id: 'cij2', nombre: 'Clínica Infanto Juvenil II', semestre: 7, ambito: 'profesional', requisitos: ['cij1'] },
        { id: 'pt', nombre: 'Psicología del Trabajo', semestre: 7, ambito: 'profesional', requisitos: [] },

        // Semestre 8
        { id: 'po', nombre: 'Psicología Organizacional', semestre: 8, ambito: 'profesional', requisitos: ['pt'] },
        { id: 'ps2', nombre: 'Proyectos Sociales II', semestre: 8, ambito: 'profesional', requisitos: ['ps1'] },
        { id: 'pe2', nombre: 'Psicología Educacional II', semestre: 8, ambito: 'profesional', requisitos: ['pe1'] },
        { id: 'sg1', nombre: 'Seminario de Grado I', semestre: 8, ambito: 'disciplinario', requisitos: ['tiis'] },
        { id: 'adai4', nombre: 'Seminario ADAI IV', semestre: 8, ambito: 'practico', requisitos: ['adai3'] },

        // Semestre 9
        { id: 'sg2', nombre: 'Seminario de Grado II', semestre: 9, ambito: 'disciplinario', requisitos: ['sg1'] },
        { id: 'pp1', nombre: 'Práctica Profesional I', semestre: 9, ambito: 'practico', requisitos: ['ep4', 'ps2', 'pe2', 'cij2', 'po'] },
        
        // Semestre 10
        { id: 'st', nombre: 'Seminario de Título', semestre: 10, ambito: 'profesional', requisitos: ['sg2'] },
        { id: 'pp2', nombre: 'Práctica Profesional II', semestre: 10, ambito: 'practico', requisitos: ['pp1'] },
    ];

    // --- VARIABLES GLOBALES Y ELEMENTOS DEL DOM ---
    const mallaGrid = document.getElementById('malla-curricular');
    const modal = document.getElementById('modal-requisitos');
    const cerrarModalBtn = document.querySelector('.cerrar-modal');
    const listaRequisitosUl = document.getElementById('lista-requisitos');
    
    // Obtenemos los ramos aprobados desde el localStorage. Si no hay nada, empezamos con un array vacío.
    // Usamos un Set para un rendimiento más rápido al verificar si un ramo está aprobado.
    let aprobados = new Set(JSON.parse(localStorage.getItem('ramosAprobados')) || []);

    // --- FUNCIONES ---

    /**
     * Dibuja toda la malla curricular en la página.
     */
    const dibujarMalla = () => {
        mallaGrid.innerHTML = ''; // Limpiamos la malla antes de volver a dibujarla
        for (let i = 1; i <= 10; i++) {
            // Creamos una columna para cada semestre
            const semestreDiv = document.createElement('div');
            semestreDiv.className = 'semestre';
            
            const titulo = document.createElement('div');
            titulo.className = 'semestre-titulo';
            titulo.textContent = `Semestre ${i}`;
            semestreDiv.appendChild(titulo);

            // Filtramos los ramos que corresponden a este semestre
            const ramosDelSemestre = ramos.filter(ramo => ramo.semestre === i);

            // Creamos un elemento div para cada ramo y lo agregamos a la columna
            ramosDelSemestre.forEach(ramo => {
                const ramoDiv = document.createElement('div');
                ramoDiv.className = `ramo ambito-${ramo.ambito}`;
                ramoDiv.textContent = ramo.nombre;
                // Guardamos el id del ramo en un atributo 'data-id' para identificarlo fácilmente
                ramoDiv.dataset.id = ramo.id; 
                semestreDiv.appendChild(ramoDiv);
            });

            mallaGrid.appendChild(semestreDiv);
        }
    };

    /**
     * Revisa todos los ramos y actualiza su estado visual (aprobado, bloqueado, disponible).
     */
    const actualizarEstadoVisual = () => {
        document.querySelectorAll('.ramo').forEach(ramoDiv => {
            const id = ramoDiv.dataset.id;
            const ramoData = ramos.find(r => r.id === id);

            ramoDiv.classList.remove('aprobado', 'bloqueado'); // Reseteamos las clases de estado

            if (aprobados.has(id)) {
                ramoDiv.classList.add('aprobado');
            } else if (!verificarRequisitos(id)) {
                ramoDiv.classList.add('bloqueado');
            }
        });
    };

    /**
     * Verifica si todos los requisitos de un ramo están cumplidos (aprobados).
     * @param {string} id - El id del ramo a verificar.
     * @returns {boolean} - True si se cumplen los requisitos, false si no.
     */
    const verificarRequisitos = (id) => {
        const ramo = ramos.find(r => r.id === id);
        if (!ramo || ramo.requisitos.length === 0) {
            return true; // Si no tiene requisitos, siempre está disponible
        }
        // 'every' verifica que TODOS los elementos del array cumplan la condición
        return ramo.requisitos.every(reqId => aprobados.has(reqId));
    };

    /**
     * Guarda el conjunto de ramos aprobados en el localStorage del navegador.
     */
    const guardarProgreso = () => {
        // Convertimos el Set a un Array para poder guardarlo como JSON
        localStorage.setItem('ramosAprobados', JSON.stringify(Array.from(aprobados)));
    };

    /**
     * Muestra el modal con la lista de requisitos que faltan.
     * @param {string} id - El id del ramo del cual mostrar los requisitos faltantes.
     */
    const mostrarModalRequisitos = (id) => {
        const ramo = ramos.find(r => r.id === id);
        const requisitosFaltantes = ramo.requisitos.filter(reqId => !aprobados.has(reqId));
        
        // Limpiamos la lista anterior
        listaRequisitosUl.innerHTML = '';

        requisitosFaltantes.forEach(reqId => {
            const reqRamo = ramos.find(r => r.id === reqId);
            const li = document.createElement('li');
            li.textContent = reqRamo.nombre;
            listaRequisitosUl.appendChild(li);
        });

        modal.classList.remove('modal-oculto');
        modal.classList.add('modal-visible');
    };

    /**
     * Oculta el modal de requisitos.
     */
    const ocultarModal = () => {
        modal.classList.remove('modal-visible');
        modal.classList.add('modal-oculto');
    };


    // --- MANEJADOR DE EVENTOS (EVENT HANDLER) ---

    /**
     * Se encarga de la lógica cuando se hace clic en un ramo.
     * @param {Event} e - El objeto del evento click.
     */
    const handleRamoClick = (e) => {
        // Verificamos si el clic fue sobre un elemento con la clase 'ramo'
        if (e.target.classList.contains('ramo')) {
            const id = e.target.dataset.id;
            
            // No hacer nada si el ramo ya está aprobado
            if (aprobados.has(id)) {
                return; 
            }

            // Si los requisitos se cumplen, se aprueba el ramo
            if (verificarRequisitos(id)) {
                aprobados.add(id);
                guardarProgreso();
                actualizarEstadoVisual(); // Actualizamos la vista de todos los ramos
            } else {
                // Si no se cumplen, mostramos el modal con los que faltan
                mostrarModalRequisitos(id);
            }
        }
    };

    
    // --- INICIALIZACIÓN ---

    // Dibujamos la malla en la pantalla
    dibujarMalla();
    // Aplicamos los estilos iniciales según los datos guardados
    actualizarEstadoVisual();

    // Añadimos el listener de clics al contenedor principal (delegación de eventos)
    mallaGrid.addEventListener('click', handleRamoClick);
    
    // Listeners para cerrar el modal
    cerrarModalBtn.addEventListener('click', ocultarModal);
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            ocultarModal();
        }
    });

});
