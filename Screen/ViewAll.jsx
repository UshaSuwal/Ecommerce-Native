import React from "react"
import { ScrollView, Text, View } from "react-native"
import { Card } from "../components/Card";
export function ViewAll({route, navigation}){
    const {results}= route.params;
    return(
        <ScrollView style={{padding:20, backgroundColor:"rgb(255 237 213)"}}>
            <Card navigation={navigation} results={results} title="All"/>
        </ScrollView>

    )
}