import Menu from "../menu/Menu";
import { PicWarraper } from "./style";

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
