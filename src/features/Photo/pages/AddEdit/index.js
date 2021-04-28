import React from 'react';
import Banner from 'component/Banner/index'
import './style.scss'
import PhotoForm from 'features/Photo/component/PhotoForm';
import { useDispatch, useSelector } from 'react-redux';
import { addPhoto, updatePhoto } from 'features/Photo/photoSlice';
import { useHistory, useParams } from 'react-router';


function AddEdit(props) {
    const dispatch = useDispatch()
    const history = useHistory()
    const { photoId } = useParams();
    const Addmode = !photoId;
    const EditPhoto = useSelector(state => {
        const foundPhoto = state.photos.find(x => x.id === +photoId);
        return foundPhoto;
    })
    const initialValues = Addmode
        ? {
            title: '',
            categoryId: null,
            photo: '',
            id: Math.floor(Math.random() * Math.floor(8999)) + 1000,

        }
        : EditPhoto;


    function handleSubmit(values) {
        if (Addmode) {
            const action = addPhoto(values);
            dispatch(action);
        }
        else {
            const action = updatePhoto(values);
            dispatch(action);
        }
        // console.log(values); // object {title, id, url}
        // console.log(action); // object {type, payload}
        // dispatch(action);
        history.push('/photo')
    }

    return (
        <div className="photo-edit">
            <Banner title="Pick your amazing photo 😎" ></Banner>
            <PhotoForm
                onSubmit={handleSubmit}
                initialValues={initialValues}
                Addmode={Addmode}
            />
        </div>
    );
}

export default AddEdit;