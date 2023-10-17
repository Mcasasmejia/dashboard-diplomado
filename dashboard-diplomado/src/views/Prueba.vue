<template>
    <div>
        <div class="p-6">
            <div class="bg-white border border-gray-100 shadow-md shadow-black/5 p-6 rounded-md">
                <div class="flex justify-between mb-6">
                    <div class="">
                        <h2 class="text-base font-semibold leading-7 text-gray-900">Hoteles Prueba</h2>

                        <p class="mt-1 text-sm leading-6 text-gray-600">Esta información muestra los hoteles o habitaciones más populares
                            en la comunidad.</p>

                    </div>
                    <div class="mt-2">
                        <button type="submit" class="block w-full rounded-md bg-primary-700 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600" onclick="crearHotel()">Crear Hotel</button>

                    </div>
                </div>
                    <form action="" class="flex items-center mb-4">
                        <div class="relative w-full mr-2">
                            <input type="text" class="py-2 pr-4 pl-10 bg-gray-50 w-full outline-none border border-gray-100 rounded-md text-sm focus:border-blue-500" placeholder="Buscar...">
                            <i class="ri-search-line absolute top-1/2 left-4 -translate-y-1/2 text-gray-400"></i>
                        </div>   
                    </form>
                    <div class="overflow-x-auto">
                        <table class="w-full min-w-[540px]">
                            <thead>
                                <tr>
                                    <th class="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left rounded-tl-md rounded-bl-md">NIT</th>
                                    <th class="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left">Nombre</th>
                                    <th class="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left">Ciudad</th>
                                    <th class="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left rounded-tr-md rounded-br-md">Dirección</th>
                                    <th class="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left rounded-tr-md rounded-br-md">Max Habitaciones</th>
                                    <th class="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left rounded-tr-md rounded-br-md">Habitaciones</th>
                                    <th class="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left rounded-tr-md rounded-br-md">Acciones</th>
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
                                        <a href="habitaciones.html" class="py-2 flex items-center justify-center text-sm font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 w-16 h-9">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" fill="currentColor" class="w-4 h-4 mr-2 -ml-0.5">
                                                <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" />
                                            </svg>
                                            Ver
                                        </a>
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
                                                        class="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-green-500 hover:bg-gray-50" onclick="editarHotel()">
                                                        <i class="ri-edit-box-line mr-3 text-lg"></i>
                                                        <span class="text-sm">Editar</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" id="verButton"
                                                        class="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50">
                                                        <i class="ri-eye-fill mr-3 text-lg"></i>
                                                        <span class="text-sm">Ver</span>
                                                    </a>

                                                </li>
                                                <li>
                                                    <a href="#" id="eliminarButton"
                                                        class="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-red-500 hover:bg-gray-50" onclick="eliminarHotel()">
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
                                        <a href="habitaciones.html" class="py-2 flex items-center justify-center text-sm font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 w-16 h-9">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" fill="currentColor" class="w-4 h-4 mr-2 -ml-0.5">
                                                <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" />
                                            </svg>
                                            Ver
                                        </a>
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
                                                        class="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-green-500 hover:bg-gray-50" onclick="editarHotel()">
                                                        <i class="ri-edit-box-line mr-3 text-lg"></i>
                                                        <span class="text-sm">Editar</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" id="verButton"
                                                        class="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50">
                                                        <i class="ri-eye-fill mr-3 text-lg"></i>
                                                        <span class="text-sm">Ver</span>
                                                    </a>

                                                </li>
                                                <li>
                                                    <a href="#" id="eliminarButton"
                                                        class="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-red-500 hover:bg-gray-50" onclick="eliminarHotel()">
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
                                        <a href="habitaciones.html" class="py-2 flex items-center justify-center text-sm font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 w-16 h-9">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" fill="currentColor" class="w-4 h-4 mr-2 -ml-0.5">
                                                <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" />
                                            </svg>
                                            Ver
                                        </a>
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
                                                        class="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-green-500 hover:bg-gray-50" onclick="editarHotel()">
                                                        <i class="ri-edit-box-line mr-3 text-lg"></i>
                                                        <span class="text-sm">Editar</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" id="verButton"
                                                        class="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50">
                                                        <i class="ri-eye-fill mr-3 text-lg"></i>
                                                        <span class="text-sm">Ver</span>
                                                    </a>

                                                </li>
                                                <li>
                                                    <a href="#" id="eliminarButton"
                                                        class="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-red-500 hover:bg-gray-50" onclick="eliminarHotel()">
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
                                        <a href="habitaciones.html" class="py-2 flex items-center justify-center text-sm font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 w-16 h-9">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" fill="currentColor" class="w-4 h-4 mr-2 -ml-0.5">
                                                <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" />
                                            </svg>
                                            Ver
                                        </a>
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
                                                        class="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-green-500 hover:bg-gray-50" onclick="editarHotel()">
                                                        <i class="ri-edit-box-line mr-3 text-lg"></i>
                                                        <span class="text-sm">Editar</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" id="verButton"
                                                        class="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50">
                                                        <i class="ri-eye-fill mr-3 text-lg"></i>
                                                        <span class="text-sm">Ver</span>
                                                    </a>

                                                </li>
                                                <li>
                                                    <a href="#" id="eliminarButton"
                                                        class="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-red-500 hover:bg-gray-50" onclick="eliminarHotel()">
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
                                        <a href="habitaciones.html" class="py-2 flex items-center justify-center text-sm font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 w-16 h-9">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" fill="currentColor" class="w-4 h-4 mr-2 -ml-0.5">
                                                <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" />
                                            </svg>
                                            Ver
                                        </a>
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
                                                        class="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-green-500 hover:bg-gray-50" onclick="editarHotel()">
                                                        <i class="ri-edit-box-line mr-3 text-lg"></i>
                                                        <span class="text-sm">Editar</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" id="verButton"
                                                        class="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50">
                                                        <i class="ri-eye-fill mr-3 text-lg"></i>
                                                        <span class="text-sm">Ver</span>
                                                    </a>

                                                </li>
                                                <li>
                                                    <a href="#" id="eliminarButton"
                                                        class="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-red-500 hover:bg-gray-50" onclick="eliminarHotel()">
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
    </div>
</template>