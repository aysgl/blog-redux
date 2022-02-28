import React from 'react'
import { Container } from 'reactstrap'

export default function NotFound() {
    return (
        <Container className='text-center'>
            <div className='text-white' style={{ fontSize: "14rem" }}>404</div>
            <div className='text-white display-1'>NotFound</div>
        </Container>
    )
}
