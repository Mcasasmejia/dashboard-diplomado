<script setup>
const props = defineProps({
  modulo: String,
})

</script>
<template>
    <!-- start: Main -->
        <div class="py-2 px-6 bg-gray-200 flex items-center ">
            <ul class="flex items-center text-sm ml-4 py-1.5">
                <li class="mr-2">
                    <a href="#" class="text-gray-400 hover:text-gray-600 font-medium">Home</a>
                </li>
                <li class="text-gray-600 mr-2 font-medium">/</li>
                <li class="text-gray-600 mr-2 font-medium">{{modulo}}</li>
            </ul>
            <ul class="ml-auto flex items-center">
            </ul>
        </div>
    <!-- end: Main -->
</template>