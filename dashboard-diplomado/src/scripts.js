// start: Popper
const popperInstance = {}
document.querySelectorAll('.dropdown').forEach(function (item, index) {
    const popperId = 'popper-' + index
    const toggle = item.querySelector('.dropdown-toggle')
    const menu = item.querySelector('.dropdown-menu')
    menu.dataset.popperId = popperId
    popperInstance[popperId] = Popper.createPopper(toggle, menu, {
        modifiers: [
            {
                name: 'offset',
                options: {
                    offset: [0, 8],
                },
            },
            {
                name: 'preventOverflow',
                options: {
                    padding: 24,
                },
            },
        ],
        placement: 'bottom-end'
    });
})
document.addEventListener('click', function (e) {
    const toggle = e.target.closest('.dropdown-toggle')
    const menu = e.target.closest('.dropdown-menu')
    if (toggle) {
        const menuEl = toggle.closest('.dropdown').querySelector('.dropdown-menu')
        const popperId = menuEl.dataset.popperId
        if (menuEl.classList.contains('hidden')) {
            hideDropdown()
            menuEl.classList.remove('hidden')
            showPopper(popperId)
        } else {
            menuEl.classList.add('hidden')
            hidePopper(popperId)
        }
    } else if (!menu) {
        hideDropdown()
    }
})

function hideDropdown() {
    document.querySelectorAll('.dropdown-menu').forEach(function (item) {
        item.classList.add('hidden')
    })
}
function showPopper(popperId) {
    popperInstance[popperId].setOptions(function (options) {
        return {
            ...options,
            modifiers: [
                ...options.modifiers,
                { name: 'eventListeners', enabled: true },
            ],
        }
    });
    popperInstance[popperId].update();
}
function hidePopper(popperId) {
    popperInstance[popperId].setOptions(function (options) {
        return {
            ...options,
            modifiers: [
                ...options.modifiers,
                { name: 'eventListeners', enabled: false },
            ],
        }
    });
}
// end: Popper



// start: Tab
document.querySelectorAll('[data-tab]').forEach(function (item) {
    item.addEventListener('click', function (e) {
        e.preventDefault()
        const tab = item.dataset.tab
        const page = item.dataset.tabPage
        const target = document.querySelector('[data-tab-for="' + tab + '"][data-page="' + page + '"]')
        document.querySelectorAll('[data-tab="' + tab + '"]').forEach(function (i) {
            i.classList.remove('active')
        })
        document.querySelectorAll('[data-tab-for="' + tab + '"]').forEach(function (i) {
            i.classList.add('hidden')
        })
        item.classList.add('active')
        target.classList.remove('hidden')
    })
})
// end: Tab



// start: graphic-ghab
new Chart(document.getElementById('graphic-hab'), {
    type: 'line',
    data: {
        labels: generateNDays(7),
        datasets: [
            {
                label: 'Estándar',
                data: generateRandomData(7),
                borderWidth: 1,
                fill: true,
                pointBackgroundColor: 'rgb(59, 130, 246)',
                borderColor: 'rgb(59, 130, 246)',
                backgroundColor: 'rgb(59 130 246 / .05)',
                tension: .2
            },
            {
                label: 'Junior',
                data: generateRandomData(7),
                borderWidth: 1,
                fill: true,
                pointBackgroundColor: 'rgb(16, 185, 129)',
                borderColor: 'rgb(16, 185, 129)',
                backgroundColor: 'rgb(16 185 129 / .05)',
                tension: .2
            },
            {
                label: 'Suite',
                data: generateRandomData(7),
                borderWidth: 1,
                fill: true,
                pointBackgroundColor: 'rgb(244, 63, 94)',
                borderColor: 'rgb(244, 63, 94)',
                backgroundColor: 'rgb(244 63 94 / .05)',
                tension: .2
            },
        ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// start: graphic-ghab
new Chart(document.getElementById('graphic-acom'), {
    type: 'line',
    data: {
        labels: generateNDays(7),
        datasets: [
            {
                label: 'Sencilla',
                data: generateRandomData(7),
                borderWidth: 1,
                fill: true,
                pointBackgroundColor: 'rgb(59, 130, 246)',
                borderColor: 'rgb(59, 130, 246)',
                backgroundColor: 'rgb(59 130 246 / .05)',
                tension: .2
            },
            {
                label: 'Doble',
                data: generateRandomData(7),
                borderWidth: 1,
                fill: true,
                pointBackgroundColor: 'rgb(16, 185, 129)',
                borderColor: 'rgb(16, 185, 129)',
                backgroundColor: 'rgb(16 185 129 / .05)',
                tension: .2
            },
            {
                label: 'Triple',
                data: generateRandomData(7),
                borderWidth: 1,
                fill: true,
                pointBackgroundColor: 'rgb(244, 63, 94)',
                borderColor: 'rgb(244, 63, 94)',
                backgroundColor: 'rgb(244 63 94 / .05)',
                tension: .2
            },
            {
                label: 'Cuádruple',
                data: generateRandomData(7),
                borderWidth: 1,
                fill: true,
                pointBackgroundColor: 'yellow',
                borderColor: 'yellow',
                backgroundColor: 'rgb(255 255 0 / .05)',
                tension: .2
            },
        ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

function generateNDays(n) {
    const data = []
    for (let i = 0; i < n; i++) {
        const date = new Date()
        date.setDate(date.getDate() - i)
        data.push(date.toLocaleString('en-US', {
            month: 'short',
            day: 'numeric'
        }))
    }
    return data
}
function generateRandomData(n) {
    const data = []
    for (let i = 0; i < n; i++) {
        data.push(Math.round(Math.random() * 10))
    }
    return data
}
// end: Chart

// Función para Crear Hotel
function crearHotel() {
    document.getElementById('crearHotel').classList.remove('hidden');
}

// Función para cerrar el modal Crear Hotel
function cerrarCrearModal() {
    document.getElementById('crearHotel').classList.add('hidden');
}

// Función para Ver Hotel
function verHotel() {
    document.getElementById('verHotel').classList.remove('hidden');
}

// Función para Editar Hotel
function editarHotel() {
    document.getElementById('editarHotel').classList.remove('hidden');
}

// Función para cerrar el modal editar Hotel
function cerrarEditarModal() {
    document.getElementById('editarHotel').classList.add('hidden');
}

// Función para eliminar el modal
function eliminarHotel() {
    document.getElementById('eliminarHotel').classList.remove('hidden');
}



// Asociar la función openModal al clic en el botón "Editar"
document.getElementById('editButton').addEventListener('click', openModal);


// Ver

// Función para mostrar el modal
function openModal2() {
    document.getElementById('verModal').classList.remove('hidden');
}

// Función para ocultar el modal
function closeModal2() {
    document.getElementById('verModal').classList.add('hidden');
}

// Asociar la función openModal al clic en el botón "Editar"
document.getElementById('verButton').addEventListener('click', openModal2);

// Eliminar

// Función para mostrar el modal
function openModal3() {
    document.getElementById('eliminarModal').classList.remove('hidden');
}

// Función para ocultar el modal
function closeModal3() {
    document.getElementById('eliminarModal').classList.add('hidden');
}




/// [openModalh] abre el modal de editar la habitacion
function openModalh() {
    document.getElementById('editHa').classList.remove('hidden');

}

/// [closeModalh] cierra  el modal de editar la habitacion
function closeModalh() {
    document.getElementById('editHa').classList.add('hidden');
}


/// [openModalh] abre el modal de crear la habitacion
function openModalCh() {
    document.getElementById('createRoomModal').classList.remove('hidden');

}

/// [closeModalh] cierra  el modal de crear la habitacion
function closeModalCh() {
    document.getElementById('createRoomModal').classList.add('hidden');
}

/// [openModalDh] abre el modal de eliminar la habitacion

function openModalDh() {
    document.getElementById('deleteModal').classList.remove('hidden');

}

/// [closeModalDh] cierra  el modal de eliminar la habitacion
function closeModalDh() {
    document.getElementById('deleteModal').classList.add('hidden');
}

const fileInput = document.getElementById("imagenes");
const imageContainer = document.querySelector(".image-container");

fileInput.addEventListener("change", function () {
    imageContainer.innerHTML = ""; // Limpia el contenedor de imágenes

    for (const file of this.files) {
        const image = document.createElement("img");
        image.src = URL.createObjectURL(file);
        image.alt = file.name;
        imageContainer.appendChild(image);
    }
});