import React from 'react'
import {
    Button,
    Card,
    CardContent,
    CardHeader,
    Checkbox,
    Divider,
    FormControlLabel,
    Grid,
    Switch,
    Typography
} from '@mui/material'
import Page from "../../../../../SuperAdminEnd/components/Page";
import Container from "@mui/material/Container";
import {Box} from "@mui/system";

export default function NotificationSettings() {
    const [CheckBoxes, setCheckBoxes] = React.useState({email: false, sms: false, inApp: false})
    const handleEmail = (event) => {
        setCheckBoxes({
            CheckBoxes: {
                ...CheckBoxes,
                email: event.target.value
            }
        })
    }
    const handleSMS = (event) => {
        setCheckBoxes({
            CheckBoxes: {
                ...CheckBoxes,
                sms: event.target.value
            }
        })
    }
    const handleInApp = (event) => {
        setCheckBoxes({
            CheckBoxes: {
                ...CheckBoxes,
                inApp: event.target.value
            }
        })
    }
    return (
        <Page title={"Account Payment | Idea Incubator"}>
            <form >
                <Card>
                    <CardHeader
                        subheader="Manage the notifications"
                        title="Notifications"
                    />
                    <Divider />
                    <CardContent>
                        <Grid
                            container
                            spacing={6}
                            wrap="wrap"
                        >
                            <Grid
                                item
                                md={4}
                                sm={6}
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}
                                xs={12}
                            >
                                <Typography
                                    color="textPrimary"
                                    gutterBottom
                                    variant="h6"
                                >
                                    Notifications
                                </Typography>
                                <FormControlLabel
                                    control={(
                                        <Checkbox
                                            color="primary"
                                            defaultChecked
                                        />
                                    )}
                                    label="Email"
                                />
                                <FormControlLabel
                                    control={(
                                        <Checkbox
                                            color="primary"
                                            defaultChecked
                                        />
                                    )}
                                    label="Push Notifications"
                                />
                                <FormControlLabel
                                    control={<Checkbox />}
                                    label="Text Messages"
                                />
                                <FormControlLabel
                                    control={(
                                        <Checkbox
                                            color="primary"
                                            defaultChecked
                                        />
                                    )}
                                    label="Phone calls"
                                />
                            </Grid>
                            <Grid
                                item
                                md={4}
                                sm={6}
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}
                                xs={12}
                            >
                                <Typography
                                    color="textPrimary"
                                    gutterBottom
                                    variant="h6"
                                >
                                    Messages
                                </Typography>
                                <FormControlLabel
                                    control={(
                                        <Checkbox
                                            color="primary"
                                            defaultChecked
                                        />
                                    )}
                                    label="Email"
                                />
                                <FormControlLabel
                                    control={<Checkbox />}
                                    label="Push Notifications"
                                />
                                <FormControlLabel
                                    control={(
                                        <Checkbox
                                            color="primary"
                                            defaultChecked
                                        />
                                    )}
                                    label="Phone calls"
                                />
                            </Grid>
                        </Grid>
                    </CardContent>
                    <Divider />
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                            p: 2
                        }}
                    >
                        <Button
                            color="primary"
                            variant="contained"
                        >
                            Save
                        </Button>
                    </Box>
                </Card>
            </form>
        </Page>
    )
}
