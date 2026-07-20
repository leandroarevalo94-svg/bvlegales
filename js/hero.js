function Hero(){
return `
<section
class="hero"
id="inicio">
    <div class="hero-content">
        <h1>
            Acercamos el derecho
            a la vida cotidiana.
        </h1>
        <p>
            Brindamos contenido jurídico claro,
            accesible y confiable para acercar el
            derecho a todas las personas.
        </p>
        <button
            class="primary"
            onclick="document.getElementById('contacto').scrollIntoView({behavior: 'smooth'})">
            Contactanos
        </button>
    </div>
</section>
`;
}