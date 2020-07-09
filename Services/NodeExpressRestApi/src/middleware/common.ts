/* Contains the middleware like cors, compression and, the setup for body parsing */
import { Router } from "express";
import cors from "cors";
import parser from "body-parser";
import compression from "compression";

export const handleCors = (router: Router) => {
  console.log('handleCors');
  router.use(cors({ credentials: true, origin: true }));
}

export const handleBodyRequestParsing = (router: Router) => {
  console.log('handleBodyRequestParsing');
  router.use(parser.urlencoded({ extended: true }));
  router.use(parser.json());
};

export const handleCompression = (router: Router) => {
  console.log('handleCompression');
  router.use(compression());
};