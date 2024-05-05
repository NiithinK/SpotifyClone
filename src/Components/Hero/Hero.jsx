import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import HeroImage from "../../assets/hero_headphones.png"
import './Hero.css'
import useMediaQuery from "@mui/material/useMediaQuery";

const Hero = () => {
    const isSmallScreen = useMediaQuery('(max-width:600px)'); // Adjusted breakpoint for small screens

    return (
        <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            minHeight={{ xs: '400px', sm: '270px' }} // Adjusted minHeight for mobile view
            color="white"
            backgroundColor={'black'}
        >
            <Stack
                display="flex"
                alignItems="center"
                direction={isSmallScreen ? 'column-reverse' : 'row'} // Adjusted direction for mobile view
                sx={{ p: '20px' }}
            >
                <Typography
                    align="center"
                    className="heroTitle"
                    variant={isSmallScreen ? 'h6' : 'h4'}
                    fontWeight={600}
                    sx={{ py: '5px', lineHeight: '1.5' }}
                >
                    100 Thousand Songs, ad-free
                    <br />
                    Over thousands podcast episodes
                </Typography>
                <img
                    src={HeroImage}
                    alt=""
                    height={isSmallScreen ? "150px" : "212px"}
                    sx={{ p: '20px' }}
                />
            </Stack>
        </Box>
    );
}

export { Hero };
