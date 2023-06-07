'use client';
import {useState, useEffect} from 'react';
import {useSession} from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Profile from '@components/Profile';
const Profiles = () => {
<<<<<<< HEAD
    const {data:session}:any = useSession();
    const [posts, setPosts] = useState([]);
    const router = useRouter();
    useEffect(() => {
        if (!session?.user) return;

=======
    useEffect(() => {
>>>>>>> f33378a815298b86ddeb1b1c271d879ca8a70201
        const fetchPosts = async () => {
          const response = await fetch(`api/users/${session?.user.id}/posts`);
          const data = await response.json();
          setPosts(data);
        }
        if(session?.user.id){
            fetchPosts();
        }
<<<<<<< HEAD
      }, [session?.user,]);
    const handleEdit = (post:any) => {
        router.push(`/update-prompt?id=${post._id}`);
    }
    const handleDelete = async(post:any) =>{
        console.log("hello")
        const hasConfirmed = confirm('Are you sure you want to delete this prompt');
        if(hasConfirmed){
            try{
                await fetch(`api/prompt/${post._id.toString()}`, {
                    method:'DELETE'
                });
            const filteredPosts = posts.filter((p:any) => p._id !== post._id);
            setPosts(filteredPosts);
            }catch(error){
                console.log(error)
                throw error;
            }
        }
=======
      }, []);
    const {data:session} = useSession();
    const [posts, setPosts] = useState([]);
    const handleEdit = () => {

    }
    const handleDelete = () =>{

>>>>>>> f33378a815298b86ddeb1b1c271d879ca8a70201
    }
  return (
    <Profile
        name="My"
        desc="Welcome to your personalize profile page"
        data={posts}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        />
  )
}

export default Profiles;
