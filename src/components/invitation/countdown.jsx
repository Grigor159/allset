import { HStack, Text } from '@chakra-ui/react'
import React from 'react'

export const Countdown = ({ value, label, isMobile }) => {
  return (
     <HStack px={isMobile ? "10px" : "18px"} align="baseline" gap="6px">
       <Text
         fontSize={isMobile ? "36px" : "50px"}
         fontWeight="400"
         color="var(--c-primary)"
         lineHeight="28px"
       >
         {value}
       </Text>
       <Text
         fontSize={isMobile ? "12px" : "34px"}
         fontWeight="400"
         color="var(--c-primary)"
         lineHeight="28px"
         textTransform="lowercase"
       >
         {label}
       </Text>
     </HStack>
  )
}
