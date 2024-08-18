import React from 'react'
import { StyleSheet, Text } from 'react-native'
import theme from '../theme'

const StyledText = StyleSheet.create({
    text: {
        color: theme.colors.textPrimary,
        fontSize: theme.fontSizes.body,
        fontFamily: theme.fonts.main,
        fontWeight: theme.fontWeights.normal
    },
    colorPrimary:{
        color: theme.colors.textPrimary,
    },
    colorSecondary: {
        color: theme.colors.textSecondary,
    },
    bold:{
        fontWeight: theme.fontWeights.bold,
    },
    subheading: {
        fontSize: theme.fontSizes.subheading,
    },
    textAlingCenter:{
        textAlign: "center",
    },
    textTransformUpperCase:{
        textTransform: "uppercase",
    }
})

export default function StyledText({
    textTransform, align, children, color, fontSize, fontWeight, styles, ...restOfProps
}){
    const textStyles = [
        styles.text,
        textTransform === "uppercase" && styles.textTransformUpperCase,
        align === "center" && styles.textAlingCenter,
        color === "primary" && styles.colorPrimary,
        color === "secondary" && styles.colorSecondary,
        fontSize === "subheading" && styles.subheading,
        fontWeight === "bold" && styles.bold
    ]
    return (
        <Text style={textStyles} {...restOfProps}>
            {children}
        </Text>
    )
}