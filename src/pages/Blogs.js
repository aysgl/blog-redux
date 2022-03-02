import React, { useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col, Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import { getBlogAsync } from '../redux/blogs/blogSlice';
import { BlogContext } from '../redux/context';


const Blogs = () => {
    const blogs = useSelector(state => state.blogs.posts)
    const { colors, getRandomRadius } = useContext(BlogContext)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBlogAsync());
    }, [])


    return (
        <Container className='py-5'>
            <Row className='g-2'>
                {blogs.map(i =>
                    <Col key={i.id} lg={4} md={6} >
                        <a href={`${i.id}`}>
                            <Card inverse style={{
                                backgroundColor: colors[Math.floor(Math.random() * 9) + 1],
                                borderRadius: getRandomRadius(100, 200)
                            }}>
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
export default Blogs