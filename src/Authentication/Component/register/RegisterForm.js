import * as Yup from 'yup';
import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { useFormik, Form, FormikProvider } from 'formik';
import eyeFill from '@iconify/icons-eva/eye-fill';
import eyeOffFill from '@iconify/icons-eva/eye-off-fill';
import { useNavigate } from 'react-router-dom';
// material
import { Stack, TextField, IconButton, InputAdornment } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import {Create} from "../../../ApiServices/create";
import CustomSnackbar from "../../../Utils/SnakBar";

// ----------------------------------------------------------------------

export default function RegisterForm() {
  const navigate = useNavigate();


  const [statusCode,setStatusCode]=useState({cond:false,res:0});

  const formik = useFormik({
    initialValues: {
      name :'',
      email :'',
      field :'',
      projectname :'',
      dateSubmit :Date.now(),
      description :'',
      technology :'',
      headline:''
    },
    onSubmit: async() => {
      const data={
        name: formik.values.name.toString(),
        email: formik.values.email.toString(),
        field:formik.values.field.toString(),
        description:formik.values.description.toString(),
        projectname:formik.values.projectname.toString(),
        dateSubmit:formik.values.dateSubmit,
        technology:formik.values.technology.toString(),
        headline:formik.values.headline.toString()
      }
      const response=await Create('idea',data);
      if(response.status===200){
        setStatusCode({...statusCode,['cond']:true,["res"]:200})
        setTimeout(function(){
          navigate('/login', { replace: true });
        }, 2000);
      }else{
        setStatusCode({...statusCode,['cond']:true,["res"]:response.status})
      }

    }
  });

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps } = formik;

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <TextField
              fullWidth
              label="Name"
              {...getFieldProps('name')}
              error={Boolean(touched.name && errors.name)}
              helperText={touched.name && errors.name}
            />

            <TextField
              fullWidth
              label="Field"
              {...getFieldProps('field')}
              error={Boolean(touched.field && errors.field)}
              helperText={touched.field && errors.field}
            />
          </Stack>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <TextField
                fullWidth
                label="Project Name"
                {...getFieldProps('projectname')}
                error={Boolean(touched.projectname && errors.projectname)}
                helperText={touched.projectname && errors.projectname}
            />

            <TextField
                fullWidth
                label="Technology"
                {...getFieldProps('technology')}
                error={Boolean(touched.technology && errors.technology)}
                helperText={touched.technology && errors.technology}
            />
          </Stack>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <TextField
                fullWidth
                label="Headline"
                {...getFieldProps('headline')}
                error={Boolean(touched.headline && errors.headline)}
                helperText={touched.headline && errors.headline}
            />
            <TextField
                fullWidth
                autoComplete="username"
                type="email"
                label="Email address"
                {...getFieldProps('email')}
                error={Boolean(touched.email && errors.email)}
                helperText={touched.email && errors.email}
            />
          </Stack>

          <TextField
              fullWidth
              label="Description"
              multiline={true}
              maxRows={4}
              {...getFieldProps('description')}
              error={Boolean(touched.description && errors.description)}
              helperText={touched.description && errors.description}
          />


          <LoadingButton
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            loading={isSubmitting}
          >
            Submit
          </LoadingButton>
        </Stack>
      </Form>
      {(statusCode.cond? (statusCode.res===200?
          <CustomSnackbar message={"Successfully Submitted the Idea"} type={'primary'}/>
          :
          <CustomSnackbar message={"Error While Submitting Idea"} type={'error'}/>):'')}
    </FormikProvider>
  );
}
