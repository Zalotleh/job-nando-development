import React, { useState, useEffect } from 'react'
import axios from 'axios';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import chatStyles from '../styles/InterviewRoom.module.css'
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";
import {getAuth} from 'firebase/auth';
import { useAuth } from '@/context/AuthContext';
import Layout from '@/components/Layout';




function InterviewRoom() {
  const auth = getAuth();
  const {user} = useAuth()
  const [currentUser, setCurrentUser] = useState(null);
  const [userLoading, setUserLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setUserLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, [auth]);


const systemMessage = {
  "role": "system",
  "content": `As a professional career coach and interviewer, your primary role is to assist me in preparing
              for my interview. You will ask me questions to gather information about the role,
              job description, the hiring company or manager, and my experience.
              This will help you tailor the interview preparation process specifically to my needs.
              Next, we will focus on practicing my interview skills.
              You will provide me with interview questions and guide me through answering them.
              If you feel I need assistance in answering any of the questions, please let me know,
              and you will be happy to help.  
              Once I have answered the questions, you will provide feedback on my responses.
              you will highlight my strengths and provide constructive feedback on areas where I can improve.
              The goal is to help me refine my interview skills and increase my confidence.. 
              Please refrain from discussing any subject unrelated to the interview preparation and guide me to focus 
              on practicing my interview with you. Thank you!`
  }

  const [messages, setMessages] = useState([
    {
      message: `Hello ${user.displayName},
      I'm Nando, Your Interview advisor!
      Please note that our discussion will primarily revolve around interview preparation. 
      I kindly request that we stay focused on practicing your interview and refrain from discussing unrelated topics.
      Your progress and success in the interview process are my top priorities. 
      Thank you for entrusting me with your interview preparation. 
      Let's begin!`,
      sentTime: "just now",
      sender: "Nando"
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async (message) => {
    const newMessage = {
      message,
      direction: 'outgoing',
      sender: "user"
    };

    const newMessages = [...messages, newMessage];
    
    setMessages(newMessages);

    // Initial system message to determine ChatGPT functionality
    // How it responds, how it talks, etc.
    setIsTyping(true);
    await processMessageToChatGPT(newMessages);
  };

  async function processMessageToChatGPT(chatMessages) { // messages is an array of messages
    // Format messages for chatGPT API
    // API is expecting objects in format of { role: "user" or "assistant", "content": "message here"}
  

    let apiMessages = chatMessages.map((messageObject) => {
      let role = "";
      if (messageObject.sender === "ChatGPT") {
        role = "assistant";
      } else {
        role = "user";
      }
      return { role: role, content: messageObject.message}
    });

      try{
      const resultStr = await axios.post('/api/chat/processMessageToChatGPT', { systemMessage, apiMessages
      })
      const gptresponse = resultStr.data
      console.log(resultStr)

        setMessages([...chatMessages, {
            message: gptresponse,
            sender: "ChatGPT"
        }]);
        setIsTyping(false);
    } catch (error) {
        console.log(error)
        setErrorMessage('Soemthing went wrong, please try again later..')

    }

  }

  return (
    <>
    <Layout 
      metaTitle={'Interview Room'}
      pageTitle={'Interview Room'}
      notificationText={
        <div>
          <p>
            <pre-line>-Welcome to your interview room! Here, you can have a conversation with Nando, our AI model. he is professional and specialized recruiter and career coach.</pre-line>
            <pre-line>-Start by saying hello and let's get you prepared for your interview!</pre-line>
          </p>
          </div>
      }
    >

        {currentUser && !userLoading && (
          <>

                <div>
                    <MainContainer className={chatStyles.main_container}>
                        <ChatContainer className={chatStyles.chat_container}>       
                          <MessageList
                              className={chatStyles.message_list}
                              scrollBehavior="smooth" 
                              typingIndicator={isTyping ? <TypingIndicator className={chatStyles.typing_indicator} content="Career coach Nando is typing" /> : null}

                          >
                            {messages.map((message, i) => {
                                    console.log(message)
                                    return (<Message key={i} model={message} className={message.sender === 'user' ? chatStyles.sent : chatStyles.received}>
                                            <div className={chatStyles.message_text}>{message.message}</div>
                                           </Message>
                                    );
                                })}
                            </MessageList>
                            <MessageInput 
                              placeholder="Type your message here and press 'Enter' to send" 
                              onSend={handleSend}
                              
                            />

                        </ChatContainer>
                    </MainContainer>
                </div>

          </>
        )}
      </Layout>

    </>
  )
}

export default InterviewRoom