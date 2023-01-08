import "../style.css";
import FileUpload from "../../components/FileUpload/FileUpload";
const ImageUpload: React.FC = () => {
  return (
    <div className="file-upload-container">
      <p className="title">Upload file</p>
      <FileUpload />
    </div>
  );
};

export default ImageUpload;
