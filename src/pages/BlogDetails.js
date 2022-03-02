import React, { useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Container, Row, Col, Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import { getSlugAsync } from '../redux/blogs/blogSlice';
import { BlogContext } from '../redux/context';


export default function BlogDetails() {
    const navigate = useNavigate();
    let params = useParams();
    const blogs = useSelector(state => state.blogs.posts)
    const dispatch = useDispatch();
    const { colors } = useContext(BlogContext)

    document.body.style.backgroundColor = colors[Math.floor(Math.random() * 9) + 1];

    useEffect(() => {
        dispatch(getSlugAsync(params.blogid));
    }, [dispatch])

    return (
        <Container fluid className="text-white px-0 py-5">
            {blogs && blogs.id !== undefined ?
                <Container>
                    <div className='d-flex align-items-center justify-content-center text-center w-100 h-100'>
                        <div>
                            <Row>
                                <Col md={3} className="mx-auto mb-4">
                                    <Card inverse className="card">
                                        <CardImg
                                            alt="Card image cap"
                                            src={`https://picsum.photos/300/300?random=${blogs.id}`}
                                            width="100%"
                                            style={{ filter: "opacity(1) blur(0)", borderRadius: "150px" }}
                                        />
                                        <CardImgOverlay className='d-flex align-items-center justify-content-center'>

                                        </CardImgOverlay>
                                    </Card>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={9} className="mx-auto">
                                    <h2 className='display-2 lh-1 mb-4'>
                                        {blogs.title}
                                    </h2>
                                </Col>
                                <Col md={11} className="mx-auto">
                                    <h3 className='h2'>
                                        {blogs.body}
                                    </h3>
                                </Col>
                            </Row>
                        </div>
                    </div>

                    <Row className='d-flex justify-content-around mt-4'>
                        <Col md={3} className="ms-auto text-end">
                            <a className='h2 text-white' href={`${blogs.id - 1}`}>
                                prev
                            </a>
                        </Col>
                        <Col md={3} className="me-auto">
                            <a className='h2 text-white' href={`${blogs.id + 1}`}>
                                next
                            </a>
                        </Col>
                    </Row>
                </Container>
                : navigate("/404")
            }
        </Container >
    )
}
