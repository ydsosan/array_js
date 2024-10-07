import { propiedadEnVenta, propiedadEnAlquiler } from './propiedades.js'


export const venta = (propiedad) => {
    const container = document.getElementById("containerPropiedad");

    let contenidoHTML = '';

    for (const venta of propiedad) {
        contenidoHTML += `
                <div class="col-md-4 mb-4">
                <div class = "card">
                <img src="${venta.src}" class = "card-img-top" alt="Imagen propiedad" />
                <div class="card-body"> <h5 class="card-title">${venta.nombre}</h5>
                <p class="card-text">${venta.descripcion}</p>
                <p><i class="fas fa-map-marker-alt"></i>${venta.ubicacion}</p>
                <p><i class="fas fa-bed"></i> ${venta.habitaciones} |
                <i class="fas fa-bath"></i> ${venta.baños}</p>
                <p><i class="fas fa-dollar-sign"></i>${venta.costo}</p>
                <p class = "${venta.smoke ? 'text-success' : 'text-danger'}"> <i class="${venta.smoke ? 'fas fa-smoking' : 'fas fa-smoking-ban'}"></i> ${venta.smoke ? "Se permite fumar" : "No se permite fumar"}</p>
                <p class = "${venta.pets ? 'text-success' : 'text-danger'}"><i class="${venta.pets ? 'fas fa-paw' : 'fa-solid fa-ban'}"></i> ${venta.pets ? "Se permiten mascotas" : "No se permiten mascotas"}</p>
              </div>
              </div>
              </div>
        `;
    }

    container.innerHTML = contenidoHTML;
};

venta(propiedadEnVenta);


