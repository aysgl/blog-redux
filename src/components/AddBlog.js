import React, { useState } from 'react'
import { Form, Input, Card, CardImg, CardImgOverlay, CardTitle, CardText } from 'reactstrap'
import { useDispatch } from 'react-redux'
import { addBlog } from '../redux/blogs/blogSlice'
import { nanoid } from '@reduxjs/toolkit'

export default function AddBlog() {
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addBlog({ id: nanoid(), title, desc }))
        setTitle("");
    }
    return (
        <Form onSubmit={handleSubmit}>
            <Card inverse className={`card-1`}>
                <CardImg id={`img-1`}
                    alt="Card image cap"
                    src={`https://picsum.photos/300/300?random=1`}
                    width="100%"
                />
                <CardImgOverlay className='d-flex align-items-center justify-content-center'>
                    <CardTitle tag="h1" className='text-center'>
                        <Input placeholder='add retro post' size="lg" className='bg-transparent rounded-0 border-0 border-bottom' value={title} onChange={(e) => setTitle(e.target.value)} />
                        {/* <Input placeholder='add retro post description' size="lg" className='bg-transparent rounded-0 border-0 border-bottom' value={desc} onChange={(e) => setDesc(e.target.value)} /> */}
                    </CardTitle>
                </CardImgOverlay>
            </Card>
        </Form>
    )
}
