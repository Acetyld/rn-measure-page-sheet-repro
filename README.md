# Repro: measureInWindow after a page sheet is dismissed (iOS, Fabric)

Run on: iOS 27 simulator (iPhone 17), React Native 0.88.0, plain Modal (no navigation library).

Result: NOT reproduced. Before opening the page sheet and after dismissing it, measureInWindow returned x=24 y=80.

The report came from an app that uses react-native-screens 4.30.0 with a native stack. The trigger is probably that navigation setup, not the Modal alone.
