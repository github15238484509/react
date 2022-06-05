import dva from "dva"
import count from './countApp/count';
import routerConfig from './routerConfig';


const app = dva()
app.model(count)
app.router(routerConfig)
app.start("#root")


