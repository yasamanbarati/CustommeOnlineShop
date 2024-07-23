import { ArrowUpward } from "@mui/icons-material"
import { IconButton, styled } from "@mui/material"

const ScrollButton = styled(IconButton)(({ theme }) => ({
    position: "absolute",
    width: "52px",
    height: "52px",
    background: theme.palette.secondary.light,
    color: theme.palette.neutral.main,
    top: "-87px",
    left: "56px",
    zIndex: "3",
    cursor: "pointer",
    ":hover": {
        backgroundColor: theme.palette.secondary.main,
    },
    [theme.breakpoints.down("tabletL")]: {
        top: "-50px",
        left: "15px",
    },
}))

export const FooterContentScrollButton = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <ScrollButton aria-label="Up" size="large" onClick={scrollToTop} >
            <ArrowUpward />
        </ScrollButton>
    )
}
