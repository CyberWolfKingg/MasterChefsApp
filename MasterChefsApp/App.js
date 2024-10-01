import React from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  // Sample menu data
  const menu = [
    { dishName: 'Grilled Salmon', description: 'Served with lemon butter sauce', course: 'Main', price: 'R150' },
    { dishName: 'Chocolate Cake', description: 'Delicious chocolate dessert', course: 'Dessert', price: 'R80' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Christoffel's Menu</Text>
      <FlatList
        data={menu}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.menuItem}>
            <Text>{item.dishName}</Text>
            <Text>{item.description}</Text>
            <Text>{item.course} - R{item.price}</Text>
          </View>
        )}
      />
      <Button
        title="Add New Menu Item"
        onPress={() => navigation.navigate('AddMenuItem')}
      />
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  menuItem: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
  },
});
