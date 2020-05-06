import React from 'react';
import {Dialog, Button, Portal, Paragraph} from 'react-native-paper';
import {StyleSheet} from 'react-native';

const Alert = ({visible, setVisible}) => {
  return (
    <Portal>
      <Dialog visible={visible} onDismiss={() => setVisible(false)}>
        <Dialog.Title style={styles.title}>Signup ?</Dialog.Title>
        <Dialog.Content>
          <Paragraph>
            Please contact the admin to register you to the App.
          </Paragraph>
          <Paragraph>Thank You!</Paragraph>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={() => setVisible(false)}>Cancel</Button>
          <Button onPress={() => setVisible(false)}>Ok</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

const styles = StyleSheet.create({
  title: {
    color: '#FF3A3A',
  },
});

export default Alert;
