// http.js
export default {
  port: 3000,
  fetch(request) {
    return new Response("Bun is Here!");
  },
};
