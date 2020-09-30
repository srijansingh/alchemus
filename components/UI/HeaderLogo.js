import React from 'react'
import { Image } from 'react-native'

const HeaderLogo = () => {
    return (
        <Image
        source={require('../../assets/elements/logo.png')}
        style={{ alignSelf: 'center' }}
  />
    )
}

export default HeaderLogo
