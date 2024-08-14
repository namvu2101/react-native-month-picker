import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MonthPickerView } from '@vpn/react-native-month-picker';

export default function App() {
  const [value, setValue] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.value}>
        <Text style={styles.text}>{value}</Text>
      </View>
      <MonthPickerView
        valueInit={'2024/02'}
        onSelected={(date) => setValue(date)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
  value: {
    height: 40,
    width: 200,
    borderColor: '#ccc',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: { fontSize: 16, fontWeight: 'medium' },
});
