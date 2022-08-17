import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput
} from 'react-native'
import Button from "../components/Button";
import SkillCard from "../components/SkillCard";

export default function Home() {
    const [newSkill, setNewSkill] = useState()
    const [mySkills, setMySkills] = useState([])

    const handleNewAddSkill = () => {
        setMySkills(prevState => [...prevState, newSkill])
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Welcome, Allan!
            </Text>

            <TextInput
                style={styles.input}
                placeholder='New skill'
                placeholderTextColor='#555'
                onChangeText={setNewSkill}
            />

            <Button />

            <Text style={[styles.title, { marginVertical: 50 }]}>
                My Skills
            </Text>

            {
                mySkills.map(skill => (
                    <SkillCard />
                ))
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121015',
        paddingVertical: 70,
        paddingHorizontal: 20,
        paddingHorizontal: 30
    },
    title: {
        color: '#FFF',
        fontSize: 24,
        fontWeight: 'bold'
    },
    input: {
        backgroundColor: '#1F1E25',
        color: '#FFF',
        fontSize: 18,
        padding: 15,
        marginTop: 30,
        borderRadius: 7
    }
})