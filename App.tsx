import Instabug, {
  InvocationEvent,
  LogLevel,
  ReportType,
  WelcomeMessageMode,
  BugReporting,
  NetworkLogger,
  CrashReporting,
} from 'instabug-reactnative'
import React from 'react'
import { useEffect } from 'react'
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { MyScreen } from './src/MyScreen'

const config = {
  invocationEvents: [InvocationEvent.shake],
  welcomeMessageMode: WelcomeMessageMode.disabled,
  reportTypes: [ReportType.bug, ReportType.feedback],
  enableNetworkLogger: true,
  sdkDebugLogsLevel: LogLevel.none,
  ibgLogPrintsToConsole: false,
  enableCrashReporting: false,
  primaryColor: '#5C2D91',
}
function App() {
  const isDarkMode = useColorScheme() === 'dark'

  useEffect(() => {
    Instabug.init({
      token: '',
      invocationEvents: [InvocationEvent.shake, InvocationEvent.floatingButton],
      debugLogsLevel: LogLevel.none,
    })

    setTimeout(() => {
      Instabug.setWelcomeMessageMode(WelcomeMessageMode.disabled)
      Instabug.setPrimaryColor(config.primaryColor)
      BugReporting.setReportTypes(config.reportTypes)
      NetworkLogger.setEnabled(config.enableNetworkLogger)
      Instabug.setIBGLogPrintsToConsole(config.ibgLogPrintsToConsole)
      CrashReporting.setEnabled(config.enableCrashReporting)
    }, 100)
  }, [])

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppContent />
    </SafeAreaProvider>
  )
}

function AppContent() {
  return (
    <View style={{ flex: 1 }}>
      <MyScreen />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default App
