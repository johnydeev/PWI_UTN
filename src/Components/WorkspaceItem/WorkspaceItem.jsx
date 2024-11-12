import { Link } from 'react-router-dom'
import './WorkspaceItem.css'
import React from 'react'

const WorkspaceItem = ({title,id,miembros,img}) => {
    return (
        <div className='WorkspaceItem'>
            <h2>{title}</h2>
            <div>{img}</div>
            <span>{id}</span>
            <span>usted tiene {miembros.length} miembros</span>
            <Link to={/workspace/+ id}>Link al item</Link>
        </div>
    )
}
export default WorkspaceItem