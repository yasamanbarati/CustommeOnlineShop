import { ReactNode } from "react"

import { Typography, styled } from "@mui/material"

interface Props {
    title : string,
    titleIcon : ReactNode,
    children: React.ReactNode
}

const MainCategoriesSection = styled('div')(({theme})=>({
  marginTop : '65px',
  display :'flex',
  flexDirection:'column',
}))
const TitlesSectionDiv = styled('div')(({theme})=>({
    display:'flex',
    justifyContent:'flex-start',
    alignItems : 'center',
    marginBottom :'24px',
    '& svg':{
        width: '50px',
        height:'40px',
    },
    '& hr':{
      width:'100%',
      color: theme.palette.black.light,
      marginRight :'21px',
    }
}))

const TitlesSection = ({title,titleIcon,children}:Props) => {
  return (
    <MainCategoriesSection >
      <TitlesSectionDiv>
          {titleIcon}
          <Typography 
            component='h3' 
            variant="h5" 
            color='black' 
            whiteSpace='nowrap'
            mx={1}>
            {title}
            </Typography>
          <hr/>
      </TitlesSectionDiv>
      {children}
    </MainCategoriesSection >
  )
}

export default TitlesSection