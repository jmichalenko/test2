radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        wuKong.setMotorSpeed(wuKong.MotorList.M1, 100)
        wuKong.setMotorSpeed(wuKong.MotorList.M2, -100)
    } else {
        wuKong.setMotorSpeed(wuKong.MotorList.M1, 0)
        wuKong.setMotorSpeed(wuKong.MotorList.M2, 0)
    }
})
radio.setGroup(124)
