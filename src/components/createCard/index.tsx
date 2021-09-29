import { useState } from "react";
import styles from "./index.module.css";
import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai";
import { useRecoilState } from "recoil";
import { activeEditList, cardsList } from "@recoil/atoms";

type CreateCardProps = {
    listKey: "todo" | "inProgress" | "qa" | "done";
};

const CreateCard: React.FC<CreateCardProps> = ({ listKey }) => {
    const [inputVal, setInputVal] = useState("");
    const [inputErr, setInputErr] = useState(false);
    const [activeEdit, setActiveEdit] = useRecoilState(activeEditList);
    const [cardsData, setCardsData] = useRecoilState(cardsList);
    return (
        <div className={styles.mainContainer}>
            {listKey === activeEdit ? (
                <div className={styles.saveContainer}>
                    <textarea
                        value={inputVal}
                        autoFocus
                        onChange={(e) => {
                            setInputVal(e.target.value);
                        }}
                        placeholder="Enter a title for this card..."
                    />
                    {inputErr && (
                        <b className={styles.inputErrMsg}>
                            *Input cannot be empty
                        </b>
                    )}
                    <div className={styles.saveBtnContainer}>
                        <button
                            onClick={() => {
                                if (inputVal.length) {
                                    setActiveEdit("");
                                    setInputErr(false);
                                    setCardsData({
                                        ...cardsData,
                                        [listKey]: [
                                            ...cardsData[listKey],
                                            inputVal,
                                        ],
                                    });
                                } else {
                                    setInputErr(true);
                                }
                            }}
                            className={styles.saveCardBtn}
                        >
                            Add Card
                        </button>
                        <button
                            onClick={() => setActiveEdit("")}
                            className={styles.cancelCardBtn}
                        >
                            <AiOutlineClose />
                        </button>
                    </div>
                </div>
            ) : (
                <div className={styles.editContainer}>
                    <button
                        onClick={() => {
                            setActiveEdit(listKey);
                            //Clear the input
                            setInputVal("");
                            //Clear any errors
                            setInputErr(false);
                        }}
                        className={styles.addCardBtn}
                    >
                        <AiOutlinePlus className={styles.addIcon} />
                        <span>Add another card</span>
                    </button>
                </div>
            )}
        </div>
    );
};

export default CreateCard;
