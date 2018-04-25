import React from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Header,
  Photo,
  Text,
  Profile,
  Divider,
  PhotoInfo
} from 'react-native-minimalist';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  mobile: {
    width: 375
  }
});

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.mobile}>
          <Header>Minimalist</Header>
          <Text>john-tierney.com</Text>
          <Divider fullWidth />
          <PhotoInfo
            photo={{
              uri:
                'https://scontent-lht6-1.cdninstagram.com/vp/8b749f16d5cadd6e680b479af5f237b0/5B68909F/t51.2885-19/10963846_377118132473154_1350059129_a.jpg'
            }}
            title="john_tierney_art"
          />
          <Photo
            imageURL={
              'https://scontent-lht6-1.cdninstagram.com/vp/43d6f9d19b29dbfc7b58c46a92ed425c/5B5770F5/t51.2885-15/e35/30602084_186676038631423_7930424840232632320_n.jpg'
            }
          />
        </View>
      </View>
    );
  }
}
