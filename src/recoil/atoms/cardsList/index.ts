import { atom } from "recoil";
import { Atoms } from "@recoil/constants";

export const cardsList = atom({
    key: Atoms.cardsList,
    default: {
        todo: ["tdtest1", "tdtest2", "tdtest3", "tdtest4"],
        inProgress: [
            "iptest1",
            "iptest2",
            "iptest3",
            "iptest4",
            "iptest5",
            "iptest6",
            "iptest7",
        ],
        qa: [
            "qatest1",
            "qatest2",
            "qatest3",
            "qatest4",
            "qatest5",
            "qatest6",
            "qatest7",
            "qatest8",
            "qatest9",
            "qatest10",
        ],
        done: ["dotest1", "dotest2", "dotest3"],
    },
});
