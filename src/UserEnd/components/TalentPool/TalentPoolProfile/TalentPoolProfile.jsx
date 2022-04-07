import React from 'react';
import './TalentPoolProfile.css';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import {Grid} from '@mui/material'


export default function TalentPoolProfile() {
    return (
        <div className="card user-card-full">
            <div className="row">
                <div className="col-sm-3 bg-c-lite-green user-profile">
                    <div className="card-block text-center text-white">
                        <div className="m-b-25">
                            <img alt={'img'} src={'https://raw.githubusercontent.com/ritaxcorreia/react-profile-card/master/src/images/image-rita.png'} className="img-radius" /> </div>
                        <h6 className="f-w-600">Abbas Ali</h6>
                        <p>Associate Software Engineer</p>
                    </div>
                </div>
                <div className="col-sm-9">
                    <div className="card-block">
                        <h6 className="m-b-20 p-b-5 b-b-default f-w-600">Information</h6>
                        <div className="row">
                            <div className="col-sm-6">
                                <p className="m-b-10 f-w-600">Email</p>
                                <Grid container>
                                    <Grid item xs={10} md={10} sm={10} xl={10}>

                                        <h6 className="text-muted f-w-400">rntng@gmail.com</h6>
                                    </Grid>
                                    <Grid item xs={2} md={2} sm={2} xl={2} >
                                        < ContentCopyIcon fontSize="small" sx={{ cursor: 'pointer', mb: 1 }} onClick={() => {

                                        }} />
                                    </Grid>
                                </Grid>


                            </div>
                            <div className="col-sm-6">
                                <p className="m-b-10 f-w-600">Phone</p>

                                <Grid container>
                                    <Grid item xs={10} md={10} sm={10} xl={10}>

                                        <h6 className="text-muted f-w-400">98979989898</h6>
                                    </Grid>
                                    <Grid item xs={2} md={2} sm={2} xl={2} >
                                        < ContentCopyIcon fontSize="small" sx={{ mb: 1, cursor: 'pointer' }} onClick={() => {

                                        }} />
                                    </Grid>
                                </Grid>
                            </div>
                        </div>
                        <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">Skills & Projects</h6>
                        <div className="row">
                            <div className="col-sm-6">
                                <p className="m-b-10 f-w-600">Skills</p>
                                <h6 className="text-muted f-w-400">Sam Disuja Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ea explicabo voluptatum atque possimus quibusdam, quod ratione fugit excepturi sint tempora beatae. Nihil pariatur, tenetur aut eligendi placeat autem voluptates.</h6>
                            </div>
                            <div className="col-sm-6">
                                <p className="m-b-10 f-w-600">Recent Projects</p>
                                <h6 className="text-muted f-w-400">Dinoter husainm Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora adipisci ut eum quia quos. Reiciendis, ab ipsum quis est tenetur nisi vero odio, nihil aperiam amet reprehenderit? Modi, eaque asperiores!</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
