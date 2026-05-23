import { Image } from 'expo-image';
import { Platform, StyleSheet, ScrollView , View } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TabTwoScreen() {
  const dotmUrl = '../../assets/images/feb-dotm.png'
  const koctmUrl = '../../assets/images/koc-of-the-month.png'


  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome Back, Rhea</ThemedText>
      </ThemedView>
     

      <ThemedText> 
        Hours: Week of August 26  
      </ThemedText>
      <ThemedText> 
        Live Updates   
      </ThemedText>
      <ThemedText> 
        Drinks of the month  
      </ThemedText>
      <Image
        source={require(dotmUrl)}
        style={styles.kocImage}
      />
      <ThemedText> 
        KOC of the month
      </ThemedText>
      <Image
        source={require(koctmUrl)}
        style={styles.kocImage}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    // justifyContent: 'center',
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
