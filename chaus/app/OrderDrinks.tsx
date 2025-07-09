
import { TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

import {SearchBar} from '../components/SearchBar';

export default function OrderDrinks(){
    return(
        <ScrollView contentContainerStyle={styles.container}>
            <ThemedText type="title">ORDER DRINKS</ThemedText>
            <ThemedText>Because Chaus has such a high volume of customers, 
                customers are only able to order drinks made directly 
                from the register via the mobile app. Everything you 
                see here does not need the espresso bar for creation.</ThemedText>
            <SearchBar/>
        
        <TouchableOpacity>
            <ThemedText type="title">menu</ThemedText>
        </TouchableOpacity>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 16,
  },
});
