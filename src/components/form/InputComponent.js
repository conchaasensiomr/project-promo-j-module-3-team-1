import React from "react";

class InputComponent extends React.Component {
  constructor(props) {
    super(props);
    this.labelTitle = this.props.labelTitle;
    this.icon = this.props.icon;
    this.htmlClass = this.props.htmlClass;
    this.type = this.props.type;
    this.descriptionContent = this.props.descriptionContent;
    this.max = this.props.max;
    this.placeholder = this.props.placeholder;
    this.errorText = this.props.errorText;
  }

  render() {
    return (
      <div className="form_control">
        <label className="label" htmlFor={this.props.descriptionContent}>
          {this.props.labelTitle}
          <i className={this.props.icon} aria-hidden="true"></i>
        </label>
        <input
          className={this.props.htmlClass}
          type={this.props.type}
          id={this.props.descriptionContent}
          name={this.props.descriptionContent}
          maxLength={this.props.max}
          placeholder={this.props.placeholder}
          required
        />
        <small className="js-error-message">{this.props.errorText}</small>
      </div>
    );
  }
}

export default InputComponent;
