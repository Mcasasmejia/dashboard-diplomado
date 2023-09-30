<template>
  <div class="flex h-screen bg-gray-100">
    <!-- Menú lateral -->
    <aside class="w-1/5 bg-gray-800 text-white p-4">
      <h2 class="text-2xl font-semibold mb-4 "><i class="fa fa-home mr-2"></i>Hotel mi casita</h2>
      <ul class="text-left"> <!-- Agrega la clase text-left aquí -->
        <!-- Opciones de menú -->
        <li class="mb-4">
          <router-link to="/opcion1" class="hover:underline block pl-4">
            <i class="fas fa-user mr-2"></i> Gestionar habitaciones
          </router-link>
        </li>
        <li class="mb-4">
          <router-link to="/opcion2" class="hover:underline block pl-4">
            <i class="fas fa-user mr-2"></i> Habitaciones
          </router-link>
        </li>
        <li class="mb-4">
          <router-link to="/opcion3" class="hover:underline block pl-4">
            <i class="fas fa-user mr-2"></i> Reportes
          </router-link>
        </li>
        <li class="mb-4">
          <router-link to="/opcion4" class="hover:underline block pl-4">
            <i class="fas fa-user mr-2"></i> Configuración
          </router-link>
        </li>
        <!-- Agrega más opciones aquí -->
      </ul>
    </aside>
    
    <!-- Contenido del dashboard -->
    <main class="w-4/5 p-4">
      <!-- El contenido de tus opciones irá aquí -->
      <router-view></router-view>
    </main>
  </div>
</template>
