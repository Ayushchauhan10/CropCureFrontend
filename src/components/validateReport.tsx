import React, { useState } from 'react';
import { View, Text, StyleSheet, Image,Share,Button } from 'react-native';
// import { Image } from 'react-native';

const ValidateReport = ({data}) => {
    const { patientName, disease, symptoms, date, time, location, prescription ,docName,reportId,prevalenceRate,meterReading} = data;

  return (
    <View style={styles.container}>
      {/* <Text>Hello</Text> */}
      <View style={styles.headercontainer}>
            <Text style={styles.headerText}>Report</Text>
      </View>
      
      <View style={styles.secondContainer}>
            <Text style={{fontSize:18,color:'rgba(0,78,150,1)'}}>Post Analysis Report</Text>
            <View style={styles.chatContainer}>
                {/* <View> */}
                <Text>Chat</Text>
                <Image
                        source={{uri:'data:image/png;base64,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'}}
                        style={{ width: 30, height: 30 ,borderRadius:50,}}
                />
            </View>
      </View>

        <View style={styles.infoContainer}>
    <View style={{ alignItems: 'center' }}>
        <View style={{flexDirection:'column',alignItems:'center',}}>
        <Image
        style={{ width: 100, height: 100, marginBottom: 10, borderRadius: 100, borderColor: 'black' }}
        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcJgbrT4WBPdXVO4f9ribR9CqkvFAZfr8J_JyIPPtyjWrH3VvQAnv4N0MPDfYjVrDXG3k&usqp=CAU' }}
        />
        <Text style={{fontSize:15,fontWeight:'500'}}>{meterReading}</Text>
        </View>
        
    </View>
    <Text style={styles.textContain}>
        <Text style={styles.labels}>Patient Name:</Text> {patientName}
    </Text>
    <Text style={styles.textContain}>
        <Text style={styles.labels}>Disease:</Text> {disease}
    </Text>
    <Text style={styles.textContain}>
        <Text style={styles.labels}>Symptoms:</Text> {symptoms}
    </Text>
    <Text style={styles.textContain}>
        <Text style={styles.labels}>Date:</Text> {date}
    </Text>
    <Text style={styles.textContain}>
        <Text style={styles.labels}>Time:</Text> {time}
    </Text>
    <Text style={styles.textContain}>
        <Text style={styles.labels}>Location:</Text> {location}
    </Text>
    <Text style={styles.textContain}>
        <Text style={styles.labels}>Prescription:</Text> {prescription}
    </Text>
    <Text style={styles.textContain}>
        <Text style={styles.labels}>Prevalence Rate:</Text> {prevalenceRate}
    </Text>
        </View>

        <View style={styles.validContainer}>
            
                <Text style={{fontSize:15,fontWeight:'500'}}>Validated By:</Text>
                {/* <Text>2</Text> */}
            
        <View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center',paddingHorizontal:8,gap:5}}>
            <Text style={{fontSize:20,fontWeight:'500',color:'black'}}>{docName}</Text>
            <Image
                    source={{ uri: 'data:image/jpeg;base64,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' }}
                    style={{ width: 20, height: 20,borderRadius:100, }}
            />
        </View>
            <Text>ReportID: {reportId}</Text>
        </View>

        <View style={styles.lastContainer}>
            <View style={styles.lastViewContainer}>
                <Text>Download </Text>
            </View>

            <View style={styles.lastViewContainer}>
                <Text>Share </Text>
            </View>
        </View >

        <View style={styles.barContainer}>
            <Image
                    source={{uri:'data:image/jpeg;base64,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'}}
                    style={{ width: 30, height: 30 ,borderRadius:50,}}
            />
            <Image
                    source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToO8xulPc2-VZXb2h7XwjyRpZOsZJbIz0dLQ&usqp=CAU'}}
                    style={{ width: 30, height: 30 ,borderRadius:50,}}
            />
            <Image
        source={{uri:'data:image/png;base64,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'}}
                    style={{ width: 30, height: 30 ,borderRadius:30,}}
            />
            
            
        </View>
    </View>
  )
}

export default ValidateReport;

const styles = StyleSheet.create({
    container:{
        backgroundColor:'rgba(135,206,235,0.2)',
        height: '100%',
        flexDirection:'column',
        gap:10,
        justifyContent: 'flex-start',
        alignItems:'center',
        
    },
    headercontainer:{
        // fontSize:100,
        paddingVertical:10,
        // backgroundColor:'white',
    },
    headerText:{
        paddingHorizontal:'4%',
        fontSize:30,
        fontWeight:'bold',
        color:'rgba(27,57,86,0.9)'
    },
    secondContainer:{
        flexDirection:'row',
        justifyContent:'flex-end',
        gap:35,
        alignItems: 'center',
        alignContent:'space-between',
        
    },
    chatContainer: {

        width: '25%',
        backgroundColor: 'skyblue',
        // paddingHorizontal: '5%',
        paddingVertical: '1%',
        // position: "absolute",
        // top: '9%',
        // right: '10%',
        flexDirection: 'row',
        alignContent:'space-between',
        justifyContent:'center',
        alignItems:'center',
        gap:10,
        borderRadius:15,
    
      },
      textContain: {
        fontSize: 18,
        fontWeight: 'bold',
        width: '100%',
      },
      labels: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 18,
        // flex: 1, // Take up half of the available space
      },
      infoContainer: {

        backgroundColor: 'skyblue',
        paddingVertical: '3%',
        paddingHorizontal: '4%',
        flexDirection: 'column',
        gap: 6,
        borderRadius: 15,
        width:'90%',
        alignItems:'center',
        justifyContent: 'center',
        alignContent:'center'
        // flex: 1, // Take up half of the available space
      },
      validContainer:{
           backgroundColor: 'rgba(128,128,128,0.3)',
           height:'12%',
           width:'85%',
           borderRadius:20,
           paddingVertical:8,
        //    justifyContent:'center'
        // alignContent: 'center',
        alignItems:'center',
      },
      barContainer:{
        backgroundColor:'rgba(128,128,128,0.5)',
        position: 'absolute',
        bottom:0,
        right:0,
        left:0,
        flexDirection:'row',
        height:'6.5%',
        alignItems:'center',
        justifyContent:'space-around',
        paddingHorizontal:'8%'
      },
      lastContainer:{

        flexDirection:'row',
        justifyContent:'space-between',
        // alignContent:'sp'
        gap:100

        // alignItems:'space-between',

      },
      lastViewContainer:{
        paddingVertical:10,
        paddingHorizontal:18,
        backgroundColor:'skyblue',
        borderRadius:200
      }
});