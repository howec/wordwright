//this.props.loggedIn
//this.props.navbarItems
//this.props.onSignOut

import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import $ from 'jquery';
import Popper from 'popper.js';

import socket from '../components/SocketUser';


class NavigationBar extends Component {

  constructor(props){
    super(props);
  }


  createNavBar = (arg) =>{
  	if(arg != null){
	  	let navbar = [];

	  	console.log("in createNavBar");
	  	for(const [func, name] of arg){
	  		navbar.push(

			          <li className="nav-item" key = {name}>
			            <a className="nav-link" href = "#" onClick = {func}>{name}</a>
			          </li>
	  			);
	  	}
	  	return navbar;
  	}
  }

  render() {


  	// console.log("LOOK HERE: " + this.props.toLogin[1])

  	// this.createNavBar(this.props.stuffTest);

  	if(this.props.loggedIn == false){
    return (
		<div>
			<link
			  rel="stylesheet"
			  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
			  integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
			  crossOrigin="anonymous"
			/>

		   <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
		      <a className="navbar-brand" href={this.props.url[1]}>{this.props.url[0]}</a>
		      
		      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
		        <span className="navbar-toggler-icon"></span>
		      </button>


			<div className="collapse navbar-collapse justify-content-end" id="navbarsExample03">
		        <ul className="navbar-nav">
		        	{this.createNavBar(this.props.navbarItems)}
		        </ul>
		    </div>

		    </nav>

		</div>
  		)
  	}
  	else{
    return (
		<div>
			<link
			  rel="stylesheet"
			  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
			  integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
			  crossOrigin="anonymous"
			/>

		   <nav className="navbar navbar-expand-sm navbar-dark bg-dark">

		      <a className="navbar-brand" href={this.props.url[1]}>{this.props.url[0]}</a>

		      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
		        <span className="navbar-toggler-icon"></span>
		      </button>

		      <div className="collapse navbar-collapse justify-content-end" id="navbarsExample03">
		        <ul className="navbar-nav">


		        {this.createNavBar(this.props.navbarItems)}


		          <li className="nav-item dropdown">
		            <a className="nav-link dropdown-toggle" href="#" id="dropdown03" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">More</a>
		            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdown03">
		              <a className="dropdown-item" href="#" onClick = {this.props.onSignOut}>Logout</a>
		              <a className="dropdown-item" href="#">Another action</a>
		              <a className="dropdown-item" href="#">Something else here</a>
		            </div>
		          </li>
		        </ul>

		      </div>
		    </nav>

		</div>
  		)
  	}
  }
}


/*
		        <form className="form-inline my-2 my-md-0">
		          <input className="form-control" type="text" placeholder="Search" />
		        </form>

*/

export default NavigationBar;


