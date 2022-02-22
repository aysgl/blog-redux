import React, { useState } from 'react'
import { Form, Input } from 'reactstrap'
import { useDispatch } from 'react-redux'
import { addBlog } from '../redux/blogs/blogSlice'
import { nanoid } from '@reduxjs/toolkit'

export default function AddBlog() {
    const [title, setTitle] = useState("")
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addBlog({ id: nanoid(), title }))
        setTitle("");
    }
    return (
        <Form onSubmit={handleSubmit}>
            <Input value={title} onChange={(e) => setTitle(e.target.value)} />
        </Form>
    )
}
