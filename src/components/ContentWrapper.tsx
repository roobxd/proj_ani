import React, {FunctionComponent, ReactElement} from 'react';
import {View, ViewStyle} from 'react-native';

export interface Props {
    style?: ViewStyle[],
    children: ReactElement
}


const contentBlockShadow: ViewStyle = {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    borderRadius: 20,
};

const contentBlock: ViewStyle = {
    ...contentBlockShadow,
    borderRadius: 5,
    backgroundColor: '#ffffff',
    padding: 12
};

const ContentWrapper: FunctionComponent<Props> = ({style, children}) => {
    return (
        <View style={[contentBlock, style]}>
            {children}
        </View>
    );
};

export default ContentWrapper;