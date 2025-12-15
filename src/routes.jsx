import Checklist from "./components/Checklist";
import PlaceholderMenu from "./components/OutletMenu";
import Page from "./components/Page";
import Main from "./components/Main";

const routes = [
    {
        path: "/",
        element: <Main />,
        children: [
            { path: "flea-guide/", element: <Checklist checklistId={1} /> },
        ],
    },
];

export default routes;
