import React from 'react';
import { MessageCircle } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Welcome to Our Website!</h1>
        <p className="text-xl text-gray-600">Get instant help using our AI chatbot.</p>
      </header>
      
      <section className="bg-white rounded-lg shadow-md p-6 w-full max-w-2xl">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
          <MessageCircle className="mr-2" />
          Chat with our AI Assistant
        </h2>
        <div className="w-full h-[600px]">
          <iframe
            src="https://embed.cody.bot/9ce1a154-0ce0-4ac1-ae49-84eb884ce20f"
            style={{ border: '0px' }}
            name="codyai"
            scrolling="no"
            frameBorder="1"
            marginHeight="0"
            marginWidth="0"
            height="100%"
            width="100%"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </div>
  );
}

export default App;