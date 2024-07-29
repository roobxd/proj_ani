import { FunctionComponent } from "react"
import ContentWrapper from "./ContentWrapper"
import Group from "../models/Group"
import Text from "./Text"
import { TouchableOpacity, ViewStyle } from "react-native"

interface GroupItemProps {
    group: Group
    style?: ViewStyle[]
    onPress?: () => void
}

const GroupItem: FunctionComponent<GroupItemProps> = ({group, style, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <ContentWrapper style={style}>
                <Text>{group.name}</Text>
            </ContentWrapper>
        </TouchableOpacity>

    )
}

export default GroupItem;