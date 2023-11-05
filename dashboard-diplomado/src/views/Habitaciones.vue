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
                const hotelId = 235; //nuevaHabitacion.hotel_id; // Obtén el hotel_id
                const response = await axios.get(`http://146.190.32.176/diplomado/api/rooms/${hotelId}`);
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
        
    const nuevaHabitacion = ref({
      hotel_id: '',
      room_type_id: '',
      accommodation_id: '',
      quantity: ''
    });

    // Función para crear una nueva habitación
    const crearHabitacion = async () => {
      try {
        // const hotelId = nuevaHabitacion.hotel_id; // Obtén el hotel_id
        const response = await axios.post(`http://146.190.32.176/diplomado/api/rooms`, nuevaHabitacion);
        console.log(response.data, 'POST Request');
      } catch (error) {
        console.error('Error al crear la habitación', error);
      }
    };

    const executePostRequest = async () => {
        await crearHabitacion(); // Ejecuta el método postHabitacion al hacer clic en el botón
        closeModal();
        // await getRooms();
    };


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

        crearHabitacion,
        nuevaHabitacion,

        executePostRequest,

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
                            <p class="text-gray-600">Tipo: {{ room.room_type_id }}</p>
                            <p class="text-gray-600">Acomodación: {{ room.accommodation_id }}</p>
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

                <div class="sm:col-span-3">
                    <label for="hotel_id"
                    class="block text-sm font-medium leading-6 text-gray-900">Codigo Habitación</label>
                    <div class="mt-2">
                    <input type="number" name="hotel_id" id="hotel_id"
                    autocomplete="given-name"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    </div>
                </div>

                
                <div class="sm:col-span-3">
                    <label for="quantity"
                    class="block text-sm font-medium leading-6 text-gray-900">Cantidad</label>
                    <div class="mt-2">
                        <input type="number" v-model="nuevaHabitacion.quantity" id="quantity" name="quantity"
                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                </div>


                <div class="sm:col-span-3">
                    <label for="room_type_id"
                    class="block text-sm font-medium leading-6 text-gray-900">Tipo</label>
                    <div class="mt-2">
                        <select v-model="nuevaHabitacion.room_type_id" id="room_type_id" name="room_type_id" autocomplete="room_type_id"
                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                            <option>Seleccionar</option>
                            <option v-for="rooms_t in rooms_types" :key="rooms_t.id" :value="rooms_t.id">{{ rooms_t.name }}</option>
                        </select>
                    </div>
                </div>

                <div class="sm:col-span-3">
                    <label for="accommodation_id"
                    class="block text-sm font-medium leading-6 text-gray-900">Acomodación</label>
                    <div class="mt-2">
                        <select v-model="nuevaHabitacion.accommodation_id" id="accommodation_id" name="accommodation_id" autocomplete="accommodation_id"
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
                <button @click="executePostRequest" type="button"
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

