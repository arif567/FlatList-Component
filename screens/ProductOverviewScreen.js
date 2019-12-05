import React from 'react'

import {FlatList,Text} from 'react-native'
import {useSelector} from 'react-redux'
import { isTSEnumDeclaration } from '@babel/types'

const ProductOverviewScreen =props =>{
    const products =useSelector(state.products.availableProducts)
    return( 
        <FlatList 
        data={products} 
        keyExtractor={item=>item.id} 
        renderItem={itemData=><Text>{itemData.item.title}</Text>}
        />
        )
}
export default ProductOverviewScreen