load(Splash());

document
    .querySelector(".splash")
    .addEventListener("click", () => {

        const splash = document.querySelector(".splash");

        splash.classList.add("fadeOut");

        setTimeout(() => {

            load(Home());

            initHome();

        }, 500);

    });