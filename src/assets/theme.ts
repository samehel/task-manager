import { extendTheme } from "@chakra-ui/react";
import '@fontsource/poppins'

const theme = extendTheme({
    fonts: {
        text: 'Poppins, sans-serif',
    },
    colors: {
        emerald: 'linear-gradient(to right, #9fe2bf, #47b494)'
    }
});

export default theme;