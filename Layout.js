import React from "react";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-orange-50">
      <style>{`
        :root {
          --primary: #0EA5E9;
          --secondary: #F97316;
          --accent: #EC4899;
          --success: #10B981;
          --warning: #F59E0B;
          --light: #FEFEFE;
          --dark: #1E293B;
        }
        
        * {
          scroll-behavior: smooth;
        }
        
        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          background: linear-gradient(135deg, #e0f2fe 0%, #ffffff 50%, #fff7ed 100%);
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #0EA5E9, #F97316, #EC4899);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .glass-morphism {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }
        
        .hover-glow {
          transition: all 0.3s ease;
        }
        
        .hover-glow:hover {
          box-shadow: 0 20px 60px rgba(14, 165, 233, 0.2);
          transform: translateY(-4px);
        }
        
        .cape-town-gradient {
          background: linear-gradient(135deg, #0EA5E9 0%, #F97316 50%, #EC4899 100%);
        }
        
        .fun-bounce {
          animation: gentle-bounce 2s ease-in-out infinite;
        }
        
        @keyframes gentle-bounce {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .mountain-shadow {
          filter: drop-shadow(0 4px 20px rgba(14, 165, 233, 0.3));
        }
      `}</style>
      {children}
    </div>
  );
}