import React from 'react';
import {Button} from "@mui/material";
import ZoomMtgEmbedded from '@zoomus/websdk/embedded'

function Zoom(props) {

    const client = ZoomMtgEmbedded.createClient()
    const crypto = require('crypto') // crypto comes with Node.js
    function generateSignature(apiKey, apiSecret, meetingNumber, role) {
        // Prevent time sync issue between client signature generation and Zoom
        const timestamp = new Date().getTime() - 30000
        const msg = Buffer.from(apiKey + meetingNumber + timestamp + role).toString('base64')
        const hash = crypto.createHmac('sha256', apiSecret).update(msg).digest('base64')
        return Buffer.from(apiKey, meetingNumber, timestamp, role, hash).toString('base64')
    }
    return (
        <div>
            <Button>
                Open Meeting
            </Button>
        </div>
    );
}

export default Zoom;