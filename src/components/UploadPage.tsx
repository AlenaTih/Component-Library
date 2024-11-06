import { useState, ChangeEvent, MouseEvent } from "react"

function UploadPage() {
    const [formData, setFormData] = useState({
        fileName: "",
        imageUrl: "",
    })

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        const { files } = event.target

        if (files) {
            setFormData(prevFormData => {
                return {
                    ...prevFormData,
                    fileName: files[0].name,
                    imageUrl: URL.createObjectURL(files[0]),
                }
            })
        }
    }

    function handleButtonClick(event: MouseEvent<HTMLButtonElement>) {
        event.preventDefault()
    }

    return (
        <div className="upload-page">
            <h4 className="upload-page-title">
                Upload your file here
            </h4>

            <form className="form">
                <label htmlFor="input-file">
                    Choose a file
                    <input
                        className="input-file"
                        id="input-file"
                        type="file"
                        onChange={handleChange}
                        name="file"
                        aria-label="Upload file"
                    />
                </label>
                <button
                    className="upload-button"
                    onClick={handleButtonClick}>
                    Upload
                </button>
            </form>

            {formData.imageUrl && (
                <div className="uploaded-file-container">
                    <h4
                        className="uploaded-file-name">
                        {formData.fileName}
                    </h4>
                    <img
                        className="uploaded-image"
                        src={formData.imageUrl}
                    />
                </div>
            )}
        </div>
    )
}

export default UploadPage
