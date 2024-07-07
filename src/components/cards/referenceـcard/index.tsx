"use client";
import { ReactNode } from "react"
import { Typography, styled } from "@mui/material"
import CustomizedButton from "@/components/button";

interface Props{
    Icon: ReactNode,
    title: string,
}

const MainSection = styled('div')(({theme})=>({
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    position:'relative',
    padding:' 8px 12px',
    maxWidth:'180px',
    height:'300px',
    borderRadius:'16px',
    '& svg':{
        zIndex: '1',    
        transform: 'scale(0.62)',
    },
}))

export const ReferenceCard = ({Icon,title}:Props) => {
  return (
    <MainSection>
        {Icon}
        <Typography 
            variant='h6' 
            component='h2' 
            color='white' 
            zIndex={1} 
            pb={4} 
            textAlign='center'
        >
            {title}
        </Typography>
        <CustomizedButton variant='text' size="small" text="مشاهده بیشتر" color="neutral" />
    </MainSection>
  )
}


