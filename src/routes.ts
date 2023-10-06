import { Router } from "express"
import eventRoutes from "./module/events/routes/eventRoutes"
import userRoutes from "./module/users/routes/userRoutes"
// import KeonnRouter from "./modules/deviceManager/routes"
// import DeviceManagerRouter from "./modules/deviceManager/routes"
// import zoneRoutes from "./modules/zone/routes/index"


const mainRouter = Router()

// add module's router here in main router

mainRouter.use(eventRoutes)
mainRouter.use(userRoutes)



export default mainRouter
