import React, { FunctionComponent, useEffect, useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { AnimalListStackScreenProps } from '../../../navigation/AnimalStackNavigator';
import { SafeAreaView } from 'react-native-safe-area-context';
import useStore from '../../../store/store';
import { FlatList } from 'react-native';
import {
	Box,
	VStack,
	HStack,
	Image,
	Heading,
	Text,
	Icon,
	Actionsheet,
	ActionsheetBackdrop,
	ActionsheetContent,
	ActionsheetDragIndicator,
	ActionsheetDragIndicatorWrapper,
	ActionsheetItem,
	ActionsheetItemText,
	Center,
	ActionsheetIcon,
	Divider,
} from '@gluestack-ui/themed';
import { FilterIcon, SearchIcon, Heart, BanIcon, CheckCircle } from 'lucide-react-native';
import { Animal } from 'src/models/Animal';

const AnimalList: FunctionComponent<AnimalListStackScreenProps> = ({navigation}) => {
	const { animals, animalLoading, fetchAnimals, groups, fetchGroups, setSelectedAnimal } = useStore();
	const [searchQuery, setSearchQuery] = useState<string>('');
	const [showGroupSheet, setShowGroupSheet] = useState<boolean>(false);
	const [selectedGroupId, setSelectedGroupId] = useState<string>("ALL");
	const [filteredAnimals, setFilteredAnimals] = useState<Animal[]>();


	const handleGroupSheetClose = () => { setShowGroupSheet(false); }

	const handleGroupSheetOpen = () => { setShowGroupSheet(true); }

	const onGroupForFilterSelect = (groupId: string) => {
		setSelectedGroupId(groupId)

		handleGroupSheetClose()
	}

	const handleItemPress = (item: Animal) => {
		console.log('Navigate to details for:', item.name);

		setSelectedAnimal(item.animal_id)
		
		navigation.navigate("AnimalDetail")
	};

	useEffect(() => {fetchAnimalsAndGroups()}, []);

	const fetchAnimalsAndGroups = async () => {
		fetchAnimals();
		fetchGroups();
	}

	useEffect(() => {
		if (selectedGroupId === "ALL") {
			setFilteredAnimals(animals)
			return;
		}

		setFilteredAnimals(
			animals.filter((animal) => animal.group_id === selectedGroupId)
		)

	}, [selectedGroupId, animals])

	useEffect(() => {
		setFilteredAnimals(
		  animals.filter(animal =>
			animal.name.toLowerCase().includes(searchQuery.toLowerCase())
		  )
		);
	  }, [searchQuery, animals]);



	const renderAnimalItem = ({ item }: { item: Animal }) => {
		return (
			<TouchableOpacity onPress={() => handleItemPress(item)}>
				<Box
					borderRadius="$lg"
					overflow="hidden"
					my="$2"
					px="$4"
					py="$2"
					position="relative"
				>
					<HStack space="sm">
						<Image
							source={require("../../../assets/img/puppy.jpg")}
							alt={item.name}
							height={105}
							width={100}
							$xs-borderRadius="$lg"
							style={styles.image}
						/>
						<VStack flex={1} space="sm" px="$2">
							<Heading size="lg" color="$green800">{item.name}</Heading>
							<Text size="sm" color="$textLight500">{item.species}</Text>
							<HStack space="md">
								<VStack>
									<Text size="xs" color="$textLight400">Age</Text>
									<Text size="sm" fontWeight="bold">{item.age || 'Unknown'}</Text>
								</VStack>
								<VStack>
									<Text size="xs" color="$textLight400">Weight</Text>
									<Text size="sm" fontWeight="bold">{item.weight ? `${item.weight} ${item.weight_unit}` : 'Unknown'}</Text>
								</VStack>
							</HStack>
						</VStack>
					</HStack>
					<TouchableOpacity style={styles.heartIcon} onPress={() => console.log('Favorite', item.name)}>
						<Icon as={Heart} size="md" color="$green800" />
					</TouchableOpacity>
				</Box>
				<Divider/>
			</TouchableOpacity>
		);
	};

	return (
		<SafeAreaView style={styles.container} edges={['left', 'right', 'bottom']}>
			<Box px="$4" py="$2">
				<HStack space="md" alignItems="center">
					<Box flex={1} height={40} backgroundColor="$backgroundLight100" borderRadius="$full" px="$3" flexDirection="row" alignItems="center">
						<Icon as={SearchIcon} size="sm" color="$green800" mr="$2" />
						<TextInput
							style={styles.searchInput}
							placeholder="Search an animal..."
							value={searchQuery}
							onChangeText={setSearchQuery}
						/>
					</Box>
					<TouchableOpacity onPress={handleGroupSheetOpen}>
						<Icon as={FilterIcon} size="md" color="$green800" />
					</TouchableOpacity>
				</HStack>
			</Box>
			<FlatList
				data={filteredAnimals}
				renderItem={renderAnimalItem}
				keyExtractor={(item) => item.animal_id}
				contentContainerStyle={styles.animalListContainer}
				refreshing={animalLoading}
				onRefresh={fetchAnimalsAndGroups}
				ListEmptyComponent={() => (
					<Center style={{ flexDirection: "row" }}>
						<Icon as={BanIcon} size="sm" color="$green800" mr="$2" />
						<Text>No animals found..</Text>
					</Center>
				)}
			/>
			<Actionsheet isOpen={showGroupSheet} onClose={handleGroupSheetClose}>
				<ActionsheetBackdrop />
				<ActionsheetContent>
					<ActionsheetDragIndicatorWrapper>
						<ActionsheetDragIndicator />
					</ActionsheetDragIndicatorWrapper>
					<ActionsheetItemText style={{ padding: 10, fontSize: 16, fontWeight: 'bold' }}>Filters</ActionsheetItemText>
					
					<ActionsheetItem key="FAV" disabled={"ALL" === selectedGroupId} onPress={() => onGroupForFilterSelect("ALL")}>
						<ActionsheetIcon as={"ALL" === selectedGroupId && CheckCircle } size="md" style={{ marginRight: 10 }} />
						<ActionsheetItemText>Favourites</ActionsheetItemText>
					</ActionsheetItem>

					<ActionsheetItem key="ALL" disabled={"ALL" === selectedGroupId} onPress={() => onGroupForFilterSelect("ALL")}>
						<ActionsheetIcon as={"ALL" === selectedGroupId && CheckCircle } size="md" style={{ marginRight: 10 }} />
						<ActionsheetItemText>All</ActionsheetItemText>
					</ActionsheetItem>

					<ActionsheetItemText style={{ padding: 10, fontSize: 16, fontWeight: 'bold' }}>Available Groups</ActionsheetItemText>


					{groups.map((group) => {
						const isSelected = group.group_id === selectedGroupId;

						return (
							<ActionsheetItem key={group.group_id} disabled={isSelected} onPress={() => onGroupForFilterSelect(group.group_id)}>
								<ActionsheetIcon as={isSelected && CheckCircle } size="md" style={{ marginRight: 10 }} />
								<ActionsheetItemText>Group: {group.name}</ActionsheetItemText>
							</ActionsheetItem>
						);
					})}




				</ActionsheetContent>
			</Actionsheet>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	searchInput: {
		flex: 1,
		fontSize: 16,
		color: '#333',
	},
	animalListContainer: {
		padding: 16,
	},
	image: {
		marginBottom: -5,
	},
	heartIcon: {
		position: 'absolute',
		top: 10,
		right: 10,
		backgroundColor: '#e0f2f1',
		borderRadius: 20,
		padding: 5,
	},
});

export default AnimalList;
