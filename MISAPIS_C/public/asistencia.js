document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formAsistencia");
    const tabla = document.querySelector("#tablaAsistencia tbody");
    const thead = document.querySelector("#tablaAsistencia thead");
    let asistencias = [];
    let modoEditar = false;
    let idEditar = null;

    // Encabezado
    thead.innerHTML = `
        <tr>
            <th>Nombre</th>
            <th>Hora de Entrada</th>
            <th>Hora de Salida</th>
            <th>Fecha Actual</th>
            <th>Acción</th>
        </tr>
    `;

    // Cargar datos
    async function cargarAsistencias() {
        const res = await fetch("/api/Asistencia");
        const data = await res.json();
        asistencias = data.asistencias || [];

        tabla.innerHTML = "";
        asistencias.forEach(a => {
            const fila = `
                <tr>
                    <td>${a.nombre}</td>
                    <td>${a.horaEntrada}</td>
                    <td>${a.horaSalida}</td>
                    <td>${new Date(a.fecha).toLocaleDateString()}</td>
                    <td>
                        <button class="btn btn-sm btn-warning me-1 editar" data-id="${a._id}">Editar</button>
                        <button class="btn btn-sm btn-danger eliminar" data-id="${a._id}">Eliminar</button>
                    </td>
                </tr>`;
            tabla.insertAdjacentHTML("beforeend", fila);
        });

        document.querySelectorAll(".editar").forEach(btn =>
            btn.addEventListener("click", editarAsistencia)
        );
        document.querySelectorAll(".eliminar").forEach(btn =>
            btn.addEventListener("click", eliminarAsistencia)
        );
    }

    // Guardar o actualizar
    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const datos = {
            nombre: document.getElementById("nombre").value,
            horaEntrada: document.getElementById("horaEntrada").value,
            horaSalida: document.getElementById("horaSalida").value,
            fecha: new Date()
        };

        if (modoEditar) {
            await fetch(`/api/Asistencia/${idEditar}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(datos)
            });

            modoEditar = false;
            idEditar = null;

            const btn = form.querySelector("button[type='submit']");
            btn.textContent = "Marcar Asistencia";
            btn.classList.replace("btn-primary", "btn-success");
        } else {
            await fetch("/api/Asistencia", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(datos)
            });
        }

        form.reset();
        cargarAsistencias();
    });

    // Editar asistencia
    function editarAsistencia(e) {
        const id = e.target.dataset.id;
        const asistencia = asistencias.find(a => a._id === id);
        if (!asistencia) return;

        document.getElementById("nombre").value = asistencia.nombre;
        document.getElementById("horaEntrada").value = asistencia.horaEntrada;
        document.getElementById("horaSalida").value = asistencia.horaSalida;

        modoEditar = true;
        idEditar = id;

        const btn = form.querySelector("button[type='submit']");
        btn.textContent = "Actualizar Asistencia";
        btn.classList.replace("btn-success", "btn-primary");
    }

    // Eliminar asistencia
    async function eliminarAsistencia(e) {
        const id = e.target.dataset.id;
        const confirmar = confirm("¿Seguro que deseas eliminar esta asistencia?");
        if (!confirmar) return;

        await fetch(`/api/Asistencia/${id}`, { method: "DELETE" });
        cargarAsistencias();
    }

    cargarAsistencias();
});
