import { Image } from 'expo-image';
import { Button, Platform, StyleSheet, ScrollView , View } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function About() {
  const dotmUrl = '../../assets/images/feb-dotm.png'
  const koctmUrl = '../../assets/images/koc-of-the-month.png'


  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ThemedText>About</ThemedText>
      
      <View>
        <ThemedText>
          Rice Coffeehouse is a student run coffeehouse on Rice University's campus. 
          We are managed and staffed by students with guidance from our two wonderful 
          advisors Caitlin and Cristy. As a Student Run Business, Coffeehouse managers 
          work together to make sure that the rent is paid, the products are served, 
          the catering orders are filled, health code is followed, and a good time 
          is had by all that come to Coffeehouse.
        </ThemedText>
      </View>
      <View>
        <ThemedText>Values</ThemedText>
        <ThemedText>
          Coffeehouse loves sustainability. Our sustainability efforts include our 
          Bring Your Own Mug Discount, Coffeehouse Sustainability Week, 
          Fair Trade/Direct Trade Coffee from Katz, in-house mugs, recycling, 
          100% Recycled Content Napkins, and a linen. In 2020, we created the Bean Fund, 
          through which we will donate $1000 a year to causes we believe in.
        </ThemedText>
      </View>
      <View>
        <ThemedText>KOCs</ThemedText>
        <ThemedText>
          Keepers of Coffee, known around Rice as KOCs, are the baristas who keep Coffeehouse 
          running. The key to why KOCs are so special? All employees are regular Rice students! 
          We balance our academic schedules with our passion for making lots and lots of coffee, 
          exactly how you want it. We take a lot of pride in making Coffeehouse a place where we, 
          and all of Rice, can feel at home. It’s this dedication–and a healthy dose of shenanigans–
          that make Chaus, Chaus.
        </ThemedText>
      </View>
      <View>
        <ThemedText>Our Partners</ThemedText>
        {/* <Image
          source={require('')}
          style={styles.kocImage}
        /> */}
      </View>
      <Button
        title= "Learn More About Our Sustainability"
      ></Button>
        <Image
          source={require('../../assets/images/2024-25-managers.png')}
          style={styles.kocImage}
        />
      <Button
        title= "Meet The Managers"
      ></Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center'
  },
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  kocImage: {
    width: 300,
    height: 300,
    marginVertical: 10,
  },
});
