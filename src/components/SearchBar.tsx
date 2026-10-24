import { StyleSheet, TextInput, Text, View, Pressable } from 'react-native';

interface SearchBarProps {
  city: string;
  onSearch: () => void;
  onChangeText: (value: string) => void;
}

export const SearchBar = ({ city, onSearch, onChangeText }: SearchBarProps) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter the city"
        value={city}
        onChangeText={onChangeText}
        onSubmitEditing={onSearch}
      />
      <Pressable style={styles.button} onPress={onSearch}>
        <Text style={styles.buttonText}>🔍</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 20,
  },

  input: {
    flex: 1,
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    backgroundColor: '#fff',
  },

  button: {
    width: 50,
    height: 50,
    borderRadius: 12,
    backgroundColor: '#2563eb',
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    fontSize: 22,
  },
});
