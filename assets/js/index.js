export const mostrarPropiedad = (ArrayPropiedad, contenedorId) => {
    const container = document.getElementById(contenedorId);

    let count = 0;

    for (const propiedad of ArrayPropiedad) {
        if (count < 3) {
            const card = document.createElement("div");
            card.classList.add("col-md-4");
            card.classList.add("mb-4"); 
            card.innerHTML = `
                <div class = "card">
                <img src="${propiedad.src} "class = "card-img-top" alt="Imagen propiedad" />
                <div class="card-body"> <h5 class="card-title">${propiedad.nombre}</h5>
                <p class="card-text">${propiedad.descripcion}</p>
                <p><i class="fas fa-map-marker-alt"></i>${propiedad.ubicacion}</p>
                <p><i class="fas fa-bed"></i> ${propiedad.habitaciones} |
                <i class="fas fa-bath"></i> ${propiedad.baños}</p>
                <p><i class="fas fa-dollar-sign"></i>${propiedad.costo}</p>
                <p class = "${propiedad.smoke ? 'text-success' : 'text-danger'}"> <i class="${propiedad.smoke ? 'fas fa-smoking' : 'fas fa-smoking-ban'}"></i> ${propiedad.smoke ? "Se permite fumar" : "No se permite fumar"}</p>
                <p class = "${propiedad.pets ? 'text-success' : 'text-danger'}"><i class="${propiedad.pets ? 'fas fa-paw' : 'fa-solid fa-ban'}"></i> ${propiedad.pets ? "Se permiten mascotas" : "No se permiten mascotas"}</p>
              </div>
              </div>
        `;
            container.appendChild(card);
            count++;
        } else {
            return
        }
    }
};
