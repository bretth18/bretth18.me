import Meteor from 'meteor/meteor';
import Sparkpost from 'sparkpost';

if(Meteor.isServer){
  Meteor.methods({
    sendEmail:function(subForm){
      // TODO: replace auth_token with env var before commit!
      var sparky = new SparkPost(process.env.SPARKPOST_AUTHKEY);

      sparky.transmissions.send({
        transmissionBody: {
          content: {
            from: 'contact@mail.bretth18.me', // take in users email for from
            subject: subForm.email_val +'contacted you!',
            html:'<html><body><p>{subForm.message_val}</p></body></html>'
          },
          recipients: [
            {address: 'bretth18@gmail.com'}
          ]
        }
      }, function(err, res) {
        if (err) {
          console.log('Whoops! Something went wrong');
          console.log(err);
        } else {
          console.log('Woohoo! You just sent your first mailing!');
        }
      });

    }
  });

}
