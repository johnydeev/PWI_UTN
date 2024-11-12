import React from "react";
import { useParams } from "react-router-dom";
const WorkspaceScreen = () => {
    const {workspace_id} = useParams()
    return (
        <div>
        <h1>Workspace con ID {workspace_id}</h1>
        </div>
    );
};
export default WorkspaceScreen;