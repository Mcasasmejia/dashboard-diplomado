
<script setup>
import { Modal } from 'flowbite-vue'
import { ref } from 'vue'

// Modal Crear Hotel
const isShowModal = ref(false)
function closeModal() {
  isShowModal.value = false
}
function showModal() {
  isShowModal.value = true
}

// Modal Ver Hotel
const isShowModalVerHotel = ref(false)
function closeModalVerHotel() {
    isShowModalVerHotel.value = false
}
function showModalVerHotel() {
    isShowModalVerHotel.value = true
}

// Modal Editar Hotel
const isShowModalEditarHotel = ref(false)
function closeModalEditarHotel() {
    isShowModalEditarHotel.value = false
}
function showModalEditarHotel() {
    isShowModalEditarHotel.value = true
}

// Modal Eliminar Hotel
const isShowModalEliminarHotel = ref(false)
function closeModalEliminarHotel() {
    isShowModalEliminarHotel.value = false
}
function showModalEliminarHotel() {
    isShowModalEliminarHotel.value = true
}

</script>

<template>
    <div>
        <div class="p-6">
            <div class="bg-white border border-gray-100 shadow-md shadow-black/5 p-6 rounded-md">
                <div class="flex justify-between mb-6">
                    <div class="">
                        <h2 class="text-base font-semibold leading-7 text-gray-900">Hoteles</h2>
                        <p class="mt-1 text-sm leading-6 text-gray-600">Esta información muestra los hoteles o habitaciones
                            más populares en la comunidad.</p>
                    </div>
                    <div class="mt-2">
                        <div>
                            <button @click="showModal" type="button"
                                class="mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Crear Hotel
                            </button>
                        </div>
                    </div>
                </div>
                <form action="" class="flex items-center mb-4">
                    <div class="relative w-full mr-2">
                        <input type="text"
                            class="py-2 pr-4 pl-10 bg-gray-50 w-full outline-none border border-gray-100 rounded-md text-sm focus:border-blue-500"
                            placeholder="Buscar...">
                        <i class="ri-search-line absolute top-1/2 left-4 -translate-y-1/2 text-gray-400"></i>
                    </div>
                </form>
                <div class="overflow-x-auto">
                    <table class="w-full min-w-[540px]">
                        <thead>
                            <tr>
                                <th
                                    class="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left rounded-tl-md rounded-bl-md">
                                    NIT</th>
                                <th
                                    class="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left">
                                    Nombre</th>
                                <th
                                    class="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left">
                                    Ciudad</th>
                                <th
                                    class="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left rounded-tr-md rounded-br-md">
                                    Dirección</th>
                                <th
                                    class="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left rounded-tr-md rounded-br-md">
                                    Max Habitaciones</th>
                                <th
                                    class="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left rounded-tr-md rounded-br-md">
                                    Habitaciones</th>
                                <th
                                    class="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left rounded-tr-md rounded-br-md">
                                    Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="py-2 px-4 border-b border-b-gray-50">
                                    <div class="flex items-center">
                                        <img src="https://placehold.co/32x32" alt=""
                                            class="w-8 h-8 rounded object-cover block">
                                        <a href="#"
                                            class="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate">27220950-4</a>
                                    </div>
                                </td>
                                <td class="py-2 px-4 border-b border-b-gray-50">
                                    <span class="text-[13px] font-medium text-gray-400">Conquistador</span>
                                </td>
                                <td class="py-2 px-4 border-b border-b-gray-50">
                                    <span class="text-[13px] font-medium text-gray-400">Montería</span>
                                </td>
                                <td class="py-2 px-4 border-b border-b-gray-50">
                                    <span class="text-[13px] font-medium text-gray-400">Crr 9C #67-32</span>
                                </td>
                                <td class="py-2 px-4 border-b border-b-gray-50">
                                    <span class="text-[13px] font-medium text-gray-400">2</span>
                                </td>
                                <td class="py-2 px-4 border-b border-b-gray-50">
                                    <router-link to="/habitaciones"
                                        class="py-2 flex items-center justify-center text-sm font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 w-16 h-9">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" fill="currentColor"
                                            class="w-4 h-4 mr-2 -ml-0.5">
                                            <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" />
                                        </svg>
                                        Ver
                                    </router-link>
                                </td>
                                <td class="py-2 px-4 border-b border-b-gray-50">
                                    <div class="dropdown">
                                        <button type="button"
                                            class="dropdown-toggle text-gray-400 hover:text-gray-600 text-sm w-6 h-6 rounded flex items-center justify-center bg-gray-50"><i
                                                class="ri-more-2-fill"></i></button>
                                        <ul
                                            class="dropdown-menu shadow-md shadow-black/5 z-30 hidden py-1.5 rounded-md bg-white border border-gray-100 w-full max-w-[140px]">
                                            <li>
                                                <a href="#" id="editButton"
                                                    class="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-green-500 hover:bg-gray-50"
                                                    @click="showModalEditarHotel">
                                                    <i class="ri-edit-box-line mr-3 text-lg"></i>
                                                    <span class="text-sm">Editar</span> 
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" id="verButton"
                                                    class="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                                                    @click="showModalVerHotel">
                                                    <i class="ri-eye-fill mr-3 text-lg"></i>
                                                    <span class="text-sm">Ver</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" id="eliminarButton"
                                                    class="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-red-500 hover:bg-gray-50"
                                                    @click="showModalEliminarHotel">
                                                    <i class="ri-delete-bin-line mr-3 text-lg"></i>
                                                    <span class="text-sm">Eliminar</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td class="py-2 px-4 border-b border-b-gray-50">
                                    <div class="flex items-center">
                                        <img src="https://placehold.co/32x32" alt=""
                                            class="w-8 h-8 rounded object-cover block">
                                        <a href="#"
                                            class="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate">27220950-4</a>
                                    </div>
                                </td>
                                <td class="py-2 px-4 border-b border-b-gray-50">
                                    <span class="text-[13px] font-medium text-gray-400">Conquistador</span>
                                </td>
                                <td class="py-2 px-4 border-b border-b-gray-50">
                                    <span class="text-[13px] font-medium text-gray-400">Montería</span>
                                </td>
                                <td class="py-2 px-4 border-b border-b-gray-50">
                                    <span class="text-[13px] font-medium text-gray-400">Crr 9C #67-32</span>
                                </td>
                                <td class="py-2 px-4 border-b border-b-gray-50">
                                    <span class="text-[13px] font-medium text-gray-400">2</span>
                                </td>
                                <td class="py-2 px-4 border-b border-b-gray-50">
                                    <router-link to="/habitaciones"
                                        class="py-2 flex items-center justify-center text-sm font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 w-16 h-9">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" fill="currentColor"
                                            class="w-4 h-4 mr-2 -ml-0.5">
                                            <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" />
                                        </svg>
                                        Ver
                                    </router-link>
                                </td>
                                <td class="py-2 px-4 border-b border-b-gray-50">
                                    <div class="dropdown">
                                        <button type="button"
                                            class="dropdown-toggle text-gray-400 hover:text-gray-600 text-sm w-6 h-6 rounded flex items-center justify-center bg-gray-50"><i
                                                class="ri-more-2-fill"></i></button>
                                        <ul
                                            class="dropdown-menu shadow-md shadow-black/5 z-30 hidden py-1.5 rounded-md bg-white border border-gray-100 w-full max-w-[140px]">
                                            <li>
                                                <a href="#" id="editButton"
                                                    class="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-green-500 hover:bg-gray-50"
                                                    @click="showModalEditarHotel">
                                                    <i class="ri-edit-box-line mr-3 text-lg"></i>
                                                    <span class="text-sm">Editar</span> 
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" id="verButton"
                                                    class="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                                                    @click="showModalVerHotel">
                                                    <i class="ri-eye-fill mr-3 text-lg"></i>
                                                    <span class="text-sm">Ver</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" id="eliminarButton"
                                                    class="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-red-500 hover:bg-gray-50"
                                                    @click="showModalEliminarHotel">
                                                    <i class="ri-delete-bin-line mr-3 text-lg"></i>
                                                    <span class="text-sm">Eliminar</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td class="py-2 px-4 border-b border-b-gray-50">
                                    <div class="flex items-center">
                                        <img src="https://placehold.co/32x32" alt=""
                                            class="w-8 h-8 rounded object-cover block">
                                        <a href="#"
                                            class="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate">27220950-4</a>
                                    </div>
                                </td>
                                <td class="py-2 px-4 border-b border-b-gray-50">
                                    <span class="text-[13px] font-medium text-gray-400">Conquistador</span>
                                </td>
                                <td class="py-2 px-4 border-b border-b-gray-50">
                                    <span class="text-[13px] font-medium text-gray-400">Montería</span>
                                </td>
                                <td class="py-2 px-4 border-b border-b-gray-50">
                                    <span class="text-[13px] font-medium text-gray-400">Crr 9C #67-32</span>
                                </td>
                                <td class="py-2 px-4 border-b border-b-gray-50">
                                    <span class="text-[13px] font-medium text-gray-400">2</span>
                                </td>
                                <td class="py-2 px-4 border-b border-b-gray-50">
                                    <router-link to="/habitaciones"
                                        class="py-2 flex items-center justify-center text-sm font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 w-16 h-9">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" fill="currentColor"
                                            class="w-4 h-4 mr-2 -ml-0.5">
                                            <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" />
                                        </svg>
                                        Ver
                                    </router-link>
                                </td>
                                <td class="py-2 px-4 border-b border-b-gray-50">
                                    <div class="dropdown">
                                        <button type="button"
                                            class="dropdown-toggle text-gray-400 hover:text-gray-600 text-sm w-6 h-6 rounded flex items-center justify-center bg-gray-50"><i
                                                class="ri-more-2-fill"></i></button>
                                        <ul
                                            class="dropdown-menu shadow-md shadow-black/5 z-30 hidden py-1.5 rounded-md bg-white border border-gray-100 w-full max-w-[140px]">
                                            <li>
                                                <a href="#" id="editButton"
                                                    class="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-green-500 hover:bg-gray-50"
                                                    @click="showModalEditarHotel">
                                                    <i class="ri-edit-box-line mr-3 text-lg"></i>
                                                    <span class="text-sm">Editar</span> 
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" id="verButton"
                                                    class="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                                                    @click="showModalVerHotel">
                                                    <i class="ri-eye-fill mr-3 text-lg"></i>
                                                    <span class="text-sm">Ver</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" id="eliminarButton"
                                                    class="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-red-500 hover:bg-gray-50"
                                                    @click="showModalEliminarHotel">
                                                    <i class="ri-delete-bin-line mr-3 text-lg"></i>
                                                    <span class="text-sm">Eliminar</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td class="py-2 px-4 border-b border-b-gray-50">
                                    <div class="flex items-center">
                                        <img src="https://placehold.co/32x32" alt=""
                                            class="w-8 h-8 rounded object-cover block">
                                        <a href="#"
                                            class="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate">27220950-4</a>
                                    </div>
                                </td>
                                <td class="py-2 px-4 border-b border-b-gray-50">
                                    <span class="text-[13px] font-medium text-gray-400">Conquistador</span>
                                </td>
                                <td class="py-2 px-4 border-b border-b-gray-50">
                                    <span class="text-[13px] font-medium text-gray-400">Montería</span>
                                </td>
                                <td class="py-2 px-4 border-b border-b-gray-50">
                                    <span class="text-[13px] font-medium text-gray-400">Crr 9C #67-32</span>
                                </td>
                                <td class="py-2 px-4 border-b border-b-gray-50">
                                    <span class="text-[13px] font-medium text-gray-400">2</span>
                                </td>
                                <td class="py-2 px-4 border-b border-b-gray-50">
                                    <router-link to="/habitaciones"
                                        class="py-2 flex items-center justify-center text-sm font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 w-16 h-9">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" fill="currentColor"
                                            class="w-4 h-4 mr-2 -ml-0.5">
                                            <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" />
                                        </svg>
                                        Ver
                                    </router-link>
                                </td>
                                <td class="py-2 px-4 border-b border-b-gray-50">
                                    <div class="dropdown">
                                        <button type="button"
                                            class="dropdown-toggle text-gray-400 hover:text-gray-600 text-sm w-6 h-6 rounded flex items-center justify-center bg-gray-50"><i
                                                class="ri-more-2-fill"></i></button>
                                        <ul
                                            class="dropdown-menu shadow-md shadow-black/5 z-30 hidden py-1.5 rounded-md bg-white border border-gray-100 w-full max-w-[140px]">
                                            <li>
                                                <a href="#" id="editButton"
                                                    class="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-green-500 hover:bg-gray-50"
                                                    @click="showModalEditarHotel">
                                                    <i class="ri-edit-box-line mr-3 text-lg"></i>
                                                    <span class="text-sm">Editar</span> 
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" id="verButton"
                                                    class="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                                                    @click="showModalVerHotel">
                                                    <i class="ri-eye-fill mr-3 text-lg"></i>
                                                    <span class="text-sm">Ver</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" id="eliminarButton"
                                                    class="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-red-500 hover:bg-gray-50"
                                                    @click="showModalEliminarHotel">
                                                    <i class="ri-delete-bin-line mr-3 text-lg"></i>
                                                    <span class="text-sm">Eliminar</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td class="py-2 px-4 border-b border-b-gray-50">
                                    <div class="flex items-center">
                                        <img src="https://placehold.co/32x32" alt=""
                                            class="w-8 h-8 rounded object-cover block">
                                        <a href="#"
                                            class="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate">27220950-4</a>
                                    </div>
                                </td>
                                <td class="py-2 px-4 border-b border-b-gray-50">
                                    <span class="text-[13px] font-medium text-gray-400">Conquistador</span>
                                </td>
                                <td class="py-2 px-4 border-b border-b-gray-50">
                                    <span class="text-[13px] font-medium text-gray-400">Montería</span>
                                </td>
                                <td class="py-2 px-4 border-b border-b-gray-50">
                                    <span class="text-[13px] font-medium text-gray-400">Crr 9C #67-32</span>
                                </td>
                                <td class="py-2 px-4 border-b border-b-gray-50">
                                    <span class="text-[13px] font-medium text-gray-400">2</span>
                                </td>
                                <td class="py-2 px-4 border-b border-b-gray-50">
                                <router-link to="/habitaciones"
                                    class="py-2 flex items-center justify-center text-sm font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 w-16 h-9">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" fill="currentColor"
                                        class="w-4 h-4 mr-2 -ml-0.5">
                                        <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" />
                                    </svg>
                                    Ver
                                </router-link>
                                </td>
                                <td class="py-2 px-4 border-b border-b-gray-50">
                                    <div class="dropdown">
                                        <button type="button"
                                            class="dropdown-toggle text-gray-400 hover:text-gray-600 text-sm w-6 h-6 rounded flex items-center justify-center bg-gray-50"><i
                                                class="ri-more-2-fill"></i></button>
                                        <ul
                                            class="dropdown-menu shadow-md shadow-black/5 z-30 hidden py-1.5 rounded-md bg-white border border-gray-100 w-full max-w-[140px]">
                                            <li>
                                                <a href="#" id="editButton"
                                                    class="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-green-500 hover:bg-gray-50"
                                                    @click="showModalEditarHotel">
                                                    <i class="ri-edit-box-line mr-3 text-lg"></i>
                                                    <span class="text-sm">Editar</span> 
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" id="verButton"
                                                    class="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                                                    @click="showModalVerHotel">
                                                    <i class="ri-eye-fill mr-3 text-lg"></i>
                                                    <span class="text-sm">Ver</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" id="eliminarButton"
                                                    class="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-red-500 hover:bg-gray-50"
                                                    @click="showModalEliminarHotel">
                                                    <i class="ri-delete-bin-line mr-3 text-lg"></i>
                                                    <span class="text-sm">Eliminar</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <!--INICIO - MODAL CREAR HOTEL-->
    <Modal :size="size" v-if="isShowModal" @close="closeModal">
                                <template #header>
                                    <div class="flex items-center text-lg font-semibold text-gray-900">
                                        Crear Hotel
                                    </div>
                                </template>
                                <template #body>
                                    <form>
                                        <div class="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                            <div class="sm:col-span-3">
                                                <label for="first-name"
                                                    class="block text-sm font-medium leading-6 text-gray-900">NIT</label>
                                                <div class="mt-2">
                                                    <input type="text" name="first-name" id="first-name"
                                                        autocomplete="given-name"
                                                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                                </div>
                                            </div>

                                            <div class="sm:col-span-3">
                                                <label for="last-name"
                                                    class="block text-sm font-medium leading-6 text-gray-900">Nombre</label>
                                                <div class="mt-2">
                                                    <input type="text" name="last-name" id="last-name"
                                                        autocomplete="family-name"
                                                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                                </div>
                                            </div>

                                            <div class="sm:col-span-3">
                                                <label for="country"
                                                    class="block text-sm font-medium leading-6 text-gray-900">Ciudad</label>
                                                <div class="mt-2">
                                                    <select id="country" name="country" autocomplete="country-name"
                                                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                                                        <option>Montería</option>
                                                        <option>Bogotá</option>
                                                        <option>Medellin</option>
                                                        <option>Cartagena</option>
                                                        <option>Barranquilla</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div class="sm:col-span-3">
                                                <label for="country"
                                                    class="block text-sm font-medium leading-6 text-gray-900">Max
                                                    Habitaciones</label>
                                                <div class="mt-2">
                                                    <input type="number" id="tentacles" name="tentacles" value="1" min="1"
                                                        max="20"
                                                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                                </div>
                                            </div>

                                            <div class="col-span-full">
                                                <label for="street-address"
                                                    class="block text-sm font-medium leading-6 text-gray-900">Dirección</label>
                                                <div class="mt-2">
                                                    <input type="text" name="street-address" id="street-address"
                                                        autocomplete="street-address"
                                                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </template>
                                <template #footer>
                                    <div class="flex justify-between">
                                        <button @click="closeModal" type="button"
                                            class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
                                            Cerrar
                                        </button>
                                        <button @click="closeModal" type="button"
                                            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                            Crear
                                        </button>
                                    </div>
                                </template>
    </Modal>
    <!-- CIERRE - MODAL CREAR HOTEL-->

    <!--INICIO - MODAL VER HOTEL-->
    <Modal :size="size" v-if="isShowModalVerHotel" @close="closeModalVerHotel">
                                <template #header>
                                    <div class="flex items-center text-lg font-semibold text-gray-900">
                                        Ver Hotel
                                    </div>
                                </template>
                                <template #body>
                                    <form>
                                        <div class="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                            <div class="sm:col-span-3">
                                                <label for="first-name"
                                                    class="block text-sm font-medium leading-6 text-gray-900">NIT</label>
                                                <div class="mt-2">
                                                    <input type="text" name="first-name" id="first-name"
                                                        autocomplete="given-name"
                                                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                                </div>
                                            </div>

                                            <div class="sm:col-span-3">
                                                <label for="last-name"
                                                    class="block text-sm font-medium leading-6 text-gray-900">Nombre</label>
                                                <div class="mt-2">
                                                    <input type="text" name="last-name" id="last-name"
                                                        autocomplete="family-name"
                                                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                                </div>
                                            </div>

                                            <div class="sm:col-span-3">
                                                <label for="country"
                                                    class="block text-sm font-medium leading-6 text-gray-900">Ciudad</label>
                                                <div class="mt-2">
                                                    <select id="country" name="country" autocomplete="country-name"
                                                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                                                        <option>Montería</option>
                                                        <option>Bogotá</option>
                                                        <option>Medellin</option>
                                                        <option>Cartagena</option>
                                                        <option>Barranquilla</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div class="sm:col-span-3">
                                                <label for="country"
                                                    class="block text-sm font-medium leading-6 text-gray-900">Max
                                                    Habitaciones</label>
                                                <div class="mt-2">
                                                    <input type="number" id="tentacles" name="tentacles" value="1" min="1"
                                                        max="20"
                                                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                                </div>
                                            </div>

                                            <div class="col-span-full">
                                                <label for="street-address"
                                                    class="block text-sm font-medium leading-6 text-gray-900">Dirección</label>
                                                <div class="mt-2">
                                                    <input type="text" name="street-address" id="street-address"
                                                        autocomplete="street-address"
                                                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </template>
                                <template #footer>
                                    <div class="flex justify-between">
                                        <button @click="closeModalVerHotel" type="button"
                                            class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
                                            Cerrar
                                        </button>
                                        <button @click="closeModalVerHotel" type="button"
                                            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                            Crear
                                        </button>
                                    </div>
                                </template>
    </Modal>
    <!-- CIERRE - MODAL VER HOTEL-->

    <!--INICIO - MODAL EDITAR HOTEL-->  
    <Modal :size="size" v-if="isShowModalEditarHotel" @close="closeModalEditarHotel">
        <template #header>
            <div class="flex items-center text-lg font-semibold text-gray-900">
                Editar Hotel
            </div>
        </template>
      <template #body>
      <form>
        <div class="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div class="sm:col-span-3">
              <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">NIT</label>
                  <div class="mt-2">
                    <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                  </div>
            </div>

            <div class="sm:col-span-3">
              <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">Nombre</label>
                  <div class="mt-2">
                    <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
              </div>
            </div>

            <div class="sm:col-span-3">
              <label for="country" class="block text-sm font-medium leading-6 text-gray-900">Ciudad</label>
                  <div class="mt-2">
                    <select id="country" name="country" autocomplete="country-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                      <option>Montería</option>
                      <option>Bogotá</option>
                      <option>Medellin</option>
                      <option>Cartagena</option>
                      <option>Barranquilla</option>
                    </select>
                  </div>
            </div>

            <div class="sm:col-span-3">
              <label for="country" class="block text-sm font-medium leading-6 text-gray-900">Max Habitaciones</label>
                <div class="mt-2">
                  <input type="number" id="tentacles" name="tentacles" value="1" min="1" max="20" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                </div>
            </div>

            <div class="col-span-full">
              <label for="street-address" class="block text-sm font-medium leading-6 text-gray-900">Dirección</label>
                <div class="mt-2">
                  <input type="text" name="street-address" id="street-address" autocomplete="street-address" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                </div>
            </div>
        </div>  
      </form>
      </template>
      <template #footer>
        <div class="flex justify-between">
          <button @click="closeModalEditarHotel" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
            Cerrar
          </button>
          <button @click="closeModalEditarHotel" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Editar
          </button>
        </div>
      </template>
    </Modal>
    <!-- CIERRE - MODAL EDITAR HOTEL-->

    <!--INICIO - MODAL ELIMINAR HOTEL-->
    <Modal :size="size" v-if="isShowModalEliminarHotel" @close="closeModalEliminarHotel">
        <template #body>
                    <div class="p-6 text-center">
                <svg class="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                </svg>
                <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">¿Estas seguro de eliminar este Hotel?</h3>
                <button @click="closeModalEliminarHotel" data-modal-hide="popup-modal" type="button" class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                    Si, estoy seguro
                </button>
                <button @click="closeModalEliminarHotel" data-modal-hide="popup-modal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">No, cancelar</button>
            </div>
        </template>
    </Modal>
    <!-- CIERRE - MODAL ELIMINAR HOTEL-->
</div>
</template>

