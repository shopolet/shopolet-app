/**
 * Created by malaybiswas on 3/4/17.
 * Loads the development or production configuration based on environment variable
 */
import {ShopoletConstants} from "../constants";

let merge = require("merge");
let process = require("process");
let commonConfig = require("./common.json");
let developmentConfig = require("./development.json");
let productionConfig = require("./production.json");

export const appConfiguration = merge.recursive(true,
    merge.recursive(true, {}, commonConfig),
    ((process.env.NODE_ENV
        || ShopoletConstants.ENVIRONMENT.DEVELOPMENT) !== ShopoletConstants.ENVIRONMENT.PRODUCTION) ?
            developmentConfig : productionConfig);

export const TEMPLATE_PATH = appConfiguration.paths.themes.concat("/installed/templates");
export const CSS_PATH = appConfiguration.paths.themes.concat("/installed/styles");
export const SETTINGS_PATH = appConfiguration.paths.settings;
