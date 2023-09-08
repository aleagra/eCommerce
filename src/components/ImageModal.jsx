import ReactImageMagnify from "react-image-magnify";

const ImageModal = ({ imageUrl, onClose }) => {
  const magnifyProps = {
    smallImage: {
      alt: "Imagen en pantalla completa",
      isFluidWidth: true,
      src: imageUrl,
    },
    largeImage: {
      src: imageUrl,
      width: 5000, // Ancho de la imagen ampliada
      height:3000, // Alto de la imagen ampliada
    },
   // Puedes ajustar la posición de la imagen ampliada
  };

  return (
    <div
      className="fixed top-0 left-0 w-screen h-screen flex  items-center bg-black bg-opacity-75"
      onClick={onClose}
    >
      <div className="relative">
        <button
          className="absolute top-2 right-10 text-white"
          onClick={onClose}
        >
          Cerrar
        </button>
        <ReactImageMagnify {...magnifyProps} />
      </div>
    </div>
  );
};

export default ImageModal;