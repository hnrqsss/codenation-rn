import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

function formatDate(date) {
    
    const options = {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    };

    return new Date(date).toLocaleDateString('pt-BR', options);
}


export default function AccelerationItem({ item }) {
  
    const defaultImage = item.banner_url === '' ? require('../../assets/images/default_image.png') : { uri: item.banner_url };

  return (
	  <View style={styles.container} key={item.slug} >
      <Image 
        source={defaultImage}
        style={styles.image}
        resizeMode={'cover'}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.location}>{item.location}</Text>
        <Text>{formatDate(item.start_at)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      height: 100,
      borderWidth: 0.3,
      borderColor: "#333",
      marginBottom: 16,
      flexDirection: 'row',
      overflow: 'hidden',
    },
    image: {
      height: 100,
      width: 100,
    },
    textContainer: {
      padding: 15,
      justifyContent: 'space-between',
    },
    title: {
      fontSize: 20,
      color: '#000'
    },
    location: {
      color: '#822DFF',
      fontSize: 16
    },
    date: {
      fontSize: 15,
    },
});
