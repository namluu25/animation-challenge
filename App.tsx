import React, {useEffect, useRef} from 'react';
import {Animated, View} from 'react-native';

const App = () => {
  const fade = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    console.log(fade);
    Animated.timing(fade, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fade]);

  return (
    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <Animated.View
        style={{
          opacity: fade,
          width: 100,
          height: 100,
          borderRadius: 100,
          backgroundColor: 'red',
        }}
      />
    </View>
  );
};

export default App;
