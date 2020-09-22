import React from 'react';
import {Text, View, Modal, StyleSheet} from 'react-native';
import CardSection from './CardSection';
import {Button} from 'react-native-elements';

export default function ConfirmModal({message, onConfirm, onDecline, visible}) {
const {containerStyle, textStyle, cardSectionStyle} = styles;

  return (
      <Modal
        visible={visible}
        transparent
        animationType="slide"
        onRequestClose={() => {}}
      >
        <View style = {containerStyle}>
          <CardSection style={cardSectionStyle}>
            <Text style={textStyle}>{message}</Text>
          </CardSection>
          <CardSection style={cardSectionStyle}>
            <Button
              title="Confirm"
              onPress={() => onConfirm()}
              containerStyle={styles.button}
            />
            <Button
              title="Decline"
              onPress={() => onDecline()}
              containerStyle={styles.button}
            />
          </CardSection>
        </View>
      </Modal>
  );
}

const styles = StyleSheet.create({
  cardSectionStyle: {
    justifyContent: 'center'
  },
  textStyle: {
    flex: 1,
    textAlign: 'center',
    lineHeight: 40,
    color: 'white',
    fontSize: 20
  },
  button: {
    flex: 1,
    margin: 5
  },
  containerStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center',
  }
});
