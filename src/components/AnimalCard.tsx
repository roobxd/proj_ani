import { FunctionComponent } from "react";
import { View } from "react-native";
import FrostedOverlayComponent from "./FrostedOverlayComponent";
import Animal from "../models/Animal";

interface AnimalCardProps {
    animal: Animal
    onPress: () => void
}

const AnimalCard: FunctionComponent<AnimalCardProps> = ({animal, onPress}) => {
    const {animalName, description} = animal
    return (
        <FrostedOverlayComponent
            title={animalName}
            description={description}
            imgUrl="https://craftypixels.com/placeholder-image/200/ffffff/000000&text=Woohoo!"
            onPress={onPress}
        />

    )
}

export default AnimalCard;