export default () => ({
  "users-permissions": {
    config: {
      jwt: {
        expiresIn: "7d",
      },
      register: {
        allowedFields: ["username", "email", "password"],
      },
    },
  },
});
