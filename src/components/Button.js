export default function Button({ label, onClick, type = "digit" }) {
    const getButtonStyle = () => {
      switch (type) {
        case "digit":
          return "bg-blue-500 text-white font-bold py-2 px-4 rounded";
        case "decimal":
          return "bg-green-500 text-white font-bold py-2 px-4 rounded";
        case "function":
          return "bg-red-500 text-white font-bold py-2 px-4 rounded";
        default:
          return "bg-gray-500 text-white font-bold py-2 px-4 rounded";
      }
    };
  
    return (
      <button onClick={onClick} className={getButtonStyle()}>
        {label}
      </button>
    );
  }