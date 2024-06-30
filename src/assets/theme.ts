import { extendTheme } from "@chakra-ui/react";
import '@fontsource/poppins'

const theme = extendTheme({
    fonts: {
        text: 'Poppins, sans-serif',
    },
    colors: {
        emerald: 'linear-gradient(to right, #f5de2f, #f5822f)'
    }
});

export default theme;