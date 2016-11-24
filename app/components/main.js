var React = require('react');

var Main = React.createClass({

    render: function () {
        return (
            <div>
            Sup from the main component
            {this.props.children}
            </div>
        )
    }
});

module.exports = Main;
