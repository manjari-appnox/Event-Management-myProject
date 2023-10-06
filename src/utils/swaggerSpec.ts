// import swaggerJsDoc, { Options } from 'swagger-jsdoc';
// import yaml from 'yamljs';
// import path from 'path';

// // Load the YAML file
// const swaggerYamlPath = path.resolve(__dirname, '../../swagger.yml');
// const swaggerYamlContent = yaml.load(swaggerYamlPath);

// // Combine all Swagger options, including the loaded YAML content
// const swaggerOptions: Options = {
//   definition: {
//     ...swaggerYamlContent,
//   },
//   apis: [
//     './src/modules/users/routes/userRoutes.ts',
//     './src/modules/serviceBook/routes/bookServiceRoutes.ts',
//     './src/modules/sellCars/sellCarRoute/sellCarRoutes.ts',
//     './src/modules/ratings/routes/ratingRoutes.ts',
//     './src/modules/photoUpload/routes/documentsUpload.ts',
//     './src/modules/mechanic/routes/mechanicServiceRoutes.ts',
//     './src/modules/carResale/routes/vehicleRoutes.ts',
//     './src/modules/location/routes/citiesRoutes.ts',
//   ],
// };

// // Generate the Swagger specification
// const swaggerSpec = swaggerJsDoc(swaggerOptions);

// export default swaggerSpec;
