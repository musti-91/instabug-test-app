import React, { useEffect } from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import { TrueSheet } from '@solidx/react-native-true-sheet'
import Instabug from 'instabug-reactnative'

export function MyScreen() {
  const [isVisible, setIsVisible] = React.useState(false)
  const sheetRef = React.useRef<TrueSheet>(null)

  useEffect(() => {
    console.log('sheetRef.current:', sheetRef.current)
  }, [sheetRef.current])

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <TouchableOpacity
        onPress={() => {
          Instabug.show()
        }}
      >
        <Text
          style={{
            fontSize: 16,
            fontWeight: '600',
            color: '#007AFF',
            marginBottom: 20,
          }}
        >
          {'Report a bug'}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: '#007AFF',
          padding: 12,
          borderRadius: 8,
          marginBottom: 20,
        }}
        onPress={() => {
          if (isVisible) {
            sheetRef.current?.dismiss()
            setIsVisible(false)
          } else {
            sheetRef.current?.present()
            setIsVisible(true)
          }
        }}
      >
        <Text>{isVisible ? 'Hide Sheet' : 'Show Sheet'}</Text>
      </TouchableOpacity>
      <TrueSheet
        onDismiss={() => {
          setIsVisible(false)
        }}
        ref={sheetRef}
        sizes={['medium']}
        contentContainerStyle={{ flex: 1 }}
        cornerRadius={24}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            padding: 20,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 16 }}>
            Sheet Content
          </Text>
          <Text style={{ marginBottom: 12, lineHeight: 20 }}>
            This is a bottom sheet with customizable content. You can add any
            React Native components here.
          </Text>
          <TouchableOpacity
            onPress={() => {
              sheetRef.current?.dismiss()
              setIsVisible(false)
            }}
            style={{
              backgroundColor: '#007AFF',
              padding: 12,
              borderRadius: 8,
              marginTop: 200,
            }}
          >
            <Text
              style={{ color: 'white', textAlign: 'center', fontWeight: '600' }}
            >
              Close Sheet
            </Text>
          </TouchableOpacity>
        </View>
      </TrueSheet>
    </View>
  )
}
