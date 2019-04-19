import React, {Component} from 'react';
import { observer, inject } from "mobx-react";


const ChapterList = inject("rootStore")(observer(
class ChapterList extends Component {
    render() {
        console.log(this.props.rootStore.rulesStore.chapterList);
        const chapters = this.props.rootStore.rulesStore.chapterList.map(title => {
            let link = `/core rules/${title}`;
            return (
                <div key={title} className="chapterLink" >
                    <a href={link} >{title}</a>
                </div>
            )
        })
        return (
            <div>
                {chapters}
            </div>
        )
    }
}
))

export default ChapterList;
