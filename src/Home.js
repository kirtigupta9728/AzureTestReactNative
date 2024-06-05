import { View, Text } from 'react-native'
import React, { useEffect } from 'react'

export default function Home() {

  useEffect(()=>{
   getData();
  },[]) 
  
  const getData=async()=>{
    const url='https://jsonplaceholder.typicode.com/todos/1';
    const res=await fetch(url);
    const resJson=await res.json();
    console.log('resJson',resJson)
  }
  return (
    <View>
      <Text>Home</Text>
    </View>
  )
}