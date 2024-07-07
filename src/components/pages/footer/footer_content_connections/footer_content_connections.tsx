'use client'
import { useState } from "react"
import { Box, Button, CircularProgress, Grid, InputBase, Paper, SxProps, Typography, styled } from "@mui/material"
import { palette } from "@/setup/theme/palette"
import { FooterContentConnectionsSocialIcons } from "./footer_content_connections_social_icons/footer_content_connections_social_icons"
import { West } from "@mui/icons-material"

interface Props {
  Text?: string | undefined
  onClickEvent?: () => unknown
  sxStyle?: SxProps
  icon?: JSX.Element
  isfinished?: boolean
  loading?: boolean | undefined
  disabled?: boolean
  isLoading?: boolean
}

const PaperForm = styled(Paper)(({ theme }) => ({
    position: "relative",
    display: 'flex',
    alignItems: 'center',
    width: '300px',
    marginTop :'25px',
    [theme.breakpoints.down("md")]: {
        width: '80%',
    },
    [theme.breakpoints.down("sm")]: {
        width: '100%',
    },
    height: "50px",
    borderRadius: "7px",
    marginBottom: "40px",
    "& .MuiInputBase-root": {
        flex: 1,
        padding: '10px 21px 10px 5px'
    },
    "& .MuiButtonBase-root": {
        borderRadius: "7px 0 0 7px",
        color: palette.neutral.main,
        backgroundColor: palette.primary.main,
        height: "100%",
        padding: '10px',
        "&:hover":{
            backgroundColor: palette.primary.main,
        }
    },
    "& .MuiCircularProgress-circle":{
        color: theme.palette.primary.main,
        position:'absolute',
        top: '50%',
        left: '30px',
        marginTop: '-12px',
        marginLeft: '-12px',
    }
}))

export const FooterContentConnections = ({ onClickEvent, disabled, isLoading }: Props) => {
    const [loading, setLoading] = useState(false)

    const handleOnClick = async () => {
        if (isLoading || loading) return

        setLoading(true)

        if (onClickEvent) onClickEvent()

        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }
    return (
        <Grid
            container
            md={4}
            xs={12}
            display="flex"
            flexDirection="column">
            <Box display={{ md: "block", xs: "none" }}>
                <Typography variant='h6' component='h2'>همراه ما باشید!</Typography>

                <FooterContentConnectionsSocialIcons />
            </Box>
            <Typography variant='h6' component='h2'>عضو خبرنامه ما شوید</Typography>

            <PaperForm>
                <InputBase
                    placeholder="info@gmial.com"
                    inputProps={{ 'aria-label': 'info@gmial.com' }}
                    disabled={loading ? true : false}
                />
                {loading ? (
                    <CircularProgress
                        size={30}
                    />
                ) : (

                    <Button
                        disabled={loading}
                        onClick={handleOnClick}
                        startIcon={<West width='28px!important' height='28px!important'/>}
                    >
                    </Button>
                )}
            </PaperForm>

        </Grid>
    )
}
