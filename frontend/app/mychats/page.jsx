'use client'

import React from 'react'
import { Plus, Send } from 'lucide-react'
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from "@/components/ChatFeed";

const page = () => {
  return (
    <>
    <div className="w-full z-0 text-white">
    <ChatEngine
      height="92vh"
			projectID="328ecbc2-6119-4b92-98f7-441764783da0"
			userName='Arjun Naik'
			userSecret='mango'
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
		/>
    </div>
    </>
  )
}

export default page