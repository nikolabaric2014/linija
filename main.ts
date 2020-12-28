basic.forever(function () {
    if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
        maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 150)
        maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, 150)
    } else {
        if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
            maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
            maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
            maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 0)
            maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, 150)
            if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
                maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 0)
                maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, 150)
            }
        } else {
            if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
                maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
                maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
                maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 150)
                maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, 0)
                if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
                    maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 150)
                    maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, 0)
                }
                if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
                    maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 150)
                } else {
                    maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, 0)
                }
            }
        }
    }
})
