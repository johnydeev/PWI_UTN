import React from 'react'
import workspaces from '../data/workspaceData'
import WorkspaceList from '../Components/WorkspaceList/WorkspaceList';

const HomeScreen = () => {
    
    return (
        <div>
            <WorkspaceList workspaces={workspaces} />        
        </div>
    );
}

export default HomeScreen