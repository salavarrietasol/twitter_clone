import React, { useState } from 'react';

// Íconos SVG para cada tipo de actividad
const icons = {
    annotation: (
        <svg class="h-8 w-8 text-blue-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  
            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
        </svg>
    ),
    like: (
        <svg class="h-8 w-8 text-red-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  
            <path d="M12 20l-7 -7a4 4 0 0 1 6.5 -6a.9 .9 0 0 0 1 0a4 4 0 0 1 6.5 6l-7 7" />
        </svg>

    ),
    comment: (
        <svg class="h-8 w-8 text-yellow-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  
            <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M3 20l1.3 -3.9a9 8 0 1 1 3.4 2.9l-4.7 1" />  <line x1="12" y1="12" x2="12" y2="12.01" />  <line x1="8" y1="12" x2="8" y2="12.01" />  <line x1="16" y1="12" x2="16" y2="12.01" />
        </svg>
    ),
    share: (
        <svg class="h-8 w-8 text-blue-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  
            <path d="M21 3L14.5 21a.55 .55 0 0 1 -1 0L10 14L3 10.5a.55 .55 0 0 1 0 -1L21 3" />
        </svg>
    ),
    view: (
        <svg className="w-6 h-6 mr-2 text-green-600 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8a4 4 0 100 8 4 4 0 000-8zM2 12s4-8 10-8 10 8 10 8-4 8-10 8-10-8-10-8z"></path>
        </svg>
    ),
};

const Tweet = ({ tweet }) => {
    const [likes, setLikes] = useState({});
    const [comments, setComments] = useState({});
    const [commentInput, setCommentInput] = useState({});
    const [views, setViews] = useState({});
    const [hora, setHora] = useState(new Date());
    

    const handleLikeClick = () => {
        setLikes((prevLikes) => ({
            ...prevLikes,
            [tweet.id]: (prevLikes[tweet.id] || 0) + 1,
        }));
        handleViewIncrement();
    };

    const handleCommentClick = () => {
        setCommentInput((prev) => ({
            ...prev,
            [tweet.id]: !prev[tweet.id],
        }));
        handleViewIncrement();
    };

    const handleCommentSubmit = (comment) => {
        setComments((prevComments) => ({
            ...prevComments,
            [tweet.id]: [...(prevComments[tweet.id] || []), comment],
        }));
        setCommentInput((prev) => ({
            ...prev,
            [tweet.id]: false,
        }));
    };

    const handleViewIncrement = () => {
        setViews((prevViews) => ({
            ...prevViews,
            [tweet.id]: (prevViews[tweet.id] || 0) + 1,
        }));
    };
    

    return (
        <div key={tweet.id} className="relative max-w-md p-3 mx-auto mb-4 bg-white border border-gray-200 rounded-lg shadow-md">
            <div className="flex items-start">
                <div className="flex-shrink-0">
                </div>
                <div className="ml-3">
                    {tweet.type === 'annotation' && (
                        <>
                            <div class="col-span-full">
                            <ul role="list" class="divide-y divide-gray-100">
                                <li class="flex justify-between gap-x-6 py-5">
                                    <div class="flex min-w-0 gap-x-4">
                                        <img class="h-12 w-12 flex-none rounded-full bg-gray-50" src="./img/fotoMia.jpeg" alt="Profile Photo"></img>
                                        <div class="min-w-0 flex-auto">
                                            <p class="text-sm font-semibold leading-6 text-gray-900">Sol Salavarrieta</p>
                                            <p class="mt-1 truncate text-xs leading-5 text-gray-500">@esealatres</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                                <div>
                                <p className="text-sm text-gray-700">{tweet.content}</p>
                                <p className="mt-1 text-xs text-gray-500">Fecha: {hora.toLocaleTimeString()}</p>
                                </div>                             
                            </div>
                            
                        </>
                    )}
                    
                </div>
            </div>
            <div className="flex mt-2 text-sm">
                <div className="flex items-center mr-3" onClick={handleLikeClick}>
                    {icons.like}
                    <span>{likes[tweet.id] || 0}</span>
                </div>
                <div className="flex items-center mr-3" onClick={handleCommentClick}>
                    {icons.comment}
                    <span>{comments[tweet.id]?.length || 0}</span>
                </div>
                <div className="flex items-center mr-3">
                    {icons.share}
                </div>
                <div className="flex items-center mr-3">
                    <span onClick={handleViewIncrement}>{icons.view}</span>
                    <span>{views[tweet.id] || 0}</span>
                </div>
            </div>
            {commentInput[tweet.id] && (
                <div className="mt-4">
                    <input
                        type="text"
                        className="w-full p-1 mb-4 text-lg bg-gray-100 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
                        placeholder="Escribe un comentario..."
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                handleCommentSubmit(e.target.value);
                                e.target.value = '';
                            }
                        }}
                    />
                </div>
            )}
            
            {comments[tweet.id] && comments[tweet.id].length > 0 && (
                <div className="relative max-w-md p-3 mx-auto mb-4 bg-white borderrounded-lg">
                    <h3 className="mb-2 font-semibold text-gray-800 text-md">Comentarios:</h3>
                    <ul>
                        {comments[tweet.id].map((comment, index) => (
                            <div key={index} className="w-full max-w-md p-4 mb-4 bg-white rounded-lg shadow-md">
                                <div className="flex items-start space-x-4">
                                    <svg class="h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd" />
                                    </svg>
                                    <div className="flex-1">
                                        <p className="text-sm font-semibold text-gray-900">user_desconocido</p>
                                        <p className="text-gray-700">{comment}</p>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </ul>
                </div>
            )}
        </div>
    );
};

export default Tweet;
