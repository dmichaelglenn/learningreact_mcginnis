var React = require('react');

var Main = React.createClass({

    render: function () {
        return (
            <div> Sup from the main component </div>
            {this.props.children}
        )
    }
});

module.exports Main;
