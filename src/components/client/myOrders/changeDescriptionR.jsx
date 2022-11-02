import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { changeReviewDesc } from '../../../redux/action'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import swal from 'sweetalert'

const ChangeDescriptionR = ({setChangeDescription}) => {
    const reviewCreated = useSelector((state) => state.reviewsUser);
    const {id} = useParams();
    const dispatch = useDispatch();
    const validationSchema = Yup.object({
        description : Yup.string().required('Required'),
    })

    const initialValues = {
            description : '',
    }

    const onSubmit = (values) => {
        dispatch(changeReviewDesc(reviewCreated[0].id ,values))
        setChangeDescription(false)
        swal({
            title: "Description changed!",
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
                            <label htmlFor="description">Description</label>
                            <input
                                type="text"
                                id="description"
                                name="description"
                                onChange={formik.handleChange}
                                value={formik.values.description}
                            />
                            {formik.errors.description ? <div>{formik.errors.description}</div> : null}
                            <button type="submit">Save</button>
                        </form>
                    </div>
                )}
            </Formik>

        </div>
    )
}

export default ChangeDescriptionR
