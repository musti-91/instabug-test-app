# INSTABUG-DEMO APP

App to reproduce issue on instabug where camera button is hidden behind a native view. this case is True sheet which renders natively.

> Issue is only for Android

#### Steps in Android

1. Install Instabug and configure
2. Install any native view package [react-native-true-sheet](https://github.com/lodev09/react-native-true-sheet)
3. Open instabug reporing, take screenshot
4. Open Truesheet with any content
5. Notice the issue camera button is became hidden(behind) the Native View Sheet.

### Video recording for reference

[▶ Watch the screen recording](Android_recording.mp4)

#### Resources

We already have this issue with instabug 15, this app is using 16 but still we can see the issue.

- Android: 16
- Instabug: 15 & 16
- React-Native: > 73
