document.addEventListener("DOMContentLoaded", function() {
            // Solo aplica el hover en pantallas que no sean móviles (>= 992px)
            const isDesktop = window.matchMedia("(min-width: 992px)");

            if (isDesktop.matches) {
                const dropdowns = document.querySelectorAll('.dropdown-hover');
                
                dropdowns.forEach(function(dropdown) {
                    // Busca el elemento que tiene el rol de "toggle" para inicializar el Dropdown
                    const dropdownToggle = dropdown.querySelector('.dropdown-toggle');
                    
                    // Si encontramos el toggle, inicializamos el Dropdown de Bootstrap
                    if (dropdownToggle) {
                        const bsDropdown = new bootstrap.Dropdown(dropdownToggle);

                        // Abrir al pasar el ratón (mouseenter)
                        dropdown.addEventListener('mouseenter', function () {
                            bsDropdown.show();
                        });

                        // Cerrar al sacar el ratón (mouseleave)
                        dropdown.addEventListener('mouseleave', function () {
                            // Pequeño retraso para dar tiempo al usuario de moverse sobre el menú
                            setTimeout(() => {
                                bsDropdown.hide();
                            }, 100); 
                        });
                    }
                });
            }
        });