import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import editServices from '../services/editNote'


const BlogDetails = () => {

    const link = process.env.DEFAULT_URL
    const { id } = useParams();
    const { data: post, isPending, error } = useFetch(link +'/task/' + id);

    const [enableEdit, setEnableEdit] = useState(false)
    // Get token
    const token = window.localStorage.getItem('loggedTaskAppUser');

    const config = {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${JSON.parse(token)}`
        }
    }

    const history = useNavigate();

    const handleClick = () => {
        fetch(link + '/task/' + id, config)
            .then( (res) => {
                history('/home')
            }).catch((e) => console.log("Something fail"))
    }

    const handleEdit = () => {
        setEnableEdit(true)
    }

    const handleFetchEdit = async () => {
        const content = document.getElementById('editContent').value
        const bodyContent = {
            description: content
        }
        try {
            const finalNote = await editServices.sentEdition(bodyContent, id);
            console.log('Final note', finalNote)
            history('/home')
        } catch(e){
            console.log('Error en la edicion', e)
        }

    }

    const handleCancelEdit = () => {
        setEnableEdit(false)
    }

    return ( 
        
        <div className="blog-details">
            { error && <div> {error} </div> }
            { isPending && <div>Loading...</div> }
            { post && (
                <article>
                    
                    { !enableEdit && <h2>{ post.description }</h2>}
                    { enableEdit && <h2> Edit your note:</h2>}
                    { enableEdit && <textarea id="editContent" className="textarea">{ post.description }</textarea> }
                    <p>Status: { post.status }</p>
                    <p> Created: { Date(post.createdAt) }</p>
                    { !enableEdit && <button onClick={ handleClick }>Delete</button>}
                    { !enableEdit && <button className="edit-button" onClick={ handleEdit }>Edit</button>}
                    { enableEdit && <button className="edit-button" onClick={ handleFetchEdit }>Confirm Edit</button>}
                    { enableEdit && <button onClick={ handleCancelEdit }>Cancel</button>}
                    
                </article>
            ) }
        </div>
     );
}
 
export default BlogDetails;
