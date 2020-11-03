const mysql = require('mysql');
const express = require('express');
const router = express.Router();



router.get("/", (req, res) => { res.render("./user/home"); });
router.get("/gallery", (req, res) => { res.render("./user/gallery"); });
router.get("/services", (req, res) => { res.render("./user/services"); });
router.get("/book", (req, res) => { res.render("./user/book"); });
router.get("/blog", (req, res) => { res.render("./user/blog"); });
router.get("/blog-detail", (req, res) => { res.render("./user/blog-detail"); });
router.get("/team", (req, res) => { res.render("./user/team"); });
router.get("/about", (req, res) => { res.render("./user/about"); });
router.get("/contact", (req, res) => { res.render("./user/contact"); });

module.exports = router;
