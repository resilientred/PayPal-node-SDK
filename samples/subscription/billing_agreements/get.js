/* Copyright 2015 PayPal */
"use strict";

var paypal = require('../../../');
require('../../configure');

var billingAgreementId = "I-08413VDRU6DE";

paypal.billingAgreement.get(billingAgreementId, function (error, billingAgreement) {
    if (error) {
        console.log(error);
        throw error;
    } else {
        console.log("Get Billing Agreement");
        console.log(JSON.stringify(billingAgreement));
    }
});
