export const token = (user) => {
  const currentUser = {
    email: user.email,
  };
  fetch("https://timber-kitchen-server.vercel.app/jwt", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(currentUser),
  })
    .then((res) => res.json())
    .then((data) => {
      localStorage.setItem("TimberKitchenToken", data.token);
    });
};
