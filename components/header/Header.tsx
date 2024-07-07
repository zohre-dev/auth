import Menu from "../menu/Menu";
import { PicWarraper } from "./style";
import { Spin } from "antd";
import { Image } from "antd";

export default function Header() {
  return (
    <PicWarraper>
      <Menu />
      <>
        <span className="headerText">همه از یک مبلمان خوب استقبال می کنند</span>
      </>
    </PicWarraper>
  );
}
