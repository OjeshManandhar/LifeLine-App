import React from 'react';
import {
  Dialog,
  Button,
  Portal,
  Paragraph,
  Divider,
  Avatar,
} from 'react-native-paper';
import {StyleSheet} from 'react-native';

const UserProfile = ({visible, setVisible, data, imgUrl}) => {
  if (!data) {
    return null;
  }
  return (
    <Portal>
      <Dialog visible={visible} onDismiss={() => setVisible(false)}>
        <Dialog.Content style={styles.Header}>
          {data ? (
            <Avatar.Image
              source={{
                uri: imgUrl,
              }}
              size={80}
            />
          ) : (
            <Avatar.Text label="U" size={80} />
          )}

          <Paragraph style={styles.Name}>{data.name.toUpperCase()}</Paragraph>
        </Dialog.Content>
        <Divider />
        <Dialog.Content style={styles.infoContainer}>
          <Paragraph>Your Information</Paragraph>
          <Paragraph>Driver ID: {data.driver_id}</Paragraph>
          <Paragraph>Contact: {data.contact}</Paragraph>
          <Paragraph>Email: {data.email}</Paragraph>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={() => setVisible(false)}>Logout</Button>
          <Button onPress={() => setVisible(false)}>Back</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

const styles = StyleSheet.create({
  Header: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Name: {
    fontSize: 18,
    marginTop: 5,
  },
  infoContainer: {
    marginTop: 15,
  },
});

export default UserProfile;
