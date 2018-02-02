// Imoprt libraries for making a component
import React from 'react';
import { View, Text } from 'react-native';

// Make a component
const Header = () => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>Albums!</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#C8C8C8',
    alignItems: 'center', // flex-start, center, flex-end
    justifyContent: 'flex-start' // flex-start (default), center, flex-end
  },
  textStyle: {
    fontSize: 20,
  }
};

// Make the component available to other parts of the app
export default Header;
