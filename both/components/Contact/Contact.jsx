import React from 'react';
import Meteor from 'meteor/meteor';
import $ from 'jquery';

Contact = React.createClass({
  onSubmit(e){

    // grab form elements using jquery... i think there's a better way for this.
    e.preventDefault();

    var element = $(e.target);
    var firstName = element.find("#firstName").val();
    var lastName = element.find("#lastName").val();
    var emailVal = element.find("#emailVal").val();
    var companyVal = element.find("#companyVal").val();
    var messageVal = element.find("#messageVal").val();

    // create object to pass to our server method
    var subForm = {
      first_name: firstName,
      last_name: lastName,
      email_val: emailVal,
      company_val: companyVal,
      message_val: messageVal,
    };

    // call server side sparkpost code to send email from form input
        // current state variables need to be called in this function referencing state of componenet
    Meteor.call('sendEmail', subForm, function(error, result){
      if(error){
        console.log("error", error);
        Materialize.toast('An error occured while sending your message: ' + error);
      }
      if(result){
        console.log('it worked');
        Materialize.toast('I am a toast!', 4000);
      }
    });

  },

  render(){
    return (
    <div className="container">
      <div className="card-panel">
          <div className="row">
            <h4>Contact Me</h4>
            <form className="col s12" onSubmit={this.onSubmit}>
                <div className="row">
                    <div className="input-field col m6 s12">
                        <input id="first_name" type="text" className="validate"/>
                        <label for="first_name">First Name</label>
                    </div>
                    <div className="input-field col m6 s12">
                        <input id="last_name" type="text" className="validate"/>
                        <label for="last_name">Last Name</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col m6 s12">
                        <i className="mdi-content-mail prefix"></i>
                        <input id="email" type="email" className="validate" required/>
                        <label for="email">Email</label>
                    </div>
                    <div className="input-field col m6 s12">
                        <i className="mdi-maps-store-mall-directory prefix"></i>
                        <input id="company" type="text" className="validate"/>
                        <label for="company">Company</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                      <textarea id="message" className="materialize-textarea"></textarea>
                      <label for="message">Message</label>
                    </div>
                </div>
                <div className="row">
                </div>
                <div className="divider"></div>
                <div className="divider"></div>
                <div className="row">
                    <div className="col m12">
                     <p className="right-align"><button className="btn btn-large waves-effect waves-light" type="submit" name="action">Send Message</button></p>
                    </div>
                </div>
            </form>
          </div>
        </div>
    </div>

    );
  }
});
