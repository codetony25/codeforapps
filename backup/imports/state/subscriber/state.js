import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

const SubscriberState = new Mongo.Collection(null);

// Set up initial state
if (!SubscriberState.find({}).count()) {
  SubscriberState.insert({
    errorMsg: '',
    successMsg: ''
  });
}

export default SubscriberState;

