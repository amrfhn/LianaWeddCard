import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore("user", () => {
  const user = ref<Record<string, any> | null>(null);
  const isLoggedIn = ref(false);

  function setUser(userData: Record<string, any>) {
    user.value = userData;
    isLoggedIn.value = true;
  }

  function clearUser() {
    user.value = null;
    isLoggedIn.value = false;
  }

  return { user, isLoggedIn, setUser, clearUser };
});
