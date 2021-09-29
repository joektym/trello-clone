import styles from "./index.module.css";
import { useRecoilState } from "recoil";
import { cardsList, dragDrop } from "@recoil/atoms";
import CardItem from "@components/cardItem";
import { Md5 } from "ts-md5/dist/md5";
import { updateCardsData } from "./updateCardsData";

type CardListProps = {
    listKey: "todo" | "inProgress" | "qa" | "done";
};

type CardsDataProps = {
    todo: string[];
    inProgress: string[];
    qa: string[];
    done: string[];
};

type DragDropProps = {
    source: "todo" | "inProgress" | "qa" | "done";
    destination: "todo" | "inProgress" | "qa" | "done";
    text: string;
};

const CardList: React.FC<CardListProps> = ({ listKey }) => {
    const [cardsData, setCardsData] = useRecoilState(cardsList);
    const [dragDropData, setDragDropData] = useRecoilState(dragDrop);
    return (
        <div
            onDragOver={(e) => {
                e.preventDefault();
            }}
            onDrop={(e) => {
                e.preventDefault();
                if (
                    dragDropData.source ===
                    e?.currentTarget?.getAttribute("data-listkey")
                ) {
                    //Dragged and dropped to same list, so ignore
                    return;
                }
                const newCardsData = updateCardsData(cardsData, {
                    ...dragDropData,
                    destination:
                        e?.currentTarget?.getAttribute("data-listkey") || "",
                } as DragDropProps);
                setCardsData(newCardsData);
            }}
            className={styles.mainContainer}
            data-listkey={listKey}
        >
            {cardsData[listKey].map((cardText) => {
                return (
                    <CardItem
                        key={Md5.hashStr(cardText)}
                        cardText={cardText}
                        listKey={listKey}
                    />
                );
            })}
        </div>
    );
};

export default CardList;
