import API from "./apiService";

// Register
export const registerUser = async (userData) => {
  const response = await API.post("/auth/register", userData);
  return response.data;
};

// Login
export const loginUser = async (userData) => {
  const response = await API.post("/auth/login", userData);

  if (response.data.token) {
    localStorage.setItem("token", response.data.token);
    localStorage.setItem("user", JSON.stringify(response.data.user));
    localStorage.setItem("userName", response.data.user.name);
  }

  return response.data;
};

// Get Profile
export const getProfile = async () => {
  const response = await API.get("/user/profile");
  return response.data;
};

// Update Profile
export const updateProfile = async (profileData) => {
  const response = await API.put("/user/profile", profileData);
  return response.data;
};

// Logout
export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  localStorage.removeItem("userName");
};