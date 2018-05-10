import React, {Component} from 'react';


class Layout extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    // 这里必须是一个元素，否则会发出警告。
    const children = this.props.children;
    return (
      <div>
        <header>Header</header>
          {children}
        <footer>Foot</footer>
      </div>
    );
  }
}

export default Layout;