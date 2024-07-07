'use client'
import { Fragment, useState } from "react"
import { IconButton } from "@mui/material"
import MenuBarSection from "./menuBar_section"
import { MenuIcon } from "@/components/icons"

 
const NavbarMenu = () => {  
  const [open, setOpen] = useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <Fragment>
      <IconButton
        color="default"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerOpen}
        sx={{
          ...(open && { display: 'flex' }),
          position: 'absolute',
          right: "0",
          top: '15px',
          MinHeight: "65px",
          justifyContent: "flex-start",
          alignItems: "center"
        }}
      >
        <MenuIcon/>
      </IconButton>
      <MenuBarSection open={open} handleDrawerClose={handleDrawerClose} />
    </Fragment>
  )
}

export default NavbarMenu