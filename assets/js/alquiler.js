import { propiedadEnVenta, propiedadEnAlquiler } from './propiedades.js'


export const alquiler = (casa) => {
    const container = document.getElementById("containerPropiedad");

    let contenidoHTML = '';

    for (const alquiler of casa) {
        contenidoHTML += `
                <div class="col-md-4 mb-4">
                <div class = "card">
                <img src="${alquiler.src}" class = "card-img-top" alt="Imagen propiedad" />
                <div class="card-body"> <h5 class="card-title">${alquiler.nombre}</h5>
                <p class="card-text">${alquiler.descripcion}</p>
                <p><i class="fas fa-map-marker-alt"></i>${alquiler.ubicacion}</p>
                <p><i class="fas fa-bed"></i> ${alquiler.habitaciones} |
                <i class="fas fa-bath"></i> ${alquiler.baños}</p>
                <p><i class="fas fa-dollar-sign"></i>${alquiler.costo}</p>
                <p class = "${alquiler.smoke ? 'text-success' : 'text-danger'}"> <i class="${alquiler.smoke ? 'fas fa-smoking' : 'fas fa-smoking-ban'}"></i> ${alquiler.smoke ? "Se permite fumar" : "No se permite fumar"}</p>
                <p class = "${alquiler.pets ? 'text-success' : 'text-danger'}"> <i class="${alquiler.pets ? 'fas fa-paw' : 'fa-solid fa-ban'}"></i> ${alquiler.pets ? "Se permiten mascotas" : "No se permiten mascotas"}</p>
              </div>
              </div>
              </div>
        `;
    }

    container.innerHTML = contenidoHTML;
};

alquiler(propiedadEnAlquiler);

