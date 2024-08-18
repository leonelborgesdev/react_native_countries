import React from 'react'
import { StyleSheet } from 'react-native'
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

export default StyledText