import React from 'react'
import styles from './PastPvpPage.module.css';
import VideoSummaryBlock from '../../components/VideoSummaryBlock/VideoSummaryBlock.jsx';
import QuestionCard from '../../components/QuestionCard/QuestionCard.jsx';

export default function PastPvpPage() {

    return (
        <div className={styles.gamemodesContainer}>
            <VideoSummaryBlock title="Hardcore Factions" text="hcf stuff" videoPath="/hcf.mp4" />
            <VideoSummaryBlock title="Ultra Hard Core" text="uhc stuff" videoPath="/uhc.mp4" />
            <VideoSummaryBlock title="MC Hunger Games" text="mcsg stuff" videoPath="/mcsg.mp4" />
            <VideoSummaryBlock title="Hypixel Skywars" text="skywars stuff" videoPath="/skywars.mp4" />
            <QuestionCard
                question="Which Minecraft version introduced shields?"
                choices={["1.7", "1.8", "1.9", "1.10"]}
                correctIndex={2}
            />
        </div>
    );
}
