import React from 'react'
import PromptCard from './PromptCard'

const Profile = ({ name, desc, data, handleEdit, handleDelete}:any) => {
  return (
    <section className='w-full;'>
      <h1 className='head_text text-left'><span>{name} Profile</span></h1>
      <p className='desc test-left'>{desc}</p>

      <div className='mt-10 prompt_layout'>
        {data?.length > 0 ?
        data.map((post:any) => {
          return(
          <PromptCard
            key={post.id}
            post={post}
            handleEdit={() => handleEdit && handleEdit(post)}
            handleDelete={() => handleDelete && handleDelete(post)}
            /> )
        }):<div>No posts</div>}
      </div>
    </section>
  )
}

export default Profile
