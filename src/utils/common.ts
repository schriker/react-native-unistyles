import { Platform } from 'react-native'

export const throwError = (message: string) => {
    throw new Error(`🦄 [react-native-unistyles]: ${message}`)
}

export const warn = (message: string) => {
    console.warn(`🦄 [react-native-unistyles]: ${message}`)
}

export const isWeb = () => Platform.OS === 'web'
