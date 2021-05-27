const sensor = require("ds18b20-raspi")
const mqtt = require("mqtt")

const client = mqtt.connect("mqtt://mosquitto")

client.on("connect", function () {
  client.subscribe("home/temperatures/boiler", function (err) {
    if (!err) {
      setInterval(function () {
        client.publish("home/temperatures/boiler", `${sensor.readC("28-3c01f095f2f9")}`)
      }, 60000)
    }
  })
  client.subscribe("home/temperatures/garten", function (err) {
    if (!err) {
      setInterval(function () {
        client.publish("home/temperatures/garten", `${sensor.readC("28-3c01f095ddc3")}`)
      }, 60000)
    }
  })
})
