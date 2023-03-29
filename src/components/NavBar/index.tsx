import { AppBar, Tabs, Toolbar, Typography, Avatar, Tab, InputBase, Input, TextField } from "@mui/material";
import { useState } from "react";
import avatar from "../../assets/MerlimLogo.png"
import { sxTabs } from "./style";
import { Search } from "@mui/icons-material";

export default function NavBar() {
  const [tabValue, setTabValue] = useState()
  return (
    <AppBar>
      <Toolbar>
        <Typography>MERLIM</Typography>
        <Search/>
        <TextField size="small" variant="outlined" margin="dense" placeholder="Search..."></TextField>
        <Tabs textColor="inherit" value={tabValue} onChange={(e, value) => setTabValue(value)} sx={sxTabs}>
          <Tab label='Explore'/>
          <Tab label='Communities'/>
          <Tab label='Library'/>
          <Avatar alt="avatar" src={avatar}></Avatar>
        </Tabs>
      </Toolbar>
    </AppBar>
  );
}


