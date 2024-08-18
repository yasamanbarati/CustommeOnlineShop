'use client'
import Link from "next/link"
import { Grid, Typography, styled } from "@mui/material"
import { footerLinksType } from "@/_slice/type"
import { footerLinks } from "@/services/servers/mock"

const ContentLink = styled(Link)(({ theme }:any) => ({
  display:'flex',
  fontSize:'0.875rem',//14
  lineHeight:'180%',
  fontWeight:'600',
  color : theme.palette.black.main,
  marginBottom: '14px',
}))
const TitleContent = styled(Typography)(({theme}:any)=>({
  color: theme.palette.black.main,
  marginBottom: '20px',
  position : 'relative',
  display : 'inline-table',
  '&:before':{
      content: `""`,
      position:'absolute',
      bottom:'0',
      width:'100%',
      height:'1px',
      background: theme.palette.black.main,
      zIndex:'0',
  },
}))
export const FooterContentLinks = () => {
    return (
        <Grid container md={8} xs={12}>
          {footerLinks.map((item:footerLinksType)=>{
            return <Grid item xs={4} key={item.id}>
              <TitleContent variant='body1'>{item.title}</TitleContent>
              {item.links.map((item)=>{
                return <ContentLink key={item.id} href={item.path}>{item.name}</ContentLink>
              })}
            </Grid>
          })}
        </Grid>
    )
}
