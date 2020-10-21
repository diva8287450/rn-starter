import React, { useReducer } from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const reducer = (state,action) =>{
  //state ==={ count: number}
  //action === {type: 'increament' ||'decreament',payload: 1}

  switch(action.type){
    case 'increament':
      return{...state, count: state.count + action.payload };
    case 'decreament':
      return{...state, count: state.count - action.payload }
  }


}

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer,{ count: 0});

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
         dispatch({type: 'increament', payload: 1}) 
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          dispatch({type: 'decreament', payload: 1}) 
          
        }}
      />
      <Text style={styles.textStyle}>Current Count:{state.count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
  },
  subHeaderStyle: {
    fontSize: 20,
  },
});

export default CounterScreen;
