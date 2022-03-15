import { useContext } from "react";
import ImageUploading, { ImageListType } from "react-images-uploading";
import { MessageContext } from "../../contexts/MessageContext";
import SearchIcon from '@material-ui/icons/Search';

import "./ImageUpload.css";

const ImageUpload = (props: { buttonText: string }) => {
    const maxNumber = 69;
    const { image, setImage } = useContext(MessageContext);

    const onChange = (
        imageList: ImageListType,
        addUpdateIndex: number[] | undefined
    ) => {
        if (imageList[0].dataURL) {
            setImage(imageList[0].dataURL);
        }
    };

    return (
        <div className="image-upload">
            <ImageUploading
                value={[]}
                onChange={onChange}
                maxNumber={maxNumber}
            >
                {({
                    onImageUpload,
                    isDragging,
                    dragProps
                }) => (
                    <div className="image-upload_controls">
                        <button
                            style={isDragging ? { color: "red" } : undefined}
                            onClick={onImageUpload}
                            {...dragProps}
                            className="auth_form_controls_button"
                        >
                            <div className="browse-files-button">
                                <SearchIcon />
                                <div className="browse-files-button_text">
                                    {props.buttonText}
                                </div>
                            </div>
                        </button>
                    </div>
                )}

            </ImageUploading>
        </div>
    );
}

export default ImageUpload;