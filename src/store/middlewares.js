import { thunk } from "redux-thunk";
import { createLogger } from "redux-logger";
import { applyMiddleware } from "redux";

export const getMiddlewares = () => {
    const middlewares = [];
    middlewares.push(thunk);
    
    const logger = createLogger({
        level:'log',
    })

    middlewares.push(logger);

    return applyMiddleware(...middlewares);
}
