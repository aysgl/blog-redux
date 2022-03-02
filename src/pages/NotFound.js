import React, { useContext } from 'react'
import { Container } from 'reactstrap'
import { BlogContext } from '../redux/context';

export default function NotFound() {
    const { colors } = useContext(BlogContext)
    document.body.style.backgroundColor = "#000";
    return (
        <Container className='text-center'>
            <div className='outer'>
                <div className='text-white animate' style={{ textShadow: `5px 10px ${colors[Math.floor(Math.random() * 9) + 1]}` }}>4</div>
                <div className='text-white animate' style={{ textShadow: `5px 10px ${colors[Math.floor(Math.random() * 9) + 1]}` }}>0</div>
                <div className='text-white animate' style={{ textShadow: `5px 10px ${colors[Math.floor(Math.random() * 9) + 1]}` }}>4</div>
            </div>
            <div className='display-1 text-white'>NotFound</div>
        </Container>
    )
}
