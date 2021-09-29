import { atom } from "recoil";
import { Atoms } from "@recoil/constants";

export const dragDrop = atom({
    key: Atoms.dragDrop,
    default: {
        source: "",
        destination: "",
        text: "",
    },
});
