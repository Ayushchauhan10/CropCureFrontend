import { View, Text } from 'react-native'
import React from 'react'
import MCQPage from './src/components/mcqPage'
import Practioner from './src/components/practioner'
import Report from './src/components/report'
import ValidateReport from './src/components/validateReport'
import Input from './src/components/input'
const App = () => {
  return (
    <View>
    {/* <MCQPage/> */}
      <Practioner/>
      {/* <Report data={{
          patientName: "Khush",
          disease: "Warts",
          symptoms: "A small, raised bump on the skin",
          date: "Sep 8th,23",
          time: "14:05 hrs",
          location: "Lucknow",
          prescription: "Salicylic acid"
       }}/> */}
      {/* <ValidateReport data={{
          patientName: "Khush",
          disease: "Warts",
          symptoms: "A small, raised bump on the skin",
          date: "Sep 8th,23",
          time: "14:05 hrs",
          location: "Lucknow",
          prescription: "Salicylic acid",
          docName:"Dr. Kapil Mohan Sharma",
          reportId:"0234dc343",
          prevalenceRate:"77%",
          meterReading:"Mild"
       }}/> */}
       <Input/>

    </View>
  )
}

export default App