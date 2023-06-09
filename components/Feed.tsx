'use client';
import {useState, useEffect} from 'react';
import { useRouter } from 'next/navigation';
import PromptCard from './PromptCard';
const PromptCardList = ({data, handleTagClick, handleDelete, handleEdit} : any) => {
  return (
    <div className='mt-16 prompt_layout'>
      {data.map((post:any) => {
        return(
        <PromptCard
          key={post.id}
          post={post}
          handleTagClick={handleTagClick}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          />)
      })}
    </div>
  )
}
const Feed = () => {
  const [searchText, setSearchText] = useState('');
  const [posts, setPosts] = useState([]);
  const router = useRouter();
  const handleSearchChange =async (searchText:string) => {
    setSearchText(searchText);
    try{
    const response:any = await fetch('/api/search', {
      method: "POST",
      body:JSON.stringify({searchText})
    });
    const data = await response.json();
    console.log("Response",data)
    return(
      <section>
        {data.map((prompt:string) => {
          <PromptCard
            post={prompt}
          />
        })}
      </section>
    )
  }catch(error){
    console.log(error)
    throw error;
  }
  }
  useEffect(() => {
    const fetchPosts =async () => {
      const response = await fetch('api/prompt');
      const data = await response.json();

      setPosts(data);
    }
    fetchPosts();
  }, []);

  return (
    <section className='feed'>
      <form className='relative w-full flex-center'>
        <input 
          type = "text"
          placeholder='Search for a tag or a username'
          value={searchText}
          onChange={(e) => handleSearchChange(e.target.value)}
          required
          className='search_input peer'
          />
          </form>
          <PromptCardList
            data={posts}
            handleTagClick = {() => {}}
            />

    </section>
  )
}

export default Feed
