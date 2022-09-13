/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import React from 'react';
import moment from 'moment';
import { BsList } from 'react-icons/bs';
import { RichText } from '@graphcms/rich-text-react-renderer';
import { AiOutlineMinus } from 'react-icons/ai';

const PostDetails = ({ post }) => (
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

        <div className="flex flex-col items-center justify-center mb-20 px-[2rem]">
          <div className="border border-gray-300 py-8 rounded" style={{ paddingLeft: '102px', paddingRight: '102px' }}>

            <div className="flex items-center mb-6">
              <BsList className="mr-2" style={{ color: 'gray' }} />
              <h1 className="text-xl font-semibold ">TABLE OF CONTENTS</h1>
            </div>

            {/* // CONTENTS */}
            {post.content.raw.children.map((item, index) => {
              if (item.type === 'heading-one') {
                return (
                  <div key={index} className="flex items-start mb-1 ml-4 ">
                    {/* <MdOutlineFiberManualRecord className='mr-2' style={{ color: "gray", fontSize: "2rem" }} /> */}
                    {/* <span className='font-semibold mr-2'>-</span> */}
                    <AiOutlineMinus className="mr-2 pt-2" />
                    <h1 className="text-lg font-normal "> {item.children[0].text}</h1>

                  </div>
                );
              }

              if (item.type === 'heading-two' || item.type === 'heading-three' || item.type === 'heading-four' || item.type === 'heading-five' || item.type === 'heading-six') {
                return (
                  <div key={index} className="flex items-center ml-5 ">

                    <h1 className="text-bs font-normal ml-8 mb-2"> {item.children[0].text}</h1>

                  </div>
                );
              }
            })}
          </div>
        </div>

        {/* //* RICHTEXT HERE */}

        <div className="px-2 text-center lg:px-10 lg:text-left">

          <RichText
            content={post.content.raw.children}
            renderers={{
              h1: ({ children }) => <h1 className="text-3xl font-semibold mb-4 lg:max-w-[85%]">{children}</h1>,
              h2: ({ children }) => <h2 className="text-xl font-semibold mb-4">{children}</h2>,
              h3: ({ children }) => <h3 className="text-lg font-semibold mb-4">{children}</h3>,
              img: ({ src }) => <img src={src} alt="" className="object-top h-full w-full object-cover  shadow-lg rounded-t-lg lg:rounded-lg mb-10" />,
              p: ({ children }) => <p className="mb-10">{children}</p>,
              ul: ({ children }) => <ul className="list-disc ml-6 mb-10 text-left">{children}</ul>,
              ol: ({ children }) => <ol className="list-decimal ml-6 mb-10 text-left">{children}</ol>,
              bold: ({ children }) => <strong>{children}</strong>,
            }}
          />
        </div>

      </div>
    </div>
  </>
);

export default PostDetails;
