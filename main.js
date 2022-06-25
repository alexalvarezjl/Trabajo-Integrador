const app = document.getElementById('typewriter')
;

const typewriter = new Typewriter(app, {
    loop: true,
    delay: 80
});

typewriter
.typeString('La Capital del Cuarteto')
.pauseFor(200)
.start();