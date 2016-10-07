import React from 'react';
import './SearchInput.css';

class SearchInput extends React.Component {
  handleChange = (event) => {
    this.props.textChange(event);
  }

  render() {
    return (
      <div className="component-search-input">
        <input
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
SearchInput.propTypes = {
  textChange: React.PropTypes.func,
};
export default SearchInput;
