import Meteor from 'meteor/meteor';
import Sparkpost from 'sparkpost';

if(Meteor.isServer){
  Meteor.methods({
    sendEmail:function(){
      var sparky = new SparkPost('<YOUR API KEY>');

      sparky.transmissions.send({
        transmissionBody: {
          content: {
            from: 'testing@sparkpostbox.com', // take in users email for from
            subject: 'Oh hey!',
            html:'<html><body><p>Testing SparkPost - the world\'s most awesomest email service!</p></body></html>'
          },
          recipients: [
            {address: 'developers+nodejs@sparkpost.com'}
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
