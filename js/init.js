window.addEventListener('DOMContentLoaded', ()=>{
    const molde = document.querySelector('.moldes > div');
    const container = document.querySelector('.container-fluid > .row');
    personajes.forEach(p=>{
        let personajeDiv = molde.cloneNode(true);
        personajeDiv.querySelector('.card-title').innerText = p.nombre;
        let img = document.createElement("img");
        img.src = `img/${p.imagen}`;
        img.classList.add('img-fluid')
        personajeDiv.querySelector('.card-body').appendChild(img);
        personajeDiv.querySelector('.card-footer').innerText = p.raza;
        container.appendChild(personajeDiv);
    })
});