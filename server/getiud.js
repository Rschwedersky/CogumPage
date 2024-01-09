const admin = require('firebase-admin');
const path = require('path');
const serviceAccount = require(path.resolve(__dirname, 'cogum-react-e5cca93c62ad.json'));

// Initialize the Admin SDK with your service account credentials
/* const serviceAccount = require("C:\Users\camba\cogumpage\server\cogum-react-e5cca93c62ad.json"); */
admin.initializeApp({
   credential: admin.credential.cert(serviceAccount),
   /* databaseURL: 'https://your-project-id.firebaseio.com', */
});

const email = 'cambara.ro@gmail.com';

admin.auth().getUserByEmail(email)
   .then((userRecord) => {
      const uid = userRecord.uid;
      // Now you have the UID, and you can proceed to change claims
      console.log(`UID for ${email}: ${uid}`);
   })
   .catch((error) => {
      console.error('Error fetching user data:', error.message);
   });
   const uid = 'ICFniqOWFnNmohKLX8H6Euoja4V2';

   // Set custom claims for the user
   admin.auth().setCustomUserClaims(uid, { admin: true })
      .then(() => {
         console.log('Custom claims updated successfully');
      })
      .catch((error) => {
         console.error('Error updating custom claims:', error.message);
      });
    admin.auth().getUser(uid)
   .then((userRecord) => {
      // Access custom claims
      const customClaims = userRecord.customClaims;

      if (customClaims) {
         console.log('Custom Claims:', customClaims);
      } else {
         console.log('No custom claims set for this user.');
      }
   })
   .catch((error) => {
      console.error('Error fetching user data:', error.message);
   });