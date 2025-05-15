"use client";
import RequiredComponents from "@/components/required-components/required-components";
import { useFormik } from "formik";
import { useSession } from "next-auth/react";
import { Button, Col, Form, Row } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";
import "react-phone-input-2/lib/style.css";
import { validationSchema } from "./validation-schema";
import { useRouter } from 'next/navigation';

const AddCampaign = ({ setShow }) => {
    const router = useRouter();

    const { data: session } = useSession();

    const formik = useFormik({
        initialValues: {
            campaign_name: "",
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            console.log(values);
            setShow(false);
            router.push('/campaign/123');
        },
    });

    
    return (
        <Form onSubmit={formik.handleSubmit}>
            <Row>
                <Col md={12}>
                    <Form.Group className="form-group">
                        <Form.Label>
                        Campaign Name <RequiredComponents />
                        </Form.Label>
                        <Form.Control
                            name="campaign_name"
                            type="text"
                            placeholder="Enter Campaign Name"
                            value={formik.values.campaign_name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.campaign_name &&
                            formik.errors.campaign_name && (
                                <p className="warning-text text-danger">
                                    {formik.errors.campaign_name}
                                </p>
                            )}
                    </Form.Group>
                </Col>
            </Row>
            <div className="d-flex justify-content-end mt-3 gap-2">
                <Button variant="secondary" onClick={() => setShow(false)}>
                    Cancel
                </Button>
                <Button
                    type="submit"
                    variant="primary"
                    disabled={formik.isSubmitting}
                >
                    Save
                </Button>
            </div>
        </Form>
    );
};

export default AddCampaign;
