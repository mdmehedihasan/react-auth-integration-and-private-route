import React from 'react';
import useFirebase from '../../Hooks/useFirebase';

const Home = () => {
    const { user } = useFirebase();
    return (
        <div>
            <h2>Home</h2>
            <p>Current user is :{user ? user.displayName : 'Nobody'}</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni impedit optio sed dignissimos recusandae blanditiis aut minus, vero nulla. Totam adipisci quas praesentium perferendis tenetur, perspiciatis tempora eveniet accusantium commodi voluptas, officiis reprehee sit quam eos dolores assumenda libero itaque perspiciatis labore, ducimus quisquam aspernatur minima optio blanditiis architecto cisi debitis eos. Odio sit quasi fugit, dicta repudiandae possimus facilis corporis, voluptas officia esse tenetur, recusandae sapiente iusto quos.</p>
        </div>
    );
};

export default Home;