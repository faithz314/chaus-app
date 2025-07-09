import { Image } from 'expo-image';
import { TouchableOpacity, StyleSheet, ScrollView , View } from 'react-native';
import { ThemedText } from '@/components/ThemedText';


export default function Order() {
  const regDrinksURL = '../../assets/images/order-drinks.png'
  const cateringURL = '../../assets/images/cater.png'
  const vouchersURL = '../../assets/images/vouchers.png'


  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity>
        <View style={styles.option}>
          <Image 
            source={require(regDrinksURL)}
            style={styles.kocImage}
          />
          <ThemedText type="title">
            ORDER REG DRINKS
          </ThemedText>
        </View>
     </TouchableOpacity>
    <TouchableOpacity>
      <View style={styles.option}>
        <Image 
          source={require(cateringURL)}
          style={styles.kocImage}
        />
        <ThemedText type="title">
          CATER
        </ThemedText>
      </View>
    </TouchableOpacity>
    <TouchableOpacity>
      <View style={styles.option}>
        <Image 
          source={require(vouchersURL)}
          style={styles.kocImage}
        />
        <ThemedText type="title">
          VOUCHERS
        </ThemedText>
      </View>
    </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    padding: 30
  },
  option: {
    gap: 8,
    margin: 20,
    borderColor: '#F49C84',
    borderWidth: 2,
    borderRadius: 10
  },
  kocImage: {
    width: 300,
    height: 100,
  },
});
