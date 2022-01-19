import axios from "axios";
import React from "react";
import { View, Text,FlatList , StyleSheet, Dimensions, Image,Button} from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import newsApiRequest from '../service/NewsAPIService';
const { width, height } = Dimensions.get('window')

export default function Apidata() {
  const [post, setPost] = React.useState(null);
  React.useEffect(() => {
    newsApiRequest({queryString: "messi", date: "2022-01-17"}).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;


  const NewsCard = ({item}) => {
    console.log(item)
    return (
        <View style={styles.main}>
            <Text style={styles.title} 
                  onPress={() => WebBrowser.openBrowserAsync(item.url)}>{item.title}</Text>
            
            <Image style={styles.image} source={item.urlToImage ? {uri: item.urlToImage } : null}/>
            
        </View>
    )
}

  return (
    <View style ={{backgroundColor:'white',flex: 1,justifyContent:'center', }}>
      <FlatList data={post.articles}
                keyExtractor={(item, index) => 'key' + index}
                renderItem={({item}) => {
                    return <NewsCard item = {item}/>
                }}
            />

      
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
      backgroundColor: 'white',
      margin: width * 0.03,
      shadowColor: '#000',
      shadowOffset: { width:0.5, height: 0.5 },
      shadowOpacity: 0.5,
      shadowRadius: 3,  
      flexDirection: 'row'    
  },
  title: {
      marginHorizontal: width * 0.05,
      marginVertical: width * 0.03,
      color: 'black',
      fontSize: 18,
      fontWeight: 'bold',
      width:'60%'
    

  },
  image: {
      height: height / 8,
      width: '30%'
  },
  

})
