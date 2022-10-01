<template>
  <div class="w-10/12 max-w-screen-lg">
    <div class="text-white flex justify-between items-center mt-3">
      <h1 class="text-3xl my-3">No interrupts</h1>
      <ul class="text-lg list-none flex">
        <li>
          <router-link
            to="/tickets"
            class="py-2 px-4 hover:bg-white/20 hover:backdrop-blur-sm rounded-lg transition hover:-translate-y-1 hover:scale-100"
          >
            Tickets
          </router-link>
        </li>
        <li>
          <router-link
            to="/queues"
            class="py-2 px-4 hover:bg-white/20 hover:backdrop-blur-sm rounded-lg transition hover:-translate-y-1 hover:scale-100"
          >
            Queues
          </router-link>
        </li>
        <li>
          <router-link
            to="/"
            class="py-2 px-4 hover:bg-white/20 hover:backdrop-blur-sm rounded-lg transition hover:-translate-y-1 hover:scale-100"
          >
            My Queue
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
