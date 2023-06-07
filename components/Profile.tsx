import React from 'react'
import PromptCard from './PromptCard'

const Profile = ({ name, desc, data, handleEdit, handleDelete}:any) => {
  return (
    <section className='w-full;'>
      <h1 className='head_text text-left'><span>{name} Profile</span></h1>
      <p className='desc test-left'>{desc}</p>

      <div className='mt-10 prompt_layout'>
<<<<<<< HEAD
        {data?.length > 0 ?
        data.map((post:any) => {
          return(
          <PromptCard
            key={post.id}
            post={post}
            handleEdit={() => handleEdit && handleEdit(post)}
            handleDelete={() => handleDelete && handleDelete(post)}
            /> )
=======
        {data?.length != 0?
        data.map((post:any) => {
          <PromptCard
            key={post.id}
            post={post}
            handleTagClick={() => handleEdit && handleEdit(post)}
            handleDelete={() => handleDelete && handleDelete(post)}
            />
>>>>>>> f33378a815298b86ddeb1b1c271d879ca8a70201
        }):<div>No posts</div>}
      </div>
    </section>
  )
}

export default Profile
