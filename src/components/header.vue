<template>
  <div class="text-white flex justify-content-between align-items-center my-3">
    <h1 class="text-3xl my-3">No interrupts</h1>
    <ul class="text-lg list-none flex">
      <li class="ml-3">
        <router-link
          to="/queues/tickets"
          class="p-2 hover:bg-white-alpha-20 hover:backdrop-blur-sm border-round transition-all hover:-translate-y-1 hover:scale-100 cursor-pointer no-underline text-white"
          >Tickets
        </router-link>
      </li>
      <li class="ml-3">
        <router-link
          to="/queues"
          class="p-2 hover:bg-white-alpha-20 hover:backdrop-blur-sm border-round transition-all hover:-translate-y-1 hover:scale-100 cursor-pointer no-underline text-white"
          >My queue
        </router-link>
      </li>
      <li class="ml-3">
        <router-link
          to="/queues/favorites-queues"
          class="p-2 hover:bg-white-alpha-20 hover:backdrop-blur-sm border-round transition-all hover:-translate-y-1 hover:scale-100 cursor-pointer no-underline text-white"
          >Favorites queues
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
