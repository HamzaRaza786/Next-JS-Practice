"use client";
import {useState} from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Form from '@components/Form';
const CreatePrompt = () => {
    const router = useRouter();
    const {data:session} = useSession();
    const [submitting, setSubmitting] = useState(false);
    const [post, setPost] = useState({
        prompt: '',
        tag: ''
    });
    const createPrompt = async (e:Event) =>{
        e.preventDefault()
        setSubmitting(true);
        try{
        const response = await fetch('/api/prompt/new', {
            method: 'POST',
            body: JSON.stringify({
                prompt: post.prompt,
                userId: session?.user?.id,
                tag: post.tag
            })  
        })
        if(response.ok){
<<<<<<< HEAD
=======
            console.log(response);
>>>>>>> f33378a815298b86ddeb1b1c271d879ca8a70201
            router.push('/')
        }
        }catch(error){
            console.log(error)
<<<<<<< HEAD
            throw error;
=======
>>>>>>> f33378a815298b86ddeb1b1c271d879ca8a70201
        }finally{
            setSubmitting(false);
        }
    }
  return (
    <Form 
        type = "Create"
        post = {post}
        setPost = {setPost}
        submitting={submitting}
        handleSubmit={createPrompt}
    />

  )
}

export default CreatePrompt;
