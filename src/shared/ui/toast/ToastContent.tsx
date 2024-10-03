export const ToastContent = ({ content }: { content: string }) => {
  return (
    <div
      style={{
        backgroundColor: '#333',
        color: '#fff',
        padding: '10px',
        borderRadius: '5px',
        margin: '5px 0',
        opacity: 1,
        transition: 'opacity 0.5s ease-in-out',
      }}
    >
      {content}
    </div>
  );
};
