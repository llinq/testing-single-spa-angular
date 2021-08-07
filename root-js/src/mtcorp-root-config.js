import { registerApplication, start, checkActivityFunctions } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";
import microfrontendLayout from "./microfrontend-layout.html";

const routes = constructRoutes(microfrontendLayout);
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name);
  },
});
const layoutEngine = constructLayoutEngine({ routes, applications });

const navigation = applications[0];
registerApplication(navigation.name, () => System.import(navigation.name), navigation.app);

setTimeout(() => {
  applications.forEach((application, i) => {
    if (i > 0) {
      registerApplication(application.name, () => System.import(application.name), application.app);
    }
  });

  layoutEngine.activate();

  console.log('apps for current route', checkActivityFunctions())

  start();

}, 1000);
