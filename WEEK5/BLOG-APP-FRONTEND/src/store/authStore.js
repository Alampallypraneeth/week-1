import { create } from "zustand";
import axios from "axios";

export const useAuth = create((set) => ({
  currentUser: JSON.parse(localStorage.getItem("currentUser")) || null,
  isAuthenticated: !!localStorage.getItem("currentUser"),
  loading: false,
  error: null,

  login: async (userCredObj) => {
    console.log("userCredObj is:", userCredObj);
    try {
      set({ loading: true, error: null });

      const res = await axios.post(
        "http://localhost:4000/common-api/login",
        userCredObj,              
        { withCredentials: true }
      );

      console.log("res is:", res);

      const user = res.data.payload;
      localStorage.setItem("currentUser", JSON.stringify(user)); // save

      set({
        currentUser: user,
        isAuthenticated: true,
        loading: false,
        error: null,          
      });
    } catch (err) {
      set({
        error: err.response?.data?.error || "Login failed",
        loading: false,
        isAuthenticated: false,
        currentUser: null,
      });
    }
  },

  logout: async () => {
    try {
      set({ loading: true, error: null });
      await axios.get("http://localhost:4000/common-api/logout", { withCredentials: true });
      localStorage.removeItem("currentUser"); // clear
      set({
        loading: false,
        isAuthenticated: false,
        currentUser: null,
      });
    } catch (err) {
      set({
        error: err.response?.data?.error || "Logout failed",
        loading: false,
        isAuthenticated: false,
        currentUser: null,
      });
    }
  },
 checkAuth: async () => {
  try {
    set({ loading: true });

    const res = await axios.get(
      "http://localhost:4000/common-api/check-auth",
      { withCredentials: true }
    );

    const user = res.data.payload;

    console.log("CHECK AUTH USER:", user); // ✅ debug

    // SAVE again
    localStorage.setItem("currentUser", JSON.stringify(user));

    set({
      currentUser: user,
      isAuthenticated: true,
      loading: false,
    });

  } catch (err) {
    console.log("CHECK AUTH ERROR:", err);

    // ✅ IMPORTANT: fallback to localStorage
    const storedUser = JSON.parse(localStorage.getItem("currentUser"));

    if (storedUser) {
      set({
        currentUser: storedUser,
        isAuthenticated: true,
        loading: false,
      });
    } else {
      set({
        currentUser: null,
        isAuthenticated: false,
        loading: false,
      });
    }
  }
}
}));