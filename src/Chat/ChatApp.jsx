import React, {useEffect, useState} from 'react';
import {StreamChat} from 'stream-chat';
import {Channel, ChannelList, Chat,} from 'stream-chat-react';
import '@stream-io/stream-chat-css/dist/css/index.css';
import {
    CreateChannel,
    CustomMessage,
    MessagingChannelList,
    MessagingChannelPreview,
    MessagingInput,
    MessagingThreadHeader,
} from './components';

import {getRandomImage} from './assets';
import {ChannelInner} from './components/ChannelInner/ChannelInner';
import {useParams} from "react-router-dom";
import Page from "../AdminEnd/components/Page";


const urlParams = new URLSearchParams(window.location.search);


const targetOrigin = urlParams.get('target_origin') || process.env.REACT_APP_TARGET_ORIGIN;

const noChannelNameFilter = urlParams.get('no_channel_name_filter') || false;
const skipNameImageSet = urlParams.get('skip_name_image_set') || false;


const options = {state: true, watch: true, presence: true, limit: 8};

const sort = {
    last_message_at: -1,
    updated_at: -1,
};


export const GiphyContext = React.createContext({});

const ChatApp = ({role}) => {
    const {name, id} = useParams();
    const userToConnect = {id: role + '_' + id, name: role + ":" + id + " " + name, image: getRandomImage()};
    const filters = {type: 'messaging', members: {$in: [userToConnect.id]}};


    if (skipNameImageSet) {
        delete userToConnect.name;
        delete userToConnect.image;
    }
    const [chatClient, setChatClient] = useState(null);
    const [giphyState, setGiphyState] = useState(false);
    const [isCreating, setIsCreating] = useState(false);
    const [isMobileNavVisible, setMobileNav] = useState(false);
    const [theme, setTheme] = useState('light');
    // const api_key="3pyc8ffapns6";
    // const api_secret="c3m3m7f858wyt36kk95rqhdhb7bntmxwe47gs8pw7852jwgb4asgz4hnk3jrqad2"
    const apiKey = '7yveyu7r98q6';
    const apiSecret = 'c3m3m7f858wyt36kk95rqhdhb7bntmxwe47gs8pw7852jwgb4asgz4hnk3jrqad2';
    useEffect(async () => {

        const initChat = async () => {
            const client = StreamChat.getInstance(apiKey, {
                enableInsights: true,
                enableWSFallback: true,
            });
            await client.connectUser(userToConnect, client.devToken(userToConnect.id));
            const channel = client.channel('messaging', 'admin_' + role + '_' + id, {
                name: 'Welcome to Idea Incubator',
            });
            await channel.create();
            await channel.addMembers([userToConnect.id]);
            setChatClient(client);
        };

        initChat();

        return () => chatClient?.disconnectUser();

    }, []); // eslint-disable-line

    useEffect(() => {
        const handleThemeChange = ({data, origin}) => {
            // handle events only from trusted origin

            if (data === 'light' || data === 'dark') {
                setTheme(data);
            }
        };

        window.addEventListener('message', handleThemeChange);
        return () => window.removeEventListener('message', handleThemeChange);
    }, []);

    useEffect(() => {
        const mobileChannelList = document.querySelector('#mobile-channel-list');
        if (isMobileNavVisible && mobileChannelList) {
            mobileChannelList.classList.add('show');
            document.body.style.overflow = 'hidden';
        } else if (!isMobileNavVisible && mobileChannelList) {
            mobileChannelList.classList.remove('show');
            document.body.style.overflow = 'auto';
        }
    }, [isMobileNavVisible]);

    useEffect(() => {
        /*
         * Get the actual rendered window height to set the container size properly.
         * In some browsers (like Safari) the nav bar can override the app.
         */
        const setAppHeight = () => {
            const doc = document.documentElement;
            doc.style.setProperty('--app-height', `${window.innerHeight-30}px`);
        };
        setAppHeight();

        window.addEventListener('resize', setAppHeight);
        return () => window.removeEventListener('resize', setAppHeight);
    }, []);

    const toggleMobile = () => setMobileNav(!isMobileNavVisible);

    const giphyContextValue = {giphyState, setGiphyState};

    if (!chatClient) return null;

    return (
        <Page >
            <Chat client={chatClient} theme={`messaging ${theme}`}>
                <div id='mobile-channel-list' onClick={toggleMobile}>
                    <ChannelList
                        filters={filters}
                        sort={sort}
                        options={options}
                        List={(props) => (
                            <MessagingChannelList {...props} onCreateChannel={() => setIsCreating(!isCreating)}/>
                        )}
                        Preview={(props) => <MessagingChannelPreview {...props} {...{setIsCreating}} />}
                    />
                </div>
                <div>
                    <Channel
                        Input={MessagingInput}
                        maxNumberOfFiles={10}
                        Message={CustomMessage}
                        multipleUploads={true}
                        ThreadHeader={MessagingThreadHeader}
                        TypingIndicator={() => null}
                    >

                        {isCreating && (
                            <CreateChannel toggleMobile={toggleMobile} onClose={() => setIsCreating(false)}/>
                        )}
                        <GiphyContext.Provider value={giphyContextValue}>
                            <ChannelInner theme={theme} toggleMobile={toggleMobile}/>
                        </GiphyContext.Provider>
                    </Channel>
                </div>
            </Chat>
        </Page>
    );
};

export default ChatApp;
