import { Box, Center, Text } from '@chakra-ui/react'
import '../background.css'
import theme from '../assets/theme';

const ConnectionError = () => {
    const errorMessages = [
      'Looks like you\'re still having issues connecting...\n',
      'Looks like you\'re not going anywhere\n',
      'Keep trying to connect, eventually you will\n',
      'Connection issues? Try connecting again\n',
      'Looks like we\'re gonna be here a while\n'
    ]
    const errorMessagesItalic = [
        'Did you run the server?',
        'Unless if you maybe run the server?',
        'Assuming you ran the server.',
        'Don\'t forget to run the server first though.',
        'if you choose not to run the server'
      ]

    const randIndex = Math.floor(Math.random() * errorMessages.length)

    return (
        <Box className='gradient-background' minHeight="100vh">
            <Center h="100vh" flexDirection="column" justifyContent="center">
                <Text marginBottom="4" fontSize="xxx-large" fontFamily={theme.fonts.text} color='whitesmoke' fontWeight='bold'>{errorMessages[randIndex]}</Text>
                <Text bgGradient={theme.colors.emerald} bgClip="text" marginBottom="4" fontSize="xxx-large" fontFamily={theme.fonts.text} fontWeight='bold' fontStyle="italic">{errorMessagesItalic[randIndex]}</Text>
            </Center>
        </Box>
    )
}

export default ConnectionError