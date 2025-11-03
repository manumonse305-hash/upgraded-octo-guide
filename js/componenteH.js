// components.js - Componentes reutilizables
const HeaderComponent = `
<nav class="navbar navbar-expand-lg navbar-dark sticky-top">
    <div class="container">
        <a class="navbar-brand" href="../index.html">
            <i class="bi bi-palette2 me-2"><img src="../img/logo.png" alt="GlowUp" height="40"></i>
        </a>
        
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span class="navbar-toggler-icon"></span>
        </button>
        
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav mx-auto">
                <li class="nav-item"><a class="nav-link" href="../index.html">Inicio</a></li>
                
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownAnalisis" data-bs-toggle="dropdown">
                        Analisis Estructurado
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdownAnalisis">
                        <li><a class="dropdown-item" href="modeloambiental.html">Modelo Ambiental</a></li>
                        <li><a class="dropdown-item" href="modeloComportamiento.html">Modelo de Comportamiento</a></li>
                    </ul>
                </li>
                
                <li class="nav-item"><a class="nav-link" href="modeloPOO.html">Modelo Orientado a objetos</a></li>
                
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownDiagramas" data-bs-toggle="dropdown">
                        Diagramas
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdownDiagramas">
                        <li><a class="dropdown-item" href="casosUso.html">Diagrama de Casos de Uso</a></li>
                        <li><a class="dropdown-item" href="diagramaSecuencia.html">Diagrama de Secuencia</a></li>
                    </ul>
                </li>
                
                <li class="nav-item"><a class="nav-link" href="productos.html">Productos</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Video Explicativo</a></li>
                <li class="nav-item">
                    <a class="nav-link" href="integrantes.html">
                        <i class="bi bi-people-fill me-1"></i> Integrantes
                    </a>
                </li>
            </ul>
            
            <div class="d-flex">
                <a href="#" class="nav-link me-3"><i class="bi bi-search"></i></a>
                <a href="#" class="nav-link me-3"><i class="bi bi-person"></i></a>
                <a href="#" class="nav-link"><i class="bi bi-bag"></i></a>
            </div>
        </div>
    </div>
</nav>
`;

const FooterComponent = `
<footer class="footer">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-2 col-md-4 mb-4 text-center">
                <img src="../img/Umsa-logo.svg.png" alt="UMSA" class="umsa-logo">
            </div>
            
            <div class="col-lg-4 col-md-8 mb-4">
                <p class="mb-1">Universidad Mayor de San Andrés</p>
                <p class="mb-1">Carrera de Informática</p>
                <p class="mb-0">Análisis y Diseño de Sistemas</p>
            </div>
            
            <div class="col-lg-6 mb-4">
                <h5>Síguenos en redes sociales</h5>
                <div class="social-icons">
                    <a href="#"><i class="bi bi-facebook"></i></a>
                    <a href="#"><i class="bi bi-instagram"></i></a>
                    <a href="#"><i class="bi bi-tiktok"></i></a>
                    <a href="#"><i class="bi bi-pinterest"></i></a>
                </div>
            </div>
        </div>
        <hr class="my-4">
        <div class="text-center">
            <p class="mb-0">&copy; 2023 GlowUp. Todos los derechos reservados.</p>
        </div>
    </div>
</footer>
`;

// Función para cargar componentes
function loadComponents() {
    // Insertar header al inicio del body
    document.body.insertAdjacentHTML('afterbegin', HeaderComponent);
    
    // Insertar footer al final del body
    document.body.insertAdjacentHTML('beforeend', FooterComponent);
}

// Cargar componentes cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', loadComponents);