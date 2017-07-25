import { Meteor } from 'meteor/meteor';
import fs from 'fs';

Meteor.methods({
  'saveImage': function(image) {
    // TODO: Let's use a image bucket on a separate server.
    // console.log('from meteor method', image);
    const base64Data = image.replace(/^data:image\/png;base64,/, "");
    console.log('fake saved.');
    // fs.writeFile("C:/Development/Nate/Book-Project/public/images/" +  "out.png", base64Data, 'base64', function(err) {

    // });

  }
});