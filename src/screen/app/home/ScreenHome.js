import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeaderHome from '../component/HeaderHome'

const ScreenHome = () => {
  return (
    <ScrollView>
      <SafeAreaView>
      <HeaderHome/>
      <Text style={{ fontSize :25, marginBottom : 50}}>Hallo</Text>
      <Text style={{ fontSize :25, marginBottom : 50}}>Hallo</Text>
      <Text style={{ fontSize :25, marginBottom : 50}}>Hallo</Text>
      <Text style={{ fontSize :25, marginBottom : 50}}>Hallo</Text>
      <Text style={{ fontSize :25, marginBottom : 50}}>Hallo</Text>
      <Text style={{ fontSize :25, marginBottom : 50}}>Hallo</Text>
      <Text style={{ fontSize :25, marginBottom : 50}}>Hallo</Text>
      <Text style={{ fontSize :25, marginBottom : 50}}>Hallo</Text>
    </SafeAreaView>
    </ScrollView>
  )
}

export default ScreenHome

const styles = StyleSheet.create({})