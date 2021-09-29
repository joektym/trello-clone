import React from "react";
import styles from "./index.module.css";
import CreateCard from "@components/createCard";
import CardList from "@components/cardList";

type ListProps = {
    header: string;
    listKey: "todo" | "inProgress" | "qa" | "done";
};

const List: React.FC<ListProps> = ({ header, listKey }) => {
    return (
        <section className={styles.container}>
            <h2 className={styles.list_title} data-testid="list-column-title">
                {header}
            </h2>
            <CardList listKey={listKey} />
            <CreateCard listKey={listKey} />
        </section>
    );
};

export default List;
