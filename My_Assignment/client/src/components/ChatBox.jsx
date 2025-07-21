import { useContext, useState } from "react";
import { ChatContext } from "../context/ChatContext";

const ChatBox = () => {
  const { messages, sendMessage } = useContext(ChatContext); // ✅ No setMessages here
  const [username, setUsername] = useState("Sam");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      sendMessage({
        username,
        message,
        time: new Date().toLocaleTimeString()
      });
      setMessage("");
    }
  };

  return (
    <div className="max-w-md w-full mx-auto p-6 bg-white rounded-xl shadow-md space-y-4">
      <h2 className="text-2xl font-bold text-center text-blue-600">💬 Real-Time Chat</h2>

      <div className="h-64 overflow-y-auto border p-3 rounded bg-gray-50 space-y-2">
        {messages.map((msg, index) => (
          <div key={index} className="text-sm text-gray-800">
            <span className="font-semibold text-blue-500">{msg.username}</span>: {msg.message}
            <span className="text-xs text-gray-400 ml-2">({msg.time})</span>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          className="flex-1 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Type a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatBox;
