import React from 'react';
import { Avatar, useChatContext } from 'stream-chat-react';

const TeamChannelPreview = ({channel,type})=>{

    const { channel: activechannel , client }=useChatContext();

    const ChannelPreview = ()=>{
        <p className = "channel-preview__items">
            <div id={channel?.data?.name  || channel?.data?.id}></div>
        </p>
    };

    const DirectPreview = ()=>{
        const members = Object.values(channel.state.members).filter(({user})=>user.id !== client.userID);

        return (
            <div className="channel-preview__item single">
                <Avatar
                   image={members[0]?.user?.images}
                   name={members[0]?.users?.fullName}
                   size={24}
                />

                <p>
                    {members[0]?.user?.fullName}
                </p>

            </div>
        )
    }

    return (
        <div className={
            channel?.id=== activechannel?.id
            ? 'channel-preview__wrapper__selected'
            : 'channel-preview__wrapper'
        }
            onClick = {()=>{
                console.log(channel);
            }}
        >
            {type === 'team' ? <ChannelPreview/>:<DirectPreview/>}

            

        </div>
    )

}

export default TeamChannelPreview;