module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '9b3a6613f9677df8ba557fe67fb918f6'),
  },
});
