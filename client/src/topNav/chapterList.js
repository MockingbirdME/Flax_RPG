import React, {Component} from 'react';
import { observer, inject } from "mobx-react";


const ChapterList = inject("rootStore")(observer(
class ChapterList extends Component {
    render() {
        let numberOfChapters = this.props.rootStore.rulesStore.chapterList.length;
        let chapterNumberCutOff = Math.round(numberOfChapters/2);

        let chaptersFirstHalf = [];
        let chaptersSecondHalf = [];

        this.props.rootStore.rulesStore.chapterList.forEach((title, index) => {
            let link = `/core rules/${title}`;
            let returnValue = (
                <div key={title} className="chapterLink" >
                    <a href={link} >{title}</a>
                </div>
            )
            if (index < chapterNumberCutOff)  chaptersFirstHalf.push(returnValue);
            else chaptersSecondHalf.push(returnValue);
        })
        return (
            <div className="chapterSectionsContainer">
                <div>{chaptersFirstHalf}</div>
                <div>{chaptersSecondHalf}</div>
            </div>
        )
    }
}
))

export default ChapterList;
