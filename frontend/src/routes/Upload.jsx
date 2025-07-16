import React, { PureComponent } from 'react'
import Dropzone from 'react-dropzone'
import { useDropzone } from 'react-dropzone'
import { useCallback } from 'react'
import '../Upload.css'
import { Box } from '@chakra-ui/react'

function MyDropzone() {
    const onDrop = useCallback(acceptedFiles => {
      // Do something with the files
    }, [])
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
  
    return (
      <Box {...getRootProps()}  className="dropzone" border-color="red">
        <input {...getInputProps()} />
        {
          isDragActive ?
            <p>Drop the files here ...</p> :
            <p>Drag 'n' drop some files here, or click to select files</p>
        }
      </Box>
    )
  }

export class Upload extends PureComponent {

    
  render() {
    return (
        <div className="container">
      <div className="upload-title">Upload</div>

      <MyDropzone/>
      <p className="tags-p"> Tags: (Tags show up here after the file is uploaded)</p>
</div>
    )
  }
}

export default Upload