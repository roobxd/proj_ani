import React, { FunctionComponent, useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, ScrollView, StatusBar, View } from 'react-native';
import { AnimalDetailStackScreenProps } from '../../../navigation/AnimalStackNavigator';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  Box,
  VStack,
  HStack,
  Image,
  Heading,
  Text,
  Icon,
  Divider,
  Tabs,
  TabsTab,
  TabsTabList,
  TabsTabPanel,
  TabsTabPanels,
} from '@gluestack-ui/themed';
import { Heart, CalendarIcon, InfoIcon, UtensilsIcon, ArrowLeft } from 'lucide-react-native';
import useStore from 'src/store/store';

const AnimalDetail: FunctionComponent<AnimalDetailStackScreenProps> = ({ route, navigation }) => {
  const { animals } = useStore();
  const [isFavorite, setIsFavorite] = useState(false);
  const animal = animals[0];


  useEffect(() => {
    StatusBar.setBarStyle('light-content');
    return () => {
      StatusBar.setBarStyle('dark-content');
    };
  }, []);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Image
          source={require("../../../assets/img/puppy.jpg")}
          alt={animal.name}
          style={styles.headerImage}
        />
        <SafeAreaView edges={['top']} style={styles.headerContent}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon as={ArrowLeft} size="md" color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.heartIcon} onPress={toggleFavorite}>
            <Icon as={Heart} size="md" color={isFavorite ? "$red500" : "white"} />
          </TouchableOpacity>
        </SafeAreaView>
        
        <Box style={styles.contentContainer}>
          <VStack space="md" px="$4" pt="$4">
            <Heading size="xl" color="$green800">{animal.name}</Heading>
            <Text size="md" color="$textLight500">{animal.species}</Text>

            <HStack space="xl" mt="$2">
              <VStack>
                <Text size="sm" color="$textLight400">Age</Text>
                <Text size="md" fontWeight="bold">{animal.age || 'Unknown'}</Text>
              </VStack>
              <VStack>
                <Text size="sm" color="$textLight400">Weight</Text>
                <Text size="md" fontWeight="bold">{animal.weight ? `${animal.weight} ${animal.weight_unit}` : 'Unknown'}</Text>
              </VStack>
              <VStack>
                <Text size="sm" color="$textLight400">Group</Text>
                <Text size="md" fontWeight="bold">aaaaa</Text>
              </VStack>
            </HStack>

            <Divider my="$2" />

            <Tabs>
              <TabsTabList>
                <TabsTab><Icon as={InfoIcon} mr="$2" /><Text>General</Text></TabsTab>
                <TabsTab><Icon as={UtensilsIcon} mr="$2" /><Text>Feeding</Text></TabsTab>
                <TabsTab><Icon as={CalendarIcon} mr="$2" /><Text>Schedule</Text></TabsTab>
              </TabsTabList>
              <TabsTabPanels>
                <TabsTabPanel>
                  <Text>asaasaasffssavasvaavvasvs</Text>
                </TabsTabPanel>
                <TabsTabPanel>
                  {/* <VStack space="sm">
                    {animal.feedingInstructions.map((instruction, index) => (
                      <Text key={index}>• {instruction}</Text>
                    ))}
                  </VStack> */}
                </TabsTabPanel>
                <TabsTabPanel>
                  {/* <VStack space="sm">
                    {animal.feedingSchedule.map((schedule, index) => (
                      <HStack key={index} space="sm" alignItems="center">
                        <Icon as={CalendarIcon} size="sm" />
                        <Text>{schedule}</Text>
                      </HStack>
                    ))}
                  </VStack> */}
                </TabsTabPanel>
              </TabsTabPanels>
            </Tabs>
          </VStack>
        </Box>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    flexGrow: 1,
  },
  headerImage: {
    width: '100%',
    height: 300, 
    resizeMode: 'cover',
  },
  headerContent: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -20,
  },
  heartIcon: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 20,
    padding: 8,
  },
});

export default AnimalDetail;