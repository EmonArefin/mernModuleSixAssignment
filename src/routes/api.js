const express = require("express");
const router = express.Router();

const blogController = require("../controllers/blogController");
router.get("/blog-create", blogController.create);
router.get("/blog-read", blogController.read);
router.get("/blog-delete", blogController.delete);
router.get("/blog-update", blogController.update);

const blogDetailsController = require("../controllers/blogDetailsController");
router.get("/details-create", blogDetailsController.create);
router.get("/details-read", blogDetailsController.read);
router.get("/details-delete", blogDetailsController.delete);
router.get("/details-update", blogDetailsController.update);

const commentController = require("../controllers/commentController");
router.get("/comment-create", commentController.create);
router.get("/comment-read", commentController.read);
router.get("/comment-delete", commentController.delete);
router.get("/comment-update", commentController.update);

const messageController = require("../controllers/messageController");
router.get("/message-create", messageController.create);
router.get("/message-read", messageController.read);
router.get("/message-delete", messageController.delete);
router.get("/message-update", messageController.update);

const portfolioController = require("../controllers/portfolioController");
router.get("/portfolio-create", portfolioController.create);
router.get("/portfolio-read", portfolioController.read);
router.get("/portfolio-delete", portfolioController.delete);
router.get("/portfolio-update", portfolioController.update);

const productController = require("../controllers/productController");
router.get("/product-create", productController.create);
router.get("/product-read", productController.read);
router.get("/product-delete", productController.delete);
router.get("/product-update", productController.update);

const profitController = require("../controllers/profitController");
router.get("/profit-create", profitController.create);
router.get("/profit-read", profitController.read);
router.get("/profit-delete", profitController.delete);
router.get("/profit-update", profitController.update);

const projectController = require("../controllers/projectController");
router.get("/project-create", projectController.create);
router.get("/project-read", projectController.read);
router.get("/project-delete", projectController.delete);
router.get("/project-update", projectController.update);

const serviceController = require("../controllers/serviceController");
router.get("/service-create", serviceController.create);
router.get("/service-read", serviceController.read);
router.get("/service-delete", serviceController.delete);
router.get("/service-update", serviceController.update);

const titleController = require("../controllers/titleController")
router.get("/title-create", titleController.create);
router.get("/title-read", titleController.read);
router.get("/title-delete", titleController.delete);
router.get("/title-update", titleController.update);

module.exports = router;