const sensor = require("ds18b20-raspi")
const mqtt = require("mqtt")

const client = mqtt.connect("mqtt://mosquitto")

client.on("connect", function () {
  subscribeSensor("home/temperatures/boiler", "28-3c01f095f2f9")
  subscribeSensor("home/temperatures/garten", "28-3c01f095ddc3")
  subscribeSensor("home/temperatures/keller", "28-3c01f095ce5d")
})

function subscribeSensor(mosquittoString, sensorString) {
  client.subscribe(mosquittoString, function (err) {
    if (!err) {
      setInterval(function () {
        client.publish(mosquittoString, `${sensor.readC(sensorString)}`)
      }, 60000)
    }
  })
}
