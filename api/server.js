#!/usr/bin/env node
'use strict';

const bodyparser = require('body-parser');
const express = require('express');
const cors = require('cors');

const API_PORT = 3000
const app = express()
const router = express.Router()


router.use(cors({ origin: true }));
router.use(express.json());
router.use(bodyparser.urlencoded({ extended: false }));
router.use(bodyparser.json());

app.use('', router)



router.get('/', (request, response) => {
	response.send('hello world')
});



app.listen(API_PORT, () =>
  console.log('Listening on port ' + API_PORT)
);