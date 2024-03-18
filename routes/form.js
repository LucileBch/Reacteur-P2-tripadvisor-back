// ---------- FORM Routing ----------
// Import packages
const express = require(`express`);
const router = express.Router();

// Import form controllers
const formCtrl = require(`../controllers/form`);

// ---------- Routes POST ----------
// Send form
router.post(`/form`, formCtrl.formPost);

// Export route
module.exports = router;
