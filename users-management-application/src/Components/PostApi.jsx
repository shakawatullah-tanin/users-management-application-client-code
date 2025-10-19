import React from 'react';

const PostApi = () => {

    const handleSubmit = (e) =>{

        e.preventDefault()

        const name = e.target.name.value;

        const email = e.target.email.value;


        console.log(name,email)
    }
    return (
        <div>
            <form onSubmit={handleSubmit} action="">

                <input type="text" name='name' /><br />
                <input type="email" name='email' /><br /><br />
                <button>Add To Server</button>
            </form>
        </div>
    );
};

export default PostApi;