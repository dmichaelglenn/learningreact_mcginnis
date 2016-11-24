var React = require('react');
var ReactDOM = require('react-dom');

var USER_DATA = {
    name: "Sum Yung Gai",
    username: "yunggod777",
    image: "https://upload.wikimedia.org/wikipedia/en/f/f9/Dat_Boi_(resized_50%25).jpg"
}

// var HelloWorld = React.createClass({
//     render: function () {
//         return (
//             <div> Hello {this.props.name} </div>
//         )
//     }
// })
//
var ProfilePic = React.createClass({
    render: function () {
        return (
            <img src={this.props.image} style={{height: 100}} />
    )
    }
})

var ProfileLink = React.createClass({
    render: function () {
        return (
            <div>
                <a href={'https://github.com/' + this.props.username}>
                {this.props.username}
                </a>
            </div>
        )
    }
})

var ProfileName = React.createClass({
    render: function () {
        return (
            <div>
                {this.props.name}
            </div>
        )
    }
})

var Avatar = React.createClass({
    render: function () {
        return (
            <div>
                <ProfilePic imageUrl={this.props.user.image} />
                <ProfileName name={this.props.user.name} />
                <ProfileLink username={this.props.user.username} />
            </div>
        )
    }
})


ReactDOM.render(

    <Avatar user={USER_DATA} />,
    document.getElementById('app')
);
