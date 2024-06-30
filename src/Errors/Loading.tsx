import { Box, Center, Text } from '@chakra-ui/react'
import '../background.css'
import theme from '../assets/theme';
import Typewriter from 'typewriter-effect';

const LoadingPage = () => {
    return (
        <Box className='gradient-background' minHeight="100vh">
            <Center h="100vh" flexDirection="column" justifyContent="center">
                <Text 
                as="div"
                marginBottom="4" 
                fontSize="xxx-large" 
                fontFamily={theme.fonts.text} 
                color='whitesmoke' 
                fontWeight='bold'
                >
                <Typewriter
                    options={{
                        autoStart: true,
                        loop: true
                    }}
                    onInit={(typewriter) => {
                        typewriter.typeString(`Loading...`)
                        .pauseFor(2500)
                        .deleteAll()
                        .start()             
                    }}>
                    </Typewriter>
                </Text>
            </Center>
        </Box>
    )
}

export default LoadingPage