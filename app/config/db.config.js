module.exports = {
  HOST: "postgres://testdb_7d2g_user:JE276G5YHxd6ecRQxVnJP8AVAold8W9p@dpg-ckf81aenpffc73borij0-a/testdb_7d2g",
  
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};