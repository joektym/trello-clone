import React from "react";
import styles from "./index.module.css";
import ListColumn from "@components/listColumn";
const Main: React.FC = () => {
    return (
        <main className={styles.container} data-test="main-app">
            <ListColumn header="To Do" listKey="todo" />
            <ListColumn header="In Progress" listKey="inProgress" />
            <ListColumn header="QA" listKey="qa" />
            <ListColumn header="Done" listKey="done" />
        </main>
    );
};

export default Main;
