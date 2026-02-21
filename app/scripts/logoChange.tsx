import { useState } from "react"
import liuLogo from "~/images/LiU-Black_Liu_noText.svg";
import lithehax_logo from "~/images/raccoon_logo_black2.svg";

export default function LogoBogo({logoSwitched}: {logoSwitched: boolean}){
    return <img src={logoSwitched ? lithehax_logo : liuLogo} />;
}

