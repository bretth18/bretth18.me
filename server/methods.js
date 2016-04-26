import { Meteor } from 'meteor/meteor';
import SparkPost from 'sparkpost';

if(Meteor.isServer){
  Meteor.methods({
    sendEmail:function(subForm){
      // TODO: replace auth_token with env var before commit!
      var sparky = new SparkPost(process.env.SPARKPOST_AUTHKEY);

      sparky.transmissions.send({
        transmissionBody: {
          content: {
            from: 'contact@mail.bretth18.me', // take in users email for from
            subject: subForm.email_val +' contacted you!',
            html:'<html><body><h4>Name:'+ subForm.first_name + ' ' + subForm.last_name + '</h4><div></div><h4>Company: ' + subForm.company_val + '<div></div><p> Text: ' + subForm.message_val + '</p><div></div><a href="mailto:' + subForm.email_val + '">Reply</a></body></html>'
          },
          recipients: [
            {address: 'bretth18@gmail.com'}
          ]
        }
      }, function(err, res) {
        if (err) {
          console.log('Whoops! Something went wrong sending an email');
          console.log(err);
        } else {
          console.log('Message sent via sparkpost on server');
        }
      });

    },

    testMethod: function(){
      console.log('returning value from the server');
    }
  });

}
