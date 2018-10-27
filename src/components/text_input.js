import React, { PureComponent } from 'react';
import styles from './text_input.styles';
export default class TextInput extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   if (this.props.placeholder != nextProps.placeholder) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  render() {
    return (
      <div>
        <input
          style={styles.input}
          placeholder={this.props.placeholder}
          type={this.props.type}
          onChange={(evt) => {
            this.setState({value: evt.target.value});
            this.props.onChangeText && this.props.onChangeText(evt.target.value);
          }} />
        <div style={this.state.err_msg? styles.bottom_line_err : styles.bottom_line} />
        <p style={styles.err_msg}>{this.state.err_msg}</p>
      </div>
    );
  }

  validate(){
    if (!this.props.validations) return true;
    for (let i = 0; i < this.props.validations.length; i++) {
      let validate_func = this.props.validations[i];
      let err_msg = validate_func(this.state.value);
      if (err_msg) {
        this.setState({err_msg});
        return false;
      }
    }
    this.setState({err_msg: ""});
    return true;
  }
}
