import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { changeReviewRat } from '../../../redux/action'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import swal from 'sweetalert'

const ChangeRating = ( {setChangeRating}) => {
    const reviewCreated = useSelector((state) => state.reviewsUser);
    const {id} = useParams();
    const dispatch = useDispatch();
    const validationSchema = Yup.object({
        rating : Yup.number().required('Required'),
    })

    const initialValues = {
            rating : '',
    }

    const onSubmit = (values) => {
        dispatch(changeReviewRat(reviewCreated[0].id ,values))
        setChangeRating(false)
        swal({
            title: "Rating changed!",
            icon: "success",
            button: "Ok",
        })
    }

    return (
        <div> 
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {formik => (
                    <div>
                        <form onSubmit={formik.handleSubmit}>
                            <label htmlFor="rating">Rating</label>
                            <input
                                type="number"
                                id="rating"
                                name="rating"
                                onChange={formik.handleChange}
                                value={formik.values.rating}
                            />
                            {formik.errors.rating ? <div>{formik.errors.rating}</div> : null}
                            <button type="submit">Save</button>
                        </form>
                    </div>
                )}
            </Formik>

        </div>
    )
}

export default ChangeRating