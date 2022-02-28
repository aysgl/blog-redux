import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Container, Row, Col, Card, CardImg, CardImgOverlay, CardTitle, CardText } from 'reactstrap';
import NotFound from '../components/NotFound';
import { getSlugAsync, nextBlog } from '../redux/blogs/blogSlice';

export default function BlogDetails() {
    let params = useParams();
    const blogs = useSelector(state => state.blogs.posts)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSlugAsync(params.blogid));
    }, [dispatch])

    const nav = useNavigate();

    return (
        <>
            {blogs && blogs.id ?
                <Container fluid className="text-white px-0 py-5">
                    <Container>
                        <div className='d-flex align-items-center justify-content-center text-center w-100 h-100'>
                            <div>
                                <Row>
                                    <Col md={3} className="mx-auto mb-4">
                                        <Card inverse className={`card-${blogs.id}`}>
                                            <CardImg id={`img-${blogs.id}`}
                                                alt="Card image cap"
                                                src={`https://picsum.photos/300/300?random=${blogs.id}`}
                                                width="100%"
                                                style={{ filter: "opacity(1) blur(0)" }}
                                            />
                                            <CardImgOverlay className='d-flex align-items-center justify-content-center'>

                                            </CardImgOverlay>
                                        </Card>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={8} className="mx-auto">
                                        <h2 className='display-2 lh-1 mb-4'>
                                            {blogs.title}
                                        </h2>
                                    </Col>
                                    <Col md={10} className="mx-auto">
                                        <h3 className='h2'>
                                            {blogs.body}
                                        </h3>
                                    </Col>
                                </Row>
                            </div>
                        </div>

                        <Row className='d-flex justify-content-around mt-4'>
                            <Col md={3} className="ms-auto">
                                <a href={`${blogs.id - 1}`}>
                                    <Card inverse className={`card-${blogs.id - 1}`}>
                                        <CardTitle tag="h1" className='text-center'>
                                            prev
                                        </CardTitle>
                                    </Card>
                                </a>
                            </Col>
                            <Col md={3} className="me-auto">
                                <a
                                    // href={dispatch(nextBlog({ id: blogs.id }))}
                                    href={`${blogs.id + 1}`}
                                >
                                    <Card inverse className={`card-${blogs.id + 1}`}>
                                        <CardTitle tag="h1" className='text-center'>
                                            next
                                        </CardTitle>
                                    </Card>
                                </a>
                            </Col>
                        </Row>
                    </Container>
                </Container > : <NotFound />
            }
        </>
    )
}
