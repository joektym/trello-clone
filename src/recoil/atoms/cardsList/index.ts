import { atom } from "recoil";
import { Atoms } from "@recoil/constants";

export const cardsList = atom({
    key: Atoms.cardsList,
    default: {
        todo: [""],
        inProgress: [""],
        qa: [""],
        done: [""],
    },
});
