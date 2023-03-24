import { Outlet } from "react-router-dom";
import { ContainerRow } from "../components/Containers";

export default function LoginSigninLayout() {
    return (
        <ContainerRow>
            <Outlet/>
        </ContainerRow>
    )
};
