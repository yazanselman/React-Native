import React from 'react';
import {Alert, Text, TouchableOpacity, View} from 'react-native';
import styles from './Card.style';

const Card = props => {
  return (
    <View style={styles.card_container}>
      <View style={styles.card_body}>
        <Text style={styles.card_title}>{props.title}</Text>
        <Text style={styles.card_text}>{props.text}</Text>
      </View>
      <TouchableOpacity
        style={styles.card_button_container}
        onPress={() => Alert.alert(props.title)}>
        <Text style={styles.card_button_container_text}>Like</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Card;
