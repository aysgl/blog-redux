import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col, Card, CardImg, CardImgOverlay, CardTitle, CardText } from 'reactstrap';
import { getBlogAsync } from '../redux/blogs/blogSlice';
import AddBlog from '../components/AddBlog';

export default function Blogs() {
    const blogs = useSelector(state => state.blogs.posts)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBlogAsync());
    }, [dispatch])

    console.log(blogs);

    return (
        <Container className='py-5'>

            <Row className='g-2'>
                <Col key={2113123213} lg={4} md={6}>
                    <AddBlog />
                </Col>
                {blogs.map(i =>
                    <Col key={i.id} lg={4} md={6}>
                        <a href={`${i.id}`}>
                            <Card inverse className={`card-${i.id}`}>
                                <CardImg id={`img-${i.id}`}
                                    alt="Card image cap"
                                    src={`https://picsum.photos/300/300?random=${i.id}`}
                                    width="100%"
                                />
                                <CardImgOverlay className='d-flex align-items-center justify-content-center'>
                                    <CardTitle tag="h1" className='text-center'>
                                        "{i.title}"
                                    </CardTitle>
                                </CardImgOverlay>
                            </Card>
                        </a>
                    </Col>
                )}
            </Row>
        </Container >
    )
}
