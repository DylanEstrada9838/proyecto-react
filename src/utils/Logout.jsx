const logout = () => {
  // Remove the token from local storage
  localStorage.removeItem("token");
  
  };

export default logout;
