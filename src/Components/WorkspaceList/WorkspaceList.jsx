import React from 'react'
import './WorkspaceList.css'
import WorkspaceItem from '../WorkspaceItem/WorkspaceItem'

const WorkspaceList = ({workspaces}) => {
    
    let workspaceListJSX = workspaces.map((workspace) => {
        return (
            <WorkspaceItem
            key={workspace.id}
            title={workspace.title}
            id={workspace.id}
            miembros={workspace.miembros}
            img={workspace.img}
            />
        )
    })
    return (
        <div className="WorkspaceList">
            <h3>WorkspaceList</h3>
            <div>
                {workspaceListJSX}
            </div>
        </div>
    )
}

export default WorkspaceList