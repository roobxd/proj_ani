import { FunctionComponent, ReactElement } from "react";
import { StyleSheet, View } from "react-native";
import Title from "./Title";

interface DashboardItemProps {
    title: string;
    content: ReactElement;
}

const DashboardItem: FunctionComponent<DashboardItemProps> = ({title, content}) => {
    return (
        <View style={styles.container}>
            <Title mainText={title}/>
            {content}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 24,
    }
})

export default DashboardItem;