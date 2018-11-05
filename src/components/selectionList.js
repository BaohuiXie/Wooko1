import React, { PureComponent } from 'react';
import styles from './selectionBar.styles';




export default class SelectionList extends PureComponent{
    constructor(props) {
        super(props);
        this.state = {};
    }

    render(){
        const listItems= this.props.data.map(item=>(
            <p style={styles.option} key={item.value}>{item.label}</p>
        ));

        return(
            <div style={styles.list}>
               {listItems}
            </div>
        );
    }


}