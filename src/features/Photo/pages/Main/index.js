import React from 'react';
import Banner from 'component/Banner/index'
import Images from 'constants/image'
import { Link } from 'react-router-dom'
import { Container } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux';
import PhotoList from 'features/Photo/component/photoList';
import { removePhoto } from 'features/Photo/photoSlice';
import { useHistory } from 'react-router';


function Main(props) {
    const photos = useSelector(state => state.photos);
    const dispatch = useDispatch();
    const history = useHistory();
    const handlePhotoRemoveClick = (photo) => {
        // console.log('Remove: ', photo);
        const removePhotoId = photo;
        const action = removePhoto(removePhotoId);
        dispatch(action);
    }
    const handlePhotoEditClick = (photo) => {
        history.push(`/photo/${photo.id}`)
    }

    return (
        <div className="photo-main">
            <Banner title="Your awesome photos" backgroundUrl={Images.PINK_BG}></Banner>
            <Container className="text-center">
                <Link to="photo/add"> Add new photo</Link>
            </Container>
            <PhotoList
                photoList={photos}
                onPhotoRemoveClick={handlePhotoRemoveClick}
                onPhotoEditClick={handlePhotoEditClick}
            />
        </div>
    );
}

export default Main;