import { atom } from "recoil";
import { Atoms } from "@recoil/constants";

export const activeEditList = atom({
    key: Atoms.activeEditList,
    default: "",
});
