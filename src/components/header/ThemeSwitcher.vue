<template>
  <!-- <div class="theme-switcher">
    <div></div>
    <div></div>
  </div> -->
  <button class="theme-toggle" id="theme-toggle">
    <svg
      class="sun-and-moon"
      aria-hidden="true"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <circle
        class="sun"
        cx="12"
        cy="12"
        r="6"
        mask="url(#moon-mask)"
        fill="currentColor"
      />
      <g class="sun-beams" stroke="currentColor">
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
      </g>
      <mask class="moon" id="moon-mask">
        <rect x="0" y="0" width="100%" height="100%" fill="white" />
        <circle cx="24" cy="10" r="6" fill="black" />
      </mask>
    </svg>
  </button>
</template>

<style lang="scss" scoped>
// .theme-switcher {
//   margin: 0 0 0 2rem;
//   display: flex;
//   align-items: center;
//   justify-content: space-around;
//   background: lightgrey;
//   width: 60px;
//   height: 25px;
//   border-radius: 20px;
//   > div {
//     background: #fafafa;
//     border-radius: 100%;
//     width: 20px;
//     height: 20px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//   }
// }
</style>
