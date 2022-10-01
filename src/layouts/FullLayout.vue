<script setup lang="ts">
import Header from '@/components/Header.vue';
</script>
<template>
    <header className='flex justify-around'>
        <Header />
    </header>
    <div className='grow h-full flex justify-around'>
        <div className='bg-white m-5 rounded-lg p-3 w-10/12 max-w-screen-lg shadow-lg'>
            <RouterView />
        </div>
    </div>
</template>