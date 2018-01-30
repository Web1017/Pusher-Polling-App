
const express = require('express');
const router = express.Router();

const Pusher = require('pusher');

var pusher = new Pusher({
    appId: '466003',
    key: '63df33535e04364984c4',
    secret: '7582c21953c1c35e79ad',
    cluster: 'us2',
    encrypted: true
  });
  

router.get('/', (req, res) => {

    res.send('POLL');
});

router.post('/', (req, res) => {
     
    pusher.trigger('os-poll', 'os-vote', {
        points: 1,
        os: req.body.os
      });
      return res.json({success: true, message: 'Thank you for voting'});
});

module.exports = router;