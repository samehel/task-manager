import { Box, Button, Center, Text } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'; 
import '../background.css'
import { useState } from 'react';
import connect from '../Database/Connection';
import theme from '../assets/theme';

const ConnectionError = () => {
    const [title, setTitle] = useState<string>('Error: Connection Failed');
    const navigate = useNavigate();

    const errorMessages = [
        'Looks like you\'re still having issues connecting...',
        'Seems like the error still exists',
        'Looks like you\'re not going anywhere',
        'Keep trying to connect, eventually you will',
        'Connection issues? Try connecting again',
        'Looks like we\'re gonna be here a while'
    ]

    const retryConnection = async () => {
        try {
          await connect();
          navigate('/');
        } catch (error) {
          console.error('MongoDB connection error:', error);
          setTitle(errorMessages[(Math.floor(Math.random() * errorMessages.length))]);
        }
      };

    return (
        <Box className='gradient-background' minHeight="100vh">
            <Center h="100vh" flexDirection="column" justifyContent="center">
                <Text marginBottom="4" fontSize="xxx-large" fontFamily={theme.fonts.text} color='whitesmoke' fontWeight='bold'>{title}</Text>
                <Button onClick={retryConnection} colorScheme="blue" fontFamily={theme.fonts.text} fontWeight='light' marginBottom="4">Retry Connection</Button>
            </Center>
        </Box>
    )
}

export default ConnectionError