module.exports = {
  apps : [{
    name   : "app1",
    script : "dist/index.js",
    instances : "max",
    exec_mode : "cluster",
    autorestart: true,
    // watch: false,
  }]
}
