import React, { useCallback, useEffect, useMemo, useState, useContext,  } from 'react';
import { useDropzone } from 'react-dropzone';
import Button from '@material-ui/core/Button';
import { nftFileupload } from '../../network/api'
import { ContentContext } from '../../../contexts/ContentContext'



const baseStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  borderWidth: 2,
  borderRadius: 2,
  borderColor: '#eeeeee',
  borderStyle: 'dashed',
  backgroundColor: '#fafafa',
  color: '#bdbdbd',
  transition: 'border .3s ease-in-out'
};

const activeStyle = {
  borderColor: '#2196f3'
};

const acceptStyle = {
  borderColor: '#00e676'
};

const rejectStyle = {
  borderColor: '#ff1744'
};

function DropzoneComponent(props) {
  const [files, setFiles] = useState([]);

  const onDrop = useCallback(acceptedFiles => {
    setFiles(acceptedFiles.map(file => Object.assign(file, {
      preview: URL.createObjectURL(file)
    })));
  }, []);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject
  } = useDropzone({
    onDrop,
    accept: 'image/jpeg, image/png'

    
  });

  const style = useMemo(() => ({
    ...baseStyle,
    ...(isDragActive ? activeStyle : {}),
    ...(isDragAccept ? acceptStyle : {}),
    ...(isDragReject ? rejectStyle : {})
  }), [
    isDragActive,
    isDragReject,
    isDragAccept
  ]);

  const thumbs = files.map(file => (
    <div key={file.name}>
      <img
        src={file.preview}
        alt={file.name}
      />
    </div>
  ));

  const { walletId } = useContext(ContentContext)
  const cateArray = ["Select Category", "Art", "Video", "Podcast", "Sports", "Tickets", "Music", "Gaming"];
  const typeArray = ["Nothing", "Sell", "Auction"];
  const [subScription, setSubscription] = useState("");
  const [fileUrl, setFileUrl] = useState("");
  const [loadImage, setLoadImage] = useState("");
  const [uploadFile, setUploadFile] = useState(null);
  const [uploadImage, setUploadImage] = useState(null);
  const [nftName, setNftname] = useState("");
  const [category, setCategory] = useState("");
  const [sellType, setSellType] = useState("Nothing");
  const [price, setPrice] = useState(-1);
  const [isPrice, setIsPrice] = useState(false);

  const selectNftFile = (event) => {
    setUploadFile(event.target.files[0]);
    setFileUrl(URL.createObjectURL(event.target.files[0]));
    setLoadImage(URL.createObjectURL(event.target.files[0]));
  }

  const selectImageFile = (event) => {
    setUploadImage(event.target.files[0]);
    setLoadImage(URL.createObjectURL(event.target.files[0]));
  }

  useEffect(() => {
    setNftname("");
    setSubscription("");
    setLoadImage("");
    setFileUrl("");
    setCategory("");
    setUploadFile(null);
    setUploadFile(null);
  },[])



  // clean up
  useEffect(() => () => {
    files.forEach(file => URL.revokeObjectURL(file.preview));
  }, [files]);


  const fileUpload = () => {
    const data = new FormData();
    const len = loadImage.split("/").length;

    if(walletId.length === 0){
      alert("Please Connect to wallet");
      return;
    }

    if(nftName.length === 0){
      alert("Please enter Nft name");
      return;
    }

    if(uploadFile === null || fileUrl.length === 0){
      alert("Please select nft file");
      return;
    }

    if(uploadImage === null || loadImage.length === 0){
      alert("Please select logo image");
      return;
    }

    if(category.length === 0){
      alert("Please select category");
      return;
    }

    if(sellType === 'Sell' || sellType === 'Auction'){
      if(price < 0){
        alert("Please enter price");
        return;
      }
    }

    if(subScription.length === 0){
      alert("Please enter subscription");
      return;
    }

    data.append('walletId', walletId);
    data.append('nftName', nftName);
    data.append('subScription', subScription);
    data.append('nftFileName', fileUrl.split("/")[len - 1]);
    data.append('imgFileName', loadImage.split("/")[len - 1]);
    data.append('nftFile', uploadFile);
    data.append('imgFile', uploadImage);
    data.append('category', category);
    data.append('price', price.toString());
    data.append('sellType', sellType);
    data.append('fav', "");

    nftFileupload(data).then((result) => {
      if(result.sucess){
        alert("success file upload")
      }
    });
  }




  return (
    <section>
      <div id="dropZone" {...getRootProps({...style})}>
        <input {...getInputProps()} onChange={(event) => selectNftFile(event)} required/>
        <div className="img-font" style={{color:'white'}}>PNG, GIF, WEBP, MP4 or MP3. Max 30mb.
          <br />
          <Button variant="contained" color="primary" id="btn-file">
            Select File
          </Button>
        </div>
        {loadImage.length > 0 && (
            <img src={loadImage} alt="img" className="nft-load-image" />
        )}
      </div>
      
    </section>
  )
}

export default DropzoneComponent;