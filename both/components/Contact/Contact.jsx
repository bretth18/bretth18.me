import React from 'react';
import Meteor from 'meteor/meteor';


Contact = React.createClass({
  onSubmit(e){
    // call server side sparkpost code to send email from form input
    Meteor.call('sendEmail', first_name, function(error, result){
      if(error){
        console.log("error", error);
      }
      if(result){
        console.log('it worked');
        Materialize.toast('I am a toast!', 4000)
      }
    });

  },

  render(){

    return (

    <div className="container">
      <div className="card-panel">
          <div className="row">
              <form className="col s12">
                <div className="row">
                  <h4>Contact me</h4>
                  <div className="divider"></div>
                  <div className="input-field col s6">
                    <input placeholder="" id="first_name" type="text" className="validate" />
                    <label for="first_name">First Name</label>
                  </div>
                  <div className="input-field col s6">
                    <input id="last_name" type="text" className="validate" />
                    <label for="last_name">Last Name</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <input id="email" type="email" className="validate" />
                    <label for="email">Email</label>
                  </div>
                </div>
                  <div className="row">
                    <form className="col s12">
                      <div className="row">
                        <div className="input-field col s12">
                          <textarea id="textarea1" className="materialize-textarea"></textarea>
                          <label for="textarea1">Textarea</label>
                        </div>
                      </div>
                    </form>
                    <button className="btn waves-effect waves-light" type="submit" name="action" onClick={this.onSubmit}>Submit
                      <i className="material-icons right">send</i>
                    </button>
                  </div>
              </form>
          </div>
        </div>
    </div>

    );
  }
});
