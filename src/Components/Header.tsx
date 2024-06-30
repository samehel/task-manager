import { Box, Heading } from '@chakra-ui/react'
import theme from '../assets/theme'

const Header = () => {
  return (
    <Box 
        position='fixed' 
        top="0" 
        width="calc(100% - 2rem)"
        left="1rem"
        bg="linear-gradient(190deg, rgba(155, 155, 255, 1.8), rgba(255, 155, 255, 0.5))"        
        zIndex="1"
        boxShadow="lg"
        backdropFilter="blur(10px)"
        py="4"
        borderRadius="xl" 
        >
            <Heading fontFamily={theme.fonts.text} color="indigo" textAlign="center" m="2">
                My Daily Task Manager
            </Heading>
    </Box>
  )
}

export default Header