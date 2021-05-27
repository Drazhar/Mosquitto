## 18B20 temp sensor on Raspberry Pi
### Linux
- First add ```dtoverlay=w1-gpio``` to ```/boot/config.txt```, for example with ```sudo nano /boot/config.txt```
- After reboot use ```sudo modprobe w1-gpio``` and ```sudo modprobe w1-therm```
- The temperatures are then shown at ```/sys/bus/w1/devices/28-*********/w1_slave```. Use ```cat``` to show contents
