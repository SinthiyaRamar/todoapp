import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash,faPenToSquare,faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export default function Icon(props) {
    const handletype = props.handletype;
    

    return handletype === "onClick" ? (
      <FontAwesomeIcon icon={props.icontype===faMagnifyingGlass ? faMagnifyingGlass : props.icontype===faPenToSquare ? faPenToSquare : props.icontype===faTrash ? faTrash : null } style={props.style} onClick={props.activities} />
    ) : handletype==="" && <FontAwesomeIcon icon={props.icontype===faMagnifyingGlass ? faMagnifyingGlass : props.icontype===faPenToSquare ? faPenToSquare : props.icontype===faTrash ? faTrash : null } style={props.style}  />
    
}
