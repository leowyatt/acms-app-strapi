module.exports = {
  apps: [
    {
      name: "rapg-prod",
      script: "yarn start",
      env: {
        NODE_ENV: "production",
        PORT: "6040",
      },
    },
    {
      name: "rapg-dev",
      script: "yarn develop",
      env: {
        NODE_ENV: "development",
        PORT: "6030",
      },
      watch: true,
    },
  ],
};
