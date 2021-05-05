const sensor = require("ds18b20-raspi")
const mqtt = require("mqtt")

const client = mqtt.connect("mqtt://mosquitto")

client.on("connect", function () {
  client.subscribe("home/temperatures/boiler", function (err) {
    if (!err) {
      setInterval(function () {
        client.publish("home/temperatures/boiler", `${sensor.readC("28-00000ca9fb8f")}`)
      }, 60000)
    }
  })
})
