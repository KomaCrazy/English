module.exports = {
  apps: [
    {
      name: "english",
      script: "src/app.js",
      watch: true,
      ignore_watch: ["node_modules", "logs"], // คุณสามารถเพิ่มไฟล์หรือไดเรกทอรีที่ไม่ต้องการให้ PM2 watch ได้
      watch_options: {
        "followSymlinks": false
      }
    }
  ]
};
