
import { Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { NativeWindStyleSheet } from "nativewind";

const Thumbnail = ({item, renderImageItem}) => {
const {id, imageUrl, thumbnailUrl, imageAltText, thumbnailAltText} = item

const onPressThumbnail = () => {
    renderImageItem({id})
    // console.log(id)
}

    return (
    <TouchableOpacity onPress={onPressThumbnail}>
    <Image
        id={id} source={{uri: thumbnailUrl}}
        // className="h-20 w-20 rounded"
        style={{height: 60, width: 60, borderRadius: 3, margin: 3}}
        alt={item.thumbnailAltText}
    />
    </TouchableOpacity>
  )
}

export default Thumbnail

// const styles = StyleSheet.create({})

NativeWindStyleSheet.setOutput({
  default: "native",
});