import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import PhotoCard from '../PhotoCard';

function PhotoList(props) {
    const { photoList, onPhotoRemoveClick, onPhotoEditClick } = props;

    return (
        <Row>
            {photoList.map(photo => (
                <Col key={photo.title} xs="12" md="6" lg="3">
                    <PhotoCard
                        photo={photo}
                        onPhotoRemoveClick={onPhotoRemoveClick}
                        onPhotoEditClick={onPhotoEditClick}
                    // onEditClick={onPhotoEditClick}
                    // onRemoveClick={onPhotoRemoveClick}
                    />
                </Col>
            ))}
        </Row>
    );
}

export default PhotoList;