import React from "react";
import styles from "./index.module.css";
import List from "@components/list";
const Main: React.FC = () => {
    return (
        <main className={styles.container}>
            <List header="To Do" listKey="todo" />
            <List header="In Progress" listKey="inProgress" />
            <List header="QA" listKey="qa" />
            <List header="Done" listKey="done" />
        </main>
    );
};

export default Main;
