import React, { FunctionComponent, useCallback, useEffect } from 'react';
import { ActivityIndicator, StyleSheet, FlatList, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LocationOverviewStackScreenProps } from '../../../navigation/LoggedInStackNavigator';
import useStore from '../../../store/store';
import { Location } from '../../../models/Location';
import Text from '../../../components/Text';
import { Card, ChevronRightIcon, Icon } from '@gluestack-ui/themed';
import { TouchableOpacity } from 'react-native-gesture-handler';

const LocationOverview: FunctionComponent<LocationOverviewStackScreenProps> = ({ navigation }) => {
	const {locations, fetchLocations, locationLoading } = useStore()



	const renderLocationItem = ({item}: {item: Location}) => (
		<TouchableOpacity onPress={() => navigation.navigate("DashboardMain")}>
			<Card style={styles.locationItemContainer}>
				<View>
					<View style={styles.locationItemTopContainer}>
						<Text style={{fontSize: 18}}>{item.name}</Text>
					</View>
					<View>
						<Text>{item.description}</Text>
					</View>
				</View>
				<View>
					<Icon
						as={ChevronRightIcon}	
					/>
				</View>
			</Card>
		</TouchableOpacity>

	)




	const refreshAvailableLocations = () => fetchLocations()

	useEffect(() => {refreshAvailableLocations()}, [])

	return (
		<SafeAreaView style={{ flex: 1, padding: 16, backgroundColor: '#ffffff' }}>
			<FlatList
				data={locations}
				renderItem={renderLocationItem}
				keyExtractor={(item) => item.location_id.toString()}
				onRefresh={refreshAvailableLocations}
				refreshing={locationLoading}
			/>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ffffff',
	},
	locationItemContainer: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignContent: "center"
	},
	locationItemTopContainer: {
		justifyContent: "space-between",
		flexDirection: "row",
		marginBottom: 16
	}
});

export default LocationOverview;
