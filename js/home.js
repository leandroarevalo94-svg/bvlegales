function Home(){

    return `

        ${Navbar()}

        <main class="home">

            ${Hero()}

            ${About()}

            ${Areas()}

            ${Contact()}

        </main>

    `;

}

function initHome(){

    initNavbar();

}