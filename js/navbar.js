function Navbar(){

    return `

    <header class="navbar">

        <div class="brand">

            <img
                src="assets/logo2.png"
                alt="B&V Legales">

            <div class="brand-text">

                <span class="bv">

                    B<span class="gold">&</span>V

                </span>

                <span class="legales">

                    LEGALES

                </span>

            </div>

        </div>

        <button class="nav-toggle" id="navToggle" aria-label="Abrir menú">
            <span></span>
            <span></span>
            <span></span>
        </button>

        <nav id="navMenu">

            <a href="#inicio">Inicio</a>

            <a href="#quienes">Quiénes somos</a>

            <a href="#areas">Áreas de práctica</a>

            <a href="#contacto">Contacto</a>

        </nav>

    </header>

    `;

}

function initNavbar(){

    const toggle = document.getElementById("navToggle");
    const menu = document.getElementById("navMenu");

    toggle.addEventListener("click", () => {
        toggle.classList.toggle("active");
        menu.classList.toggle("active");
    });

    menu.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            toggle.classList.remove("active");
            menu.classList.remove("active");
        });
    });

}