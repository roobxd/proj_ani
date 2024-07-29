import React, {FunctionComponent, memo} from 'react';
import {Text as RNText, TextProps} from 'react-native';

const Text: FunctionComponent<TextProps> = memo(({children, ...props}) => {

    return (
        <RNText
            style={[{fontFamily: 'Roboto-Regular', fontSize: 14, color: "#121212"}, props.style]}
            {...props}
        >
            {children}
        </RNText>
    );
});

export default memo(Text);