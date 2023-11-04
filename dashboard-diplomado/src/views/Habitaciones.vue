<script>
import { Modal } from 'flowbite-vue'
import { onMounted, ref } from 'vue'
import BreadCrumb from '../components/BreadCrumb.vue';
import axios from 'axios';

export default {

components: {
    BreadCrumb,
    Modal
},
setup() {

    ///----------------eventos-------------------------
    const hoteles = ref([]);
    const rooms = ref([]); // Aquí almacenaremos las habitaciones
    const rooms_types = ref([]); // Aquí almacenaremos los tipos
    const acommodations = ref([]); // Aquí almacenaremos las acomodaciones

    /// [onMounted] se realiza la peticion http
    onMounted(async () => {
        await getHoteles();
        await getRooms();
        await getRooms_types();
        await getAcommodations();
    });
        
        ///--------------------------obtener hoteles---------------------
        const getHoteles = async () => {
            try {
                const response = await axios.get('http://146.190.32.176/diplomado/api/hotels');
                hoteles.value = response.data["data"];
            } catch (error) {
                console.error('Hubo un error al obtener los hoteles:', error);

            }
        }

        ///--------------------------obtener Habitaciones---------------------
        const getRooms = async () => {
            try {
                const response = await axios.get('http://146.190.32.176/diplomado/api/rooms');
                rooms.value = response.data["data"];
            } catch (error) {
                console.error('Hubo un error al obtener las habitaciones:', error);
            }
        }

        // Función para mostrar la información de las habitaciones en la consola
        const mostrarInformacionHabitaciones = () => {
        console.log('rooms:', rooms.value);
        console.log('acomodaciones:', acommodations.value);
        console.log('types:', rooms_types.value);
        console.log('hoteles:', hoteles.value);
        
        };

        ///--------------------------obtener tipos---------------------
        const getRooms_types = async () => {
            try {
                const response = await axios.get('http://146.190.32.176/diplomado/api/room-types');
                rooms_types.value = response.data;
            } catch (error) {
                console.error('Hubo un error al obtener los hoteles:', error);
            }
        }

        ///--------------------------obtener acomodaciones---------------------
        const getAcommodations = async () => {
            try {
                const response = await axios.get('http://146.190.32.176/diplomado/api/accommodation-types');
                acommodations.value = response.data;
            } catch (error) {
                console.error('Hubo un error al obtener los hoteles:', error);
            }
        }
        

    // evento pra abir o cerrar el modal de Crear Hotel
    const isShowModal = ref(false);
    const closeModal = () => isShowModal.value = false;
    const showModal = () => isShowModal.value = true;

    return {
        isShowModal,
        closeModal,
        showModal,

        isShowModalEditarHabitacion,
        closeModalEditarHabitacion,
        ShowModalEditarHabitacion,

        isShowModalEliminarHabitacion,
        ShowModalEliminarHabitacion,
        closeModalEliminarHabitacion,

        rooms,
        hoteles,
        rooms_types,
        acommodations,

        mostrarInformacionHabitaciones,

    };
}
};
// Modal Agregar Habitación
const isShowModal = ref(false)
function closeModal() {
  isShowModal.value = false
}
function showModal() {
  isShowModal.value = true
}

const isShowModalEditarHabitacion = ref(false)
function closeModalEditarHabitacion() {
    isShowModalEditarHabitacion.value = false
}
function ShowModalEditarHabitacion() {
    isShowModalEditarHabitacion.value = true
}

const isShowModalEliminarHabitacion = ref(false)
function closeModalEliminarHabitacion() {
    isShowModalEliminarHabitacion.value = false
}
function ShowModalEliminarHabitacion() {
    isShowModalEliminarHabitacion.value = true
}

</script>

<template>
    <div>
 <!-- card del enunciado principal -->
 <BreadCrumb modulo="Habitaciones" />
 <div class="p-6">
            <div class="bg-white rounded-md border border-gray-100 p-6 shadow-md shadow-black/5">
                <div class="flex justify-between mb-6">
                    <div class="">
                        <h2 class="text-base font-semibold leading-7 text-gray-900">Habitaciones</h2>
                        <p class="mt-1 text-sm leading-6 text-gray-600">Puede disfrutar la información compartida de las habitaciones, actualmente solo estan disponibles estas habitaciones.</p>
                    </div>
                    <div class="mt-2">
                        <button @click="mostrarInformacionHabitaciones" type="submit" class="block w-full rounded-md bg-primary-700 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600">
                            <i class="ri-add-line mr-1.5"></i>
                            Prueba de Datos
                        </button>
                        <button @click="showModal" type="submit" class="block w-full rounded-md bg-primary-700 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600">
                            <i class="ri-add-line mr-1.5"></i>
                            Agregar Habitación
                        </button>
                    </div>
                </div>
            
            <!-- lista de habitaciones -->
            <div class="flex flex-wrap -mx-4">
                <!-- Card 1 -->
                <div v-for="room in rooms" :key="room.id" :value="room.id" class="w-full md:w-1/2 lg:w-1/3 px-4 mb-4">
                    <div class="bg-white rounded-lg shadow-md">
                        <img src="../assets/suite.jpeg" alt="Imagen 3" class="w-full h-48 object-cover rounded-t-lg">
                        <div class="p-4">
                            <h2 class="text-xl font-semibold">Habitacion 01</h2>
                            <p class="text-gray-600">Tipo: {{ room.id }}</p>
                            <p class="text-gray-600">Acomodación: Sencilla</p>
                            <div class="flex justify-between mt-4">
                                <!-- Opción Editar -->
                                <button class="flex items-center text-blue-500 hover:text-blue-700" id="btnEditar"
                                    @click="ShowModalEditarHabitacion">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mr-1" viewBox="0 0 20 20"
                                        fill="currentColor">
                                        <path
                                            d="M14.293 3.293a1 1 0 011.414 0l2 2a1 1 0 010 1.414l-12 12a1 1 0 01-1.414 0l-2-2a1 1 0 010-1.414l12-12a1 1 0 011.414 0zM16 4.414L15.414 4l-1 1L16 6.414l.586-.586z" />
                                        <path d="M4 14h4v2H4z" />
                                        <path d="M10 4h2V2h-2z" />
                                    </svg>
                                    Editar
                                </button>
                                <!-- Opción Eliminar -->
                                <button class="flex items-center text-red-500 hover:text-red-700"
                                    @click="ShowModalEliminarHabitacion">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mr-1" viewBox="0 0 20 20"
                                        fill="currentColor">
                                        <path fill-rule="evenodd"
                                            d="M5.293 5.293a1 1 0 011.414 0L10 8.586l3.293-3.293a1 1 0 111.414 1.414L11.414 10l3.293 3.293a1 1 0 01-1.414 1.414L10 11.414l-3.293 3.293a1 1 0 01-1.414-1.414L8.586 10 5.293 6.707a1 1 0 010-1.414z"
                                            clip-rule="evenodd" />
                                    </svg>
                                    Eliminar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>





            


            </div>
            </div>
        </div>




        <!-- Modal de Confirmación de Eliminación -->
        <div id="deleteModal" class="fixed inset-0 flex items-center justify-center z-50 hidden">
            <div class="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>
            <div class="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50">
                <div
                    class="modal-close absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-4 text-white text-sm">
                    <svg class="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                        viewBox="0 0 18 18">
                        <path
                            d="M13.414 4.586a2 2 0 00-2.828 0L9 6.172 6.414 3.586a2 2 0 10-2.828 2.828L6.172 9l-2.586 2.586a2 2 0 102.828 2.828L9 11.828l2.586 2.586a2 2 0 102.828-2.828L11.828 9l2.586-2.586a2 2 0 000-2.828z" />
                    </svg>
                </div>

                <!-- Contenido del Modal de Confirmación de Eliminación -->
                <div class="modal-content py-4 text-left px-6">
                    <h1 class="text-2xl font-semibold">Confirmar Eliminación</h1>
                    <p>¿Estás seguro de que deseas eliminar este elemento?</p>
                    <div class="mt-4">
                        <button id="confirmDelete" class="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                            onclick="closeModalDh()">Eliminar</button>
                        <button id="cancelDelete"
                            class="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400 ml-2"
                            onclick="closeModalDh()">Cancelar</button>
                    </div>
                </div>
            </div>
        </div>


        <!-- Modal de Creación de Habitación -->
        <div id="createRoomModal" class="modal fixed inset-0 flex items-center justify-center hidden">
            <div class="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>
            <div class="modal-content bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
                <h2 class="text-2xl font-semibold py-4 px-6">Crear Habitación</h2>
                <form class="px-6 pb-6">
                    <!-- Lista de hoteles -->
                    <label for="hotel" class="block font-semibold text-gray-700">Selecciona un hotel:</label>
                    <select id="hotel" name="hotel"
                        class="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500">
                        <option value="hotel1">Hotel 1</option>
                        <option value="hotel2">Hotel 2</option>
                    </select>

                    <!-- Campo para asignar un código -->
                    <label for="codigo" class="block mt-4 font-semibold text-gray-700">Código de Habitación:</label>
                    <input type="text" id="codigo" name="codigo" required
                        class="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500">

                    <!-- Apartado "Tipo" -->
                    <label class="block mt-4 font-semibold text-gray-700">Tipo de Habitación:</label>
                    <div class="flex mt-2">
                        <input type="radio" id="estandar" name="tipo" value="estandar" class="mr-2">
                        <label for="estandar" class="text-gray-700">Estándar</label>
                        <input type="radio" id="junior" name="tipo" value="junior" class="ml-4 mr-2">
                        <label for="junior" class="text-gray-700">Junior</label>
                        <input type="radio" id="suite" name="tipo" value="suite" class="ml-4 mr-2">
                        <label for="suite" class="text-gray-700">Suite</label>
                    </div>

                    <!-- Apartado "Acomodación" -->
                    <label class="block mt-4 font-semibold text-gray-700">Acomodación:</label>
                    <div class="flex mt-2">
                        <input type="radio" id="sencilla" name="acomodacion" value="sencilla" class="mr-2">
                        <label for="sencilla" class="text-gray-700">Sencilla</label>
                        <input type="radio" id="doble" name="acomodacion" value="doble" class="ml-4 mr-2">
                        <label for="doble" class="text-gray-700">Doble</label>
                        <input type="radio" id="triple" name="acomodacion" value="triple" class="ml-4 mr-2">
                        <label for="triple" class="text-gray-700">Triple</label>
                        <input type="radio" id="cuadruple" name="acomodacion" value="cuadruple" class="ml-4 mr-2">
                        <label for="cuadruple" class="text-gray-700">Cuádruple</label>
                    </div>
                    <label for="imagenes" class="block mt-4 font-semibold text-gray-700">Subir imágenes:</label>
                    <label class="custom-file-input">
                        <input type="file" id="imagenes" name="imagenes" accept="image/*" multiple class="hidden">
                        <span class="block p-4">Arrastra y suelta imágenes aquí o haz clic para seleccionar</span>
                    </label>
                    <div class="image-container mt-4">
                    </div>

                    <label for="comentario" class="block mt-4 font-semibold text-gray-700">Comentario:</label>
                    <textarea id="comentario" name="comentario" rows="4"
                        class="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"></textarea>

                    <button type="submit"
                        class="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Crear</button>
                </form>
            </div>
        </div>



        <!-- Modal de editar de Habitación -->
        <div id="editHa" class="modal fixed inset-0 flex items-center justify-center hidden">
            <div class="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>
            <div class="modal-content bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
                <h2 class="text-2xl font-semibold py-4 px-6">Agregar Habitación</h2>
                <form class="px-6 pb-6">
                    <!-- Lista de hoteles con valor por defecto -->
                    <label for="hotel" class="block font-semibold text-gray-700">Selecciona un hotel:</label>
                    <select id="hotel" name="hotel"
                        class="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500">
                        <option value="hotel1" selected>Hotel 1</option>
                        <option value="hotel2">Hotel 2</option>
                    </select>

                    <!-- Campo para asignar un código con valor por defecto -->
                    <label for="codigo" class="block mt-4 font-semibold text-gray-700">Código de Habitación:</label>
                    <input type="text" id="codigo" name="codigo" required
                        class="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
                        value="207">

                    <!-- Apartado "Tipo" con valor por defecto -->
                    <label class="block mt-4 font-semibold text-gray-700">Tipo de Habitación:</label>
                    <div class="flex mt-2">
                        <input type="radio" id="estandar" name="tipo" value="estandar" class="mr-2" checked>
                        <label for="estandar" class="text-gray-700">Estándar</label>
                        <input type="radio" id="junior" name="tipo" value="junior" class="ml-4 mr-2">
                        <label for="junior" class="text-gray-700">Junior</label>
                        <input type="radio" id="suite" name="tipo" value="suite" class="ml-4 mr-2">
                        <label for="suite" class="text-gray-700">Suite</label>
                    </div>

                    <!-- Apartado "Acomodación" con valor por defecto -->
                    <label class="block mt-4 font-semibold text-gray-700">Acomodación:</label>
                    <div class="flex mt-2">
                        <input type="radio" id="sencilla" name="acomodacion" value="sencilla" class="mr-2" checked>
                        <label for="sencilla" class="text-gray-700">Sencilla</label>
                        <input type="radio" id="doble" name="acomodacion" value="doble" class="ml-4 mr-2">
                        <label for="doble" class="text-gray-700">Doble</label>
                        <input type="radio" id="triple" name="acomodacion" value="triple" class="ml-4 mr-2">
                        <label for="triple" class="text-gray-700">Triple</label>
                        <input type="radio" id="cuadruple" name="acomodacion" value="cuadruple" class="ml-4 mr-2">
                        <label for="cuadruple" class="text-gray-700">Cuádruple</label>
                    </div>


                    <!-- Caja de texto para comentarios -->
                    <label for="comentario" class="block mt-4 font-semibold text-gray-700">Comentario:</label>
                    <textarea id="comentario" name="comentario" rows="4"
                        class="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500">es un comentario por defecto</textarea>


                    <!-- Botón para enviar el formulario -->
                    <button type="submit"
                        class="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Editar</button>
                </form>
            </div>
        </div>
    <div>
    
    <!--INICIO - MODAL AGREGAR HABITACIÓN-->
    <Modal :size="size" v-if="isShowModal" @close="closeModal">
        <template #header>
            <div class="flex items-center text-lg font-semibold text-gray-900">
                Agregar Habitación
            </div>
        </template>
        <template #body>
        <form>
            <div class="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div class="col-span-full">
                    <label for="first-name"
                    class="block text-sm font-medium leading-6 text-gray-900">Codigo Habitación</label>
                <div class="mt-2">
                    <input type="text" name="first-name" id="first-name"
                    autocomplete="given-name"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    </div>
                </div>

                <div class="sm:col-span-3">
                    <label for="last-name"
                    class="block text-sm font-medium leading-6 text-gray-900">Tipo</label>
                    <div class="mt-2">
                        <select id="country" name="country" autocomplete="country-name"
                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                            <option>Seleccionar</option>
                            <option v-for="rooms_t in rooms_types" :key="rooms_t.id" :value="rooms_t.id">{{ rooms_t.name }}</option>
                        </select>
                    </div>
                </div>

                <div class="sm:col-span-3">
                    <label for="acomodacion"
                    class="block text-sm font-medium leading-6 text-gray-900">Acomodación</label>
                    <div class="mt-2">
                        <select id="acomodacion" name="acomodacion" autocomplete="acomodacion-name"
                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                        <option>Seleccionar</option>
                        <option v-for="rooms_a in acommodations" :key="rooms_a.id" :value="rooms_a.id">{{ rooms_a.name }}</option>
                        </select>
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
                    Agregar
                </button>
            </div>
        </template>
    </Modal>
    <!-- CIERRE - MODAL AGREGAR HABITACIÓN-->

    <!--INICIO - MODAL EDITAR HABITACIÓN-->
    <Modal :size="size" v-if="isShowModalEditarHabitacion" @close="closeModalEditarHabitacion">
        <template #header>
            <div class="flex items-center text-lg font-semibold text-gray-900">
                Editar Habitación
            </div>
        </template>
        <template #body>
        <form>
            <div class="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div class="col-span-full">
                    <label for="first-name"
                    class="block text-sm font-medium leading-6 text-gray-900">Codigo Habitación</label>
                <div class="mt-2">
                    <input type="text" name="first-name" id="first-name"
                    autocomplete="given-name"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    </div>
                </div>

                <div class="sm:col-span-3">
                    <label for="last-name"
                    class="block text-sm font-medium leading-6 text-gray-900">Tipo</label>
                    <div class="mt-2">
                        <select id="country" name="country" autocomplete="country-name"
                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                            <option>Seleccionar</option>
                            <option>Estándar</option>
                            <option>Junior</option>
                            <option>Suite</option>
                        </select>
                    </div>
                </div>

                <div class="sm:col-span-3">
                    <label for="acomodacion"
                    class="block text-sm font-medium leading-6 text-gray-900">Acomodación</label>
                    <div class="mt-2">
                        <select id="acomodacion" name="acomodacion" autocomplete="acomodacion-name"
                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                        <option>Seleccionar</option>
                        <option>Sencilla</option>
                        <option>Doble</option>
                        <option>Triple</option>
                        <option>Cuádruple</option>
                        </select>
                    </div>
                </div>
            </div>
        </form>
        </template>
        <template #footer>
            <div class="flex justify-between">
                <button @click="closeModalEditarHabitacion" type="button"
                    class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
                    Cerrar
                </button>
                <button @click="closeModalEditarHabitacion" type="button"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Editar
                </button>
            </div>
        </template>
    </Modal>
    <!-- CIERRE - MODAL EDITAR HABITACIÓN-->

    <!--INICIO - MODAL ELIMINAR HABITACIÓN-->
    <Modal :size="size" v-if="isShowModalEliminarHabitacion" @close="closeModalEliminarHabitacion">
        <template #body>
                    <div class="p-6 text-center">
                <svg class="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                </svg>
                <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">¿Estas seguro de eliminar esta Habitación?</h3>
                <button @click="closeModalEliminarHabitacion" data-modal-hide="popup-modal" type="button" class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                    Si, estoy seguro
                </button>
                <button @click="closeModalEliminarHabitacion" data-modal-hide="popup-modal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">No, cancelar</button>
            </div>
        </template>
    </Modal>
    <!-- CIERRE - MODAL ELIMINAR HABITACIÓN-->    

    </div>
    </div>
</template>

