import styles from "./index.module.css";
import { useRecoilState } from "recoil";
import { dragDrop } from "@recoil/atoms";

type CardItemProps = {
    cardText: string;
    listKey: string;
};

const CardItem: React.FC<CardItemProps> = ({ cardText, listKey }) => {
    const [dragDropData, setDragDropData] = useRecoilState(dragDrop);
    return (
        <article
            draggable
            onDragStart={(e) => {
                setDragDropData({
                    ...dragDropData,
                    source:
                        e?.currentTarget?.getAttribute("data-listkey") || "",
                    text: e?.currentTarget?.innerText,
                });
            }}
            className={styles.mainContainer}
            data-listkey={listKey}
        >
            {cardText}
        </article>
    );
};

export default CardItem;
