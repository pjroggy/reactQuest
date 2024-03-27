function Avatar({image, firstName, lastName}){

    return <figure>
        <img src={image} alt = {"image of " + {firstName} + {lastName}}/>  
        <figcaption>{firstName}{lastName}</figcaption>
    </figure>
}

export default Avatar;