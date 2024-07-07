 

import { Grid,styled } from '@mui/material'
import SearchInput from '@/components/input/search'
import CustomizedButton from '@/components/button'
import { CartIcon, LoginIcon, MagicPenIcon } from '@/components/icons'
import { navbarLinks } from '@/services/servers'
import NavbarMenu from './navbar_menu_section'
import Link from 'next/link'

const NavbarSection = styled(Grid)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width:'100%',
  height:'auto',
  flexDirection:'column',
}))

const MainNavbarSection = styled(Grid)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width:'100%',
  height:'105px',
}))

const MainNavbarButtonSection = styled(Grid)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'end',
  alignItems: 'center',

  [theme.breakpoints.only('md')]:{
    maxWidth: '30%',
  },
  '& Button:first-child':{
    padding: 0,
    '& span':{
      margin:0
    }
  },
  '& Button:last-child':{
    paddingLeft: 0
  },
}))

const ConnectionsNavbarSection = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width:'100%',
  borderTop: `1px solid ${theme.palette.black.light}`,
  [theme.breakpoints.up('md')]:{
    height: '64px',
  },
  [theme.breakpoints.down('md')]:{
    height: '0px',
    display:'none',
  },
}))

const LogoSection = styled(Link)(({ theme }) => ({
  display: 'flex', 
  textDecoration: 'none',
  width:'100%',
  height:'100%',
  '& img:first-child':{
    [theme.breakpoints.up('md')]:{
      display: 'flex',
    }, 

    display: 'none',
  },
  '& img:last-child':{
    [theme.breakpoints.up('md')]:{
      display: 'none',
  },
      display: 'flex',

  }
}))

const MainLinks = styled(Link)(({theme}) => ({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  fontSize: '1rem' ,
  color: 'black',
  textDecoration:'none',
  fontWeight:'400',
  [theme.breakpoints.between(885,1101)]:{
    fontSize: '0.85rem',
  }
}))

const ConnectionsButtonSection = styled(Grid)(({ theme }) => ({
  '& button.MuiButtonBase-root':{
    whiteSpace:'nowrap',
    height:'48px',
    borderRadius:'8px',
    '& .MuiButton-startIcon':{
      margin:'0',
    }
  }
}))

const Navbar = () => {
  return (
    <NavbarSection
    container
    spacing={1}
    my={3}
    padding={{xs: '0 12px',sm:'0 20px',md:'0 48px',lg:'0 76px'}}>

      <MainNavbarSection 
      container 
      spacing={1}
      flexDirection={{xs:'row-reverse',md:'row'}} 
      height={{md:'105px',xs:'65px'}}>

        <Grid item xs={1} md={2} lg={1}>
          <LogoSection href="/">
            <img 
            src={process.env.PUBLIC_URL + '/LOGO1.png'} 
            alt="logo" 
            width='100%' 
            height='50px'
            />
            <img 
            src={process.env.PUBLIC_URL + '/LOGO.png'} 
            alt="logo" 
            width='100%' 
            height='100%' />
          </LogoSection>

        </Grid>

        <Grid item xs={8} md={6}>
          <SearchInput />
        </Grid>

        <MainNavbarButtonSection item md={3} sx={{display: { xs: 'none', md: 'flex' }}}  >

          <CustomizedButton 
            size='medium' 
            variant='text' 
            startIcon={<LoginIcon/>}
            text='ورود | ثبت نام'
            color='black'
            sx={{ whiteSpace:'nowrap'}} />

            <CustomizedButton 
            size='medium' 
            variant='text' 
            startIcon={<CartIcon/>}
            text='سبد خرید'
            color='black'
            sx={{ whiteSpace:'nowrap'}} />

        </MainNavbarButtonSection>

        <Grid item
              xs={1}
              sx={{
                flexGrow: 1,
                display: { md: 'none', xs: 'flex' },
                width: "100%",
                height: "100%",
                position:'relative',
              }}
            >
              <NavbarMenu />
        </Grid>

      </MainNavbarSection>
      
      <ConnectionsNavbarSection >

          <CustomizedButton 
          size='small' 
          variant='contained' 
          startIcon={<MagicPenIcon/>}
          text='خودت طراحیش کن'
          color='secondary'/>

          {navbarLinks.map((item , key)=>{
            return <MainLinks href={item.url} key={item.id}>{item.name}</MainLinks>
          })}

      </ConnectionsNavbarSection>

    </NavbarSection>
  )
}

export default Navbar