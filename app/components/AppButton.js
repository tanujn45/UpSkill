import React from "react";
import { View, Text, StyleSheet, TouchableHighlight, TouchableOpacity } from "react-native";
import colors from "../constants/colors";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";


const AppButton = ({ bgColor = colors.grey, fontColor = colors.white, icon, iconColor = colors.white, title = "Continue", onPress }) => {
    return (
        <TouchableOpacity activeOpacity={0.8} style={[styles.btnContainer, { backgroundColor: bgColor }]} onPress={onPress}>
            {icon ? <AntDesign name={icon} size={20} color={iconColor} style={styles.icon} />
                : <></>}
            <Text style={[styles.btnTitle, { color: fontColor }]}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    btnContainer: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        backgroundColor: colors.grey,
        borderRadius: 8,
        marginBottom: 15,
        flexDirection: 'row',
    },
    btnTitle: {
        color: colors.white,
        fontSize: 16,
        fontWeight: '500',
        textTransform: 'uppercase',
    },
    icon: {
        marginRight: 7,
    }
})

export default AppButton;
