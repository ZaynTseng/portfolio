<template>
  <div class="drawer">
    <input id="my-drawer-3" type="checkbox" class="drawer-toggle"/>
    <div class="drawer-content flex flex-col">
      <base-navbar></base-navbar>
      <router-view></router-view>
      <base-footer></base-footer>
    </div>
    <base-sidebar></base-sidebar>
  </div>
</template>
