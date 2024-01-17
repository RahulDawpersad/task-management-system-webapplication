module.exports = {
  database: {
    host: "baod7uj1uhuxo2v1xisw-mysql.services.clever-cloud.com",
    user: "us5yhg3lk8kmt071",
    password: "zubWupebyu45UL6xLKiw",
    database: "baod7uj1uhuxo2v1xisw",
  },
  session: {
    secret: "your_session_secret",
    clearExpired: true, // Clear expired sessions
    checkExpirationInterval: 900000, // How often expired sessions will be cleared (in milliseconds)
    expiration: 86400000, // The maximum age of a valid session (in milliseconds)
    createDatabaseTable: true, // Create a table to store sessions
    schema: {
      tableName: "sessions",
      columnNames: {
        session_id: "session_id",
        expires: "expires",
        data: "data",
      },
    },
  },
};
