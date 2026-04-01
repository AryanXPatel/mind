// Force blue theme — runs before app.vue mounts and reads the cookie
// This ensures the body gets class="theme-blue" instead of "theme-zinc"
export default defineNuxtPlugin({
  name: 'force-blue-theme',
  enforce: 'pre', // Run before other plugins
  setup() {
    const themeCookie = useCookie<{ theme?: string; radius?: number }>('theme');

    // Always force blue theme and radius 1
    themeCookie.value = {
      theme: 'blue',
      radius: 1,
    };
  },
});
