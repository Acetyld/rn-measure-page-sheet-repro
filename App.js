import React, { useRef, useState } from 'react';
import { Button, Modal, Text, View } from 'react-native';

export default function App() {
  const target = useRef(null);
  const [visible, setVisible] = useState(false);
  const [log, setLog] = useState('');
  const measure = () => {
    target.current?.measureInWindow((x, y) => setLog(`x=${x} y=${y}`));
  };
  return (
    <View style={{ flex: 1, padding: 24, paddingTop: 80 }}>
      <View ref={target} style={{ width: 60, height: 60, backgroundColor: 'red' }} />
      <Button title="Measure" onPress={measure} />
      <Text>{log}</Text>
      <Button title="Open page sheet" onPress={() => setVisible(true)} />
      <Modal visible={visible} presentationStyle="pageSheet" onRequestClose={() => setVisible(false)}>
        <Button title="Dismiss" onPress={() => setVisible(false)} />
      </Modal>
    </View>
  );
}
