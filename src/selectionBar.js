import React, { PureComponent } from 'react';
import SelectionList from './components/selectionList';
import styles from './components/selectionBar.styles'


export default class SelectionBar extends PureComponent{
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render(){
        return(
            <div style={styles.page}>
                <div onClick={this.state.display=true} >
                {this.state.display? 
                    <SelectionList 
                        data={[{value: 1, label: "Select your provinces"}, 
                            {value: 2, label: "Alberta"},
                            {value: 3, label: "Manitoba"},
                            {value: 4, label: "Newfoundland"},
                            {value: 5, label: "Nunavut"},
                            {value: 6, label: "Ontario"},
                            {value: 7, label: "Quebec"},
                            ]}/>: 
                    <div style={styles.option}>
                        {this.state.label}
                    </div>
                }
                    
                </div>
            </div>
        );}
}