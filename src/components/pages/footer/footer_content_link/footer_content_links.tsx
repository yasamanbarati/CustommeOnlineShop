'use client'
import Link from "next/link"
import { useAppSelector } from "@/setup/store/react-hooks"
import { Grid, Typography, styled } from "@mui/material"
import { footerLinksType } from "@/_slice/type"

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
    const data = useAppSelector(state => state.layout.footerLinks)
    return (
        <Grid container md={8} xs={12}>
          {data.map((item:footerLinksType)=>{
            return <Grid item xs={4}>
              <TitleContent variant='body1'>{item.title}</TitleContent>
              {item.links.map((item)=>{
                return <ContentLink href={item.path}>{item.name}</ContentLink>
              })}
            </Grid>
          })}
        </Grid>
    )
}
