import React from "react"
import { Text, View } from "react-native"
import { Card } from "../components/Card";
export function ViewAll({route, navigation}){
    const {results}= route.params;
    return(
        <View>
            <Card navigation={navigation} results={results} title="All"/>
        </View>

    )
}