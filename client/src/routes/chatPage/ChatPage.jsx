import "./chatPage.css";
import NewPrompt from "../../components/newPrompt/NewPrompt";

const ChatPage = () => {
  

  return (
    <div className="chatPage">
      <div className="wrapper">
        <div className="chat">
          <div className="message">Text Message from ai lorem</div>
          <div className="message user">
            Text Message from user Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Veritatis, saepe placeat! Animi fugiat neque
            cumque excepturi corrupti temporibus vitae, doloremque, quae dolorum
            omnis rerum nulla eum, exercitationem reprehenderit provident
            suscipit?
          </div>
          <div className="message">Text Message from ai</div>
          <div className="message user">Text Message from user</div>
          <div className="message">Text Message from ai</div>
          <div className="message user">Text Message from user</div>
          <div className="message">Text Message from ai</div>
          <div className="message user">Text Message from user</div>
          <div className="message">Text Message from ai</div>
          <div className="message user">Text Message from user</div>
          <div className="message">Text Message from ai</div>
          <div className="message user">Text Message from user</div>
          <div className="message">Text Message from ai</div>
          <div className="message user">Text Message from user</div>
          <div className="message">Text Message from ai</div>
          <div className="message user">Text Message from user</div>
          <div className="message">Text Message from ai</div>
          <div className="message user">Text Message from user</div>
          <div className="message">Text Message from ai</div>
          <div className="message user">Text Message from user</div>
          <div className="message">Text Message from ai</div>
          <div className="message user">Text Message from user</div>
          <div className="message">Text Message from ai</div>
          <NewPrompt />
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
