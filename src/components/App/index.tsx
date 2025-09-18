import ApplicationRouter from "../../router";
import { BrowserRouter as RouterProvider } from "react-router-dom";
import { type ReactElement } from "react";

const Application = (): ReactElement => {
    return(
        <div className="application-container">
            <RouterProvider>
                <ApplicationRouter/>
            </RouterProvider>
        </div>
    );
};

export default Application;