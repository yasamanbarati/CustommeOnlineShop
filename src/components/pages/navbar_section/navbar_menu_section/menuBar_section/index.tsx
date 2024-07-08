'use client'
import Link from 'next/link';
import { Drawer, IconButton, styled, useTheme } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import { navbarLinks } from '@/services/servers';

interface Props {
    handleDrawerClose: () => void
    open: boolean
}

const DrawerHeader = styled('div')(({ theme }:any) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
}));
const DrawerStyle = {
    width: "250px",
    flexShrink: 0,
    '& .MuiDrawer-paper': {
        width: "250px",
        height: "calc( 100vh - 65px )",
        right: "-12px",
        top: "65px",
        paddingRight: "40px",
        background: "rgba(255, 255, 255, 0.7)",
        backdropFilter: "blur(16px)",
        position: "absolute"
    },
}

const MainLinks = styled(Link)(() => ({
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    fontSize: '0.875rem' ,
    color: 'black',
    textDecoration:'none',
    fontWeight:'600',
  }))
const MenuBarSection = ({ handleDrawerClose, open }: Props) => {
  const theme = useTheme()
  return (
    <Drawer
        sx={DrawerStyle}
        variant="persistent"
        anchor="right"
        open={open}
    >
        <DrawerHeader sx={{ justifyContent: "flex-start" }}>
            <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon sx={{ fontSize: "2.5rem" }} />
            </IconButton>
        </DrawerHeader>
          {navbarLinks.map((item , key)=>{
            return <MainLinks href={item.url} key={item.id}>{item.name}</MainLinks>
          })}    
    </Drawer>

  )
}

export default MenuBarSection