# Repro: measureInWindow after a page sheet is dismissed (iOS, Fabric)

Run on: iOS 27.0 simulator (iPhone 17), React Native 0.88.0, plain Modal (no navigation library).

Result: in this minimal setup, measureInWindow returned x=24 y=80 before opening the page sheet and after dismissing it.

The effect was reported in an app that uses react-native-screens with a native stack, so it may depend on that navigation setup or on the device. It still needs confirmation on that setup.
