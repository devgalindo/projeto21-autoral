import { SxProps } from "@mui/material";
import { mainColor } from "../../constants/colors";

export const sxOuterBox: SxProps = {
    display:'flex', 
    backgroundColor:'white',
    width:'100vw',
    height:'100vh',
    borderRadius:'20px'
}

export const sxLogoContainer: SxProps = {
    display: 'flex',
    justifyContent:'center',
    alignItems:'center'
}

export const sxFormContainer: SxProps = {
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    bgcolor: mainColor
}
