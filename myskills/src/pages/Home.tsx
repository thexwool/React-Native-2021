import React, { useEffect, useState } from "react"
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    FlatList
} from 'react-native'
import Button from "../components/Button"
import SkillCard from "../components/SkillCard"

interface SkillData {
    id: string
    name: string
}

export default function Home() {
    const [newSkill, setNewSkill] = useState('')
    const [mySkills, setMySkills] = useState<SkillData[]>([])
    const [greetings, setGreetings] = useState('')

    const handleNewAddSkill = () => {
        const data = {
            id: String(new Date().getTime()),
            name: newSkill
        }

        setMySkills(prevState => [...prevState, data])
    }

    const handleRemoveSkill = (id: string) => {
        setMySkills(prevState => prevState.filter(
            skill => skill.id !== id
        ))
    }

    useEffect(() => {
        const currentHour = new Date().getUTCHours()

        if (currentHour < 12) {
            setGreetings('Good morning')
        } else if (currentHour >= 12 && currentHour < 18) {
            setGreetings('Good afternoon')
        } else {
            setGreetings('Good night')
        }
    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Welcome, Allan!
            </Text>

            <Text style={styles.greetings}>
                {greetings}
            </Text>

            <TextInput
                style={styles.input}
                placeholder='New skill'
                placeholderTextColor='#555'
                onChangeText={setNewSkill}
            />

            <Button
                title='Add'
                onPress={handleNewAddSkill}
            />

            <Text style={[styles.title, { marginVertical: 50 }]}>
                My Skills
            </Text>

            <FlatList
                data={mySkills}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <SkillCard 
                        skill={item.name} 
                        onPress={() => handleRemoveSkill(item.id)}
                    />
                )}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121015',
        paddingHorizontal: 30,
        paddingTop: 75
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
    },
    greetings: {
        color: '#FFF'
    }
})