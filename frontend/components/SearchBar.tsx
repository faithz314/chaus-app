import {useRef, useEffect} from 'react';
import {Button, View, StyleSheet, TextInput} from 'react-native';

export const SearchBar = () => {
    //initialize to null
    //reference to the actual TextInput component (DOM-like object in React Native)
    const inputRef = useRef<TextInput>(null);

    //imperatively clear input
    const clearInput = () => {
        inputRef.current?.clear();
    };

    //runs once after the component finishes rendering, due to the empty dependency array []
    useEffect(() => {
        //access the TextInput DOM/component via inputRef.current
        //calls .focus(), which opens the keyboard and focuses the input
        inputRef.current?.focus(); // focuses the keyboard on mobile
    }, []);

    return(
    <View>
    <TextInput
                style={styles.search}
                ref={inputRef}
                placeholder="Search for reg drinks..."
            />
      <Button title="Clear" onPress={clearInput} />
    </View>
    );
}

const styles = StyleSheet.create({
    search: {
        borderRadius: 8,
        borderColor: '#F49C84',
        borderWidth: 2,
        padding: 12,
        fontSize: 16,
        // backgroundColor: '#F49C84',
        color: 'white',
    },
});

