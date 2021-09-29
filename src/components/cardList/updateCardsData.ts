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

export const updateCardsData = (
    cardsData: CardsDataProps,
    dragDropData: DragDropProps,
): CardsDataProps => {
    //First remove the text from the source list
    const newSourceArr = cardsData[dragDropData.source].filter(
        (item) => item !== dragDropData.text,
    );
    return {
        ...cardsData,
        [dragDropData.source]: newSourceArr,
        [dragDropData.destination]: [
            ...cardsData[dragDropData.destination],
            dragDropData.text,
        ],
    };
};
