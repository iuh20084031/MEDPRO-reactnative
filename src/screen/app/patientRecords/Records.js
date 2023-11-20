import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Records = () => {
  return (
    <View style={{
        flex:1,
        alignItems: "center",

    }}>
      <View style={{}}>
        <View></View>
        <View>
            <Text style={{
                paddingLeft: 20, 
                paddingRight:10,
                paddingTop: 10,
                width: "100%"
                }}>
                Vui lòng chọn 1 trong các hồ sơ bên dưới, hoặc bấm vào biểu tượng ô trên để thêm hồ sơ người bệnh
            </Text>
        </View>
      </View>
    </View>
  )
}

export default Records

const styles = StyleSheet.create({})