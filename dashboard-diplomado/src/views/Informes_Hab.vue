<template>
    <div>
        
        <div class="p-6">
            <div class="bg-white rounded-md border border-gray-100 p-6 shadow-md shadow-black/5">
                <div class="flex justify-between mb-6">
                    <div class="">
                        <h2 class="text-base font-semibold leading-7 text-gray-900">Informes Habitaciones</h2>
                        <p class="mt-1 text-sm leading-6 text-gray-600">Esta información se mostrará públicamente, así
                            que tenga cuidado con lo que comparte.</p>
                    </div>
                </div>
            </div>
        </div>
    <div class="p-6">
    <div class="bg-white rounded-md border border-gray-100 p-6 shadow-md shadow-black/5">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <div class="bg-white border border-gray-100 shadow-md shadow-black/5 p-6 rounded-md lg:col-span-2">
                <div class="flex justify-between mb-4 items-start">
                    <div class="font-medium">Gráficos</div>
                    <div class="dropdown">
                        <button type="button" class="dropdown-toggle text-gray-400 hover:text-gray-600"><i class="ri-more-fill"></i></button>
                        <ul class="dropdown-menu shadow-md shadow-black/5 z-30 hidden py-1.5 rounded-md bg-white border border-gray-100 w-full max-w-[140px]">
                            <li>
                                <a href="#" class="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50">Estándar</a>
                            </li>
                            <li>
                                <a href="#" class="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50">Junior</a>
                            </li>
                            <li>
                                <a href="#" class="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50">Suite</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                    <div class="rounded-md border border-dashed border-gray-200 p-4">
                        <div class="flex items-center mb-0.5">
                            <div class="text-xl font-semibold">10</div>
                            <span class="p-1 rounded text-[12px] font-semibold bg-blue-500/10 text-blue-500 leading-none ml-1">Estándar</span>
                        </div>
                        <span class="text-gray-400 text-sm">Estándar</span>
                    </div>
                    <div class="rounded-md border border-dashed border-gray-200 p-4">
                        <div class="flex items-center mb-0.5">
                            <div class="text-xl font-semibold">50</div>
                            <span class="p-1 rounded text-[12px] font-semibold bg-emerald-500/10 text-emerald-500 leading-none ml-1">Junior</span>
                        </div>
                        <span class="text-gray-400 text-sm">Junior</span>
                    </div>
                    <div class="rounded-md border border-dashed border-gray-200 p-4">
                        <div class="flex items-center mb-0.5">
                            <div class="text-xl font-semibold">4</div>
                            <span class="p-1 rounded text-[12px] font-semibold bg-rose-500/10 text-rose-500 leading-none ml-1">Suite</span>
                        </div>
                        <span class="text-gray-400 text-sm">Suite</span>
                    </div>
                </div>
                <div>
                    <canvas id="graphic-hab"></canvas>
                </div>
            </div>
        </div>
    </div>
    </div>
    </div>
</template>