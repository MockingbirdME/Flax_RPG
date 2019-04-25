import React, {Component} from 'react';
import DataDisplayListItem from './dataDisplayListItem.js';


class DataDisplayListSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
         };
    }

    sorter(a, b) {
        let data = this.props.data;
        let stringA = data[a].displayName.toLowerCase();
        let stringB = data[b].displayName.toLowerCase();

        if (stringA < stringB) {
          return -1;
        }
        if (stringA > stringB) {
          return 1;
        }
      return 0;
    }

    render() {
        let list = () => {
            let data = this.props.data;
            if (!data) return "test";

            let listHtml = Object.keys(data);
            listHtml.sort((a, b) => this.sorter(a, b));
            listHtml = listHtml.map(traitKey => {
               return (
                   <DataDisplayListItem
                       key={traitKey}
                       trait={data[traitKey]}
                   />
               );

           });
           return listHtml;
        }

        return (
            <div className="dataDisplay__list__container">
                <div className="dataDisplay__list__table__row dataDisplay__list__header">
                    <h5>Name</h5>
                    <h5>Type</h5>
                    <h5>Keywords</h5>
                    <h5>Requirements</h5>
                </div>
                {list()}
            </div>
        )
    }
}

export default DataDisplayListSection;
