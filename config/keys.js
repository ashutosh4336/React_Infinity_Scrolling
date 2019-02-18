module.exports = {
  APPLICATION_ID:
    process.env.APPLICATION_ID ||
    "e9c62bd7b72a2fc73d9b7241fc0153084e737d2081dc250663c0a33b6bd44247",
  SECRET:
    process.env.SECRET ||
    "cf4f7eba964fbfaf1728e3c6a8ae67d4e6b77e7446e9d93735bb1f809cb88884",
  CALLBACK_URL: process.env.CALLBACK_URL || "http://127.0.0.1:3000"
};
