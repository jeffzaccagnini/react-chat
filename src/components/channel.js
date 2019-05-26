import React from 'react';
import Members from './members';
import ChannelInfo from './channel-info';
import Messages from './messages';
import ChatInputBox from './chat-input-box';
import { db } from '../utils/firebase';

function Channel({ user, channelId }) {
  React.useEffect(() => {
    db.doc(`users/${user.uid}`).update({
      [`channels.${channelId}`]: true
    })
  }, [user.uid, channelId]);

  return (
    <div className="Channel">
      <div className="ChannelMain">
        <ChannelInfo channelId={channelId} />
        <Messages channelId={channelId} />
        <ChatInputBox channelId={channelId} user={user} />
      </div>
      <Members channelId={channelId} />
    </div>
  );
}

export default Channel;
