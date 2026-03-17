import { Router } from "express";
import { SitemapController } from "./sitemap.controller.js";

const sitemapController = new SitemapController();
export const sitemapRouter = Router();

sitemapRouter.get("/sitemap.xml", (req, res) => sitemapController.getSitemap(req, res));
