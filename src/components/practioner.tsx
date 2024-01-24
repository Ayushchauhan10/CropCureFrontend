import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet,TouchableOpacity,Linking ,TouchableHighlight,ScrollView} from 'react-native';
import { Image } from 'react-native';

// import Icon from 'react-native-vector-icons/FontAwesome5'; // Or the appropriate icon set you're using
// import Icon from 'react-native-vector-icons/FontAwesome'; 
const data = [
  {
    patientName: 'A',
    disease: 'Warts',
  },
  {
    patientName: 'B',
    disease: 'Vitiligo',
  },
  {
    patientName: 'C',
    disease: 'Psoriasis',
  },
  {
    patientName: 'D',
    disease: 'Urticaria',
  },
  {
    patientName: 'E',
    disease: 'Urticaria',
  },
  {
    patientName: 'F',
    disease: 'Urticaria',
  },
  {
    patientName: 'G',
    disease: 'Urticaria',
  },
  {
    patientName: 'H',
    disease: 'Urticaria',
  },
  {
    patientName: 'I',
    disease: 'Urticaria',
  },
];

const Practioner = () => {
  const renderItem = ({ item }: { item: { patientName: string; disease: string } }) => (
    <View style={styles.patientItem}>
      <Text style={styles.patientName}>Patient Name: {item.patientName}</Text>
      <Text style={styles.disease}>Disease: {item.disease}</Text>
    </View>
  );
  const handleLinkPress = () => {

    Linking.openURL('https://google.com');
  };
  const [activeTab, setActiveTab] = useState('New');

  const handleTabClick = (tabName:string) => {
    setActiveTab(tabName);
  };
  return (
    <View style={styles.mainContainer}>
      {/* First Section */}
      <View style={styles.topSection}>

        <View style={styles.TopOne}>
            <View style={styles.ImageSection}>
                <Image
                style={styles.Image1}
                source={{ uri: 'https://p7.hiclipart.com/preview/802/786/502/google-account-google-search-customer-service-google-logo-login-button.jpg' }}
                // style={{ }}
                />
            </View>
            <View>

                <Text style={styles.doctorName}>
                    Dr. Kapil Mohan Sharma
                    <Image
                    source={{ uri: 'data:image/jpeg;base64,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' }}
                    style={{ width: 20, height: 20,borderRadius:50, }}
                    />
                </Text>
                    
                <TouchableOpacity onPress={handleLinkPress}>
                    <Text style={styles.linkText}>@kapilSharmaDoc</Text>
                </TouchableOpacity>

                <Text style={styles.listItem}>- MBBS/MD, AIIMS Delhi</Text>
                <Text style={styles.listItem}>- One more Degree</Text>
                <Text style={styles.rating}><Text style={{color:'orange',}}>★★★</Text> Rated - EpiCure Expert</Text>
            </View>

        </View>

        <View style={styles.TopSecond}>
            <View style={styles.Loc}>
                {/* <Icon name="map-marker-alt" size={30} color="blue" /> */}
                <Image
                source={{ uri: 'data:image/png;base64,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' }}
                style={{ width: 20, height: 20 ,borderRadius:50,}}
                />
                <Text 
                style={{ fontSize:15,}}
                >Delhi,India</Text>
            </View>
            <View >
                <Image
                source={{ uri: 'data:image/png;base64,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' }}
                style={{ width: 70, height: 50 }}
                />
                {/* <Text style={styles.helpText}>Chat</Text> */}
            </View>
        </View>


      </View>


{/* ********************************************************************** */ }
      {/* Second Section */}
      <View style={styles.bottomSection}>
        <View style={styles.bottomOne}>
            <TouchableHighlight
                underlayColor="lightgray"
                style={[styles.tab, activeTab === 'New' && styles.activeTab]}
                onPress={() => handleTabClick('New')}
            >
                <Text
                 style={{fontWeight:'bold',fontSize:15,}}
                 >New (200+)</Text>
            </TouchableHighlight>

            <TouchableHighlight
                underlayColor="lightgray"
                style={[styles.tab, activeTab === 'Solved' && styles.activeTab]}
                onPress={() => handleTabClick('Solved')}
            >
                <Text
                 style={{fontWeight:'bold',fontSize:15}}>Solved (26+)</Text>
            </TouchableHighlight>
        </View>   
    <View style={styles.bottomTwo}>
            <ScrollView style={styles.detailContainer}>
          {data.map((item, index) => (
            <View key={index}
                style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center',}}>
              <View  style={styles.patientItem}>
                <Text style={styles.patientName}>Patient Name: {item.patientName}</Text>
                <Text style={styles.disease}>Disease: {item.disease}</Text>
              </View>
              <View style={{backgroundColor:'rgba(128, 183, 249, 0.9)',padding:3,borderRadius:50,width:60,height:25,alignItems:'center'}} >
                  <Text >
                    View
                  </Text>  
              </View>  

          </View>
          ))}
        </ScrollView>
      </View>  
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor:'rgba(128, 183, 249, 0.2)',
    margin:5,
    padding: 16,
  },
  topSection: {
    backgroundColor: 'white',
    padding:10,
    borderRadius:15,
    marginBottom: 16,
    gap: 5,
  },
  Name: {
    // flex:1,
    // flexDirection:'column',
    // marginBottom: 16,
  },
  TopOne: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    gap:15,
  },
  Image1:{
    borderRadius:50,
    width: 70,
    height:70,
  },

  ImageSection: {
    borderRadius: 50,
    borderColor: 'blue',
    width: 50,
    height: 50,
    marginRight: 16,
  },
  listItem: {
    fontWeight: 'bold',
    marginLeft: 30,
    // color:'grey', // Adjust the margin to control the indentation
},
linkText: {
      marginLeft: 5, // Adjust the margin to control the indentation
      marginBottom: 5, // Adjust the margin to control the indentation
    color: 'blue',
  },
  rating: {
    marginLeft: 5, 
    marginTop: 5,
    fontSize: 16,
    marginBottom: 8,
    fontWeight: 'bold',
    color: 'black',
  },
  

  Loc: {
    padding:5,
    marginTop:5,
    flexDirection: 'row', // Arrange children vertically
   justifyContent: 'flex-end', // Align text to the bottom
  alignItems: 'center', // Center children vertically
    marginBottom: 16,
},
tab: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0, // Remove border
    borderRadius:15,
    borderColor: 'transparent',
    backgroundColor:'lightgrey',
    transition: 'background-color 0.3s', // Set border color to transparent
  },
  activeTab: {
    backgroundColor: 'rgba(128, 183, 249, 1)',

  },
  
  TopSecond: {
    padding:5,
    flexDirection: 'row',
    alignItems: 'center', 
    justifyContent:'space-between',
  },

  bottomSection: {
    padding:2,
  },

  bottomOne:{
    // padding:10,
    backgroundColor:'lightgrey',
    flexDirection:'row',
    justifyContent:'space-around',
    borderRadius:15,
    margin:10,
  },
  bottomTwo:{
    padding:5,
    paddingBottom:5,
    marginBottom:10,
    width:'100%',
  },
  doctorName: {
    fontSize: 22,
    fontWeight: 'bold',
    color:'black',
  },
  credentials: {
    fontSize: 16,
    marginBottom: 8,
  },
  helpText: {
    fontSize: 16,
    marginTop: 0,
    margin: 16,
  },
  patientItem: {
    backgroundColor: '#f0f0f0',
    padding: 16,
    marginBottom: 8,
    borderRadius: 8,
  },
  patientName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  disease: {
    fontSize: 16,
  },

  detailContainer: {
    padding: 16,
    // paddingBottom:15,
    marginBottom:45,
  },
  item1: {
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
  },
});

export default Practioner;
