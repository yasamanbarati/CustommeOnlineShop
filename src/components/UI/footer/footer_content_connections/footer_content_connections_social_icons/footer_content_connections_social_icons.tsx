import { Box, styled } from "@mui/material"
import {FacebookIcon, InstagramIcon, LinkedinIcon, PinterestIcon} from "@/components/icons"
import { palette } from "@/setup/theme/palette"

const SocialIconsBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100%",
    margin: "25px 0",
    "svg": {
        marginLeft: "20px",
        width: "40px!important",
        height: "40px!important",
        "path": {
            fill: palette.black.lighter,
            transition: "0.8s ease",
        },
        "&:hover path": {
            fill: theme.palette.primary.dark,
            boxShadow: `0px 4px 6px ${theme.palette.primary.main}`,
        }
    }
}))
export const FooterContentConnectionsSocialIcons = () => {
    return (
        <SocialIconsBox>
            <FacebookIcon />
            <InstagramIcon />
            <LinkedinIcon />
            <PinterestIcon />
        </SocialIconsBox>
    )
}