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

var SomeLink = React.createClass({

    changeURL: function () {
        window.location.replace(this.props.href)
    },

    render: function () {
        return (
            <span style={{color: 'blue', cursor: 'pointer'}} onClick={this.changeURL}>
            {this.props.children}
            </span>
        )
    }

})
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
                <SomeLink href={'https://github.com/' + this.props.username}>
                {this.props.username}
                </SomeLink>
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
