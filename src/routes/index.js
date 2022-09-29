const express = require("express");
const router = express.Router();

const { authMiddleware, adminMiddleware } = require("../middlewares");

const semrushCtrl = require("../controllers/semrushCtrl");
const spyfuCtrl = require("../controllers/spyfuCtrl");
const seolyzeCtrl = require("../controllers/seolyzeCtrl");
const proxyCtrl = require("../controllers/proxyCtrl");
const settingCtrl = require("../controllers/settingCtrl");
const siteCtrl = require("../controllers/siteCtrl");
const logCtrl = require("../controllers/logCtrl");

router.use("/authorize", authMiddleware, (req, res) => {
    res.status(301).redirect("/");
});

router.get("/api/proxies", adminMiddleware, proxyCtrl.getProxies);
router.get("/api/proxies/:id", adminMiddleware, proxyCtrl.getProxy);
router.post("/api/proxies", adminMiddleware, proxyCtrl.createProxy);
router.put("/api/proxies/:id", adminMiddleware, proxyCtrl.updateProxy);
router.delete("/api/proxies/:id", adminMiddleware, proxyCtrl.deleteProxy);

router.get("/api/setting", adminMiddleware, settingCtrl.getSetting);
router.post("/api/setting", adminMiddleware, settingCtrl.setSetting);

router.post("/api/semrush/login", adminMiddleware, semrushCtrl.login);
router.post("/api/spyfu/login", adminMiddleware, spyfuCtrl.login);
router.post("/api/seolyze/login", adminMiddleware, seolyzeCtrl.login);

router.get("/api/sites", adminMiddleware, siteCtrl.getSites);
router.get("/api/sites/:id", adminMiddleware, siteCtrl.getSite);
router.post("/api/sites", adminMiddleware, siteCtrl.createSite);
router.put("/api/sites/:id", adminMiddleware, siteCtrl.updateSite);
router.delete("/api/sites/:id", adminMiddleware, siteCtrl.deleteSite);

router.get("/api/logs", adminMiddleware, logCtrl.getLogs);

router.get("/", adminMiddleware, (req, res) => res.render("index"));

module.exports = router;
