import React from 'react'
import moment from 'moment';
import { MdOutlineFiberManualRecord } from 'react-icons/md';
import { BsList } from 'react-icons/bs';

const PostDetails = ({ post }) => {
    console.log(post.content.raw.children);

    const getContentFragment = (index, text, obj, type) => {
        let modifiedText = text;

        if (obj) {
            if (obj.bold) {
                modifiedText = (<b key={index}>{text}</b>);
            }

            if (obj.italic) {
                modifiedText = (<em key={index}>{text}</em>);
            }

            if (obj.underline) {
                modifiedText = (<u key={index}>{text}</u>);
            }
        }

        switch (type) {
            case 'heading-one':
                return <h1 key={index} className="text-3xl font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h1>;
            case 'heading-two':
                return <h2 key={index} className="text-xl font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h2>;
            case 'heading-three':
                return <h3 key={index} className="text-xl font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
            case 'paragraph':
                return <p key={index} className="mb-8">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
            case 'heading-four':
                return <h4 key={index} className="text-md font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
            case 'image':
                return (
                    <>
                        <div className='flex items-center justify-center'>
                            <img
                                key={index}
                                alt='lol'
                                src={obj.src}
                            />
                        </div>

                    </>
                );
            default:
                return modifiedText;
        }
    };


    return (
        <>
            <div className="bg-white shadow-lg rounded-lg lg:p-8 pb-12 mb-8">
                <div className="relative overflow-hidden shadow-md mb-6">
                    <img src={post.featuredImage.url} alt="" className="object-top h-full w-full object-cover  shadow-lg rounded-t-lg lg:rounded-lg" />
                </div>

                <h1 className="mb-2.5 text-3xl font-semibold text-center">{post.title}</h1>
                <h1 className="mb-6 text-2xl font-normal text-center">{post.excerpt}</h1>

                <div className="px-4 lg:px-0">
                    <div className="flex items-center mb-16 w-full justify-center">
                        <div className="hidden md:flex items-center justify-center lg:mb-0 lg:w-auto mr-8 items-center">
                            <img
                                alt={post.author.name}
                                height="30px"
                                width="30px"
                                className="align-middle rounded-full"
                                src={post.author.photo.url}
                            />
                            <p className="inline align-middle text-gray-700 ml-2 font-medium text-lg">{post.author.name}</p>
                        </div>

                        <div className="font-medium text-gray-700">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span className="align-middle">{moment(post.createdAt).format('MMM DD, YYYY')}</span>
                        </div>

                    </div>

                    <div className='flex flex-col items-center justify-center bg-red mb-20'>
                        <div className='border border-gray-300 py-8 px-[6rem] rounded'>

                            <div className='flex items-center mb-6'>
                                <BsList className='mr-2' style={{ color: "gray" }} />
                                <h1 className='text-xl font-semibold '>TABLE OF CONTENTS</h1>
                            </div>

                            {post.content.raw.children.map((item, index) => {
                                if (item.type === 'heading-one') {
                                    return (
                                        <div key={index} className="flex items-center mb-1 ml-4 ">
                                            <MdOutlineFiberManualRecord className='mr-2' />
                                            <h1 className="text-lg font-semibold"> {item.children[0].text}</h1>

                                        </div>
                                    );
                                }

                                if (item.type === 'heading-two' || item.type === 'heading-three' || item.type === 'heading-four' || item.type === 'heading-five' || item.type === 'heading-six') {
                                    return (
                                        <div key={index} className="flex items-center ml-4 ">

                                            <h1 className="text-bs font-semibold ml-4 mb-2"> {item.children[0].text}</h1>

                                        </div>
                                    );
                                }


                            })}
                        </div>
                    </div>

                    <div className='px-10'>
                        {post.content.raw.children.map((typeObj, index) => {
                            const children = typeObj.children.map((item, itemindex) => getContentFragment(itemindex, item.text, item));
                            return getContentFragment(index, children, typeObj, typeObj.type);
                        })}
                    </div>




                </div>
            </div>
        </>
    )
}

export default PostDetails