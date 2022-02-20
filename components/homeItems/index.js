import { View, Text } from 'react-native'
import React from 'react'

const HomeItems = (props) => {
    const {dispatch, userTodoList, userInfo} = props

    const typeUserTodoList = [[],[],[],[],[]]
    
    userTodoList.todoList && userTodoList.todoList.forEach(item => {
        typeUserTodoList[item.type].push(item)
    });

    const mapUserTodoList = typeUserTodoList.map((typeList)=>{
        return typeList.map(listItem=>{
            return(
                <View key={listItem.title}>
                    <Text>{listItem.title}</Text>
                    <Text>{listItem.content}</Text>
                    <Text>{listItem.type}</Text>
                </View>
            )
        })
        
    })



    console.log(typeUserTodoList);

    return (
        <View>
            {mapUserTodoList}
        </View>
    )
}

export default HomeItems