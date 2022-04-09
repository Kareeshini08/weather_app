import { StatusBar } from 'expo-status-bar';
import { ImageBackground, KeyboardAvoidingView, Platform, StyleSheet, Text, View } from 'react-native';
import searchInput from './components/searchInput';
import getImageWeather from './utils/getImageWeather';

export default function App() {
  return (
    handleUpdateLocation = async city =>{
      if(!city) return ;
      this.setSate({loading: true}, async () =>{
        try
        { const locationId= await fetchLocationId(city);
          const {location,weather,temperature} = await fetchWeather(locationId,weather,temperature);
        }
        finally
        {
          
        }
      }
      )
    }

    
      )

  
}
    <KeyboardAvoidingView style={styles.container} behavior="padding">
    <ImageBackground
    source={getImageWeather(weather)}
    style={styles.imageContainer}
    imageStyle={styles.image}>
    <View style={styles.container}>
      <Text style={[styles.textStyle,styles.largeText]}>SHANGHAI</Text>
      <Text style={[styles.smallText,styles.textStyle]}>Light Cloud</Text>
      <Text style={[styles.smallText,styles.textStyle]}>23 Degrees</Text>
    <searchInput placeholder="search any city" onSubmit={this.handleUpdateLocation}/>
    </View>
    </ImageBackground>
    </KeyboardAvoidingView>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle:{
    textAlign:'center',
    fontFamily:Platform.OS == 'ios' ? 'AvenirNext-Regular' : 'Roboto',
  },
  largeText:
  {
    fontSize: 45,
  },

  smallText:{
    fontSize:20,
  },

  textInput:
  {
  backgroundColor:'blue',
  color:'black',
  height:45,
  width:300,
        backgroundColor:'#666',
        color:'black',
        marginTop:25,
        marginHorizontal:20,
        paddingHorizontal:10,
        alignSelf:'center',
  }
});
