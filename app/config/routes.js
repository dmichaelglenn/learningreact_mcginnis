var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var browserHistory = ReactRouter.browserHistory;
var Main = require('../components/Main');
var Home = require('../components/Home');

var routes = (

    <Router history={browserHistory}>
        <Route path='/' component={Main}>
            <Route path='/home' component={Home}></route>
        </Route>
    </Router>
);

module.exports = routes;
