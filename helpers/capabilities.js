export const emulatorCaps = {
    "platformName": "Android",
    "appium:deviceName": "emulator-5554",
    "appium:appPackage": "com.fdc_machetalk_broadcaster",
    "appium:appActivity": "com.fdc_machetalk_broadcaster.Activity.RootActivity",
    "appium:automationName": "UiAutomator2",
    "appium:noReset": true
}

export const emulatorCapsReset = {
    ...emulatorCaps, 
    "appium:noReset": false
}