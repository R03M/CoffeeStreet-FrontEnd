import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'

const reviews = () => {
    const validationSchema = Yup.object({
        description : Yup.string().required('Required'),
        rating : Yup.number().required('Required')
    })

    const initialValues = {  
            description : '',
            rating : 0
            }
    
    const onSubmit = (values) => {
        console.log(values)
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
                            <label htmlFor="rating">Rating</label>
                            <input
                                type="number"
                                id="rating" 
                                name="rating"
                                onChange={formik.handleChange}
                                value={formik.values.rating}
                            />
                            {formik.errors.rating ? <div>{formik.errors.rating}</div> : null}
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                )}
            </Formik>
        </div>
    )
}
export default reviews