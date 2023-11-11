import React, { FC, useEffect } from 'react';

import { S } from '../../styles/styles';
import { styles } from './styles'
import { TouchableOpacity } from 'react-native-gesture-handler';

import * as ImagePicker from 'react-native-image-picker';
import { Alert, Image, ImageSourcePropType, View } from 'react-native';
import { reducerSetSelectedImage } from '../../service/redux/selectedImageSlice';
import { useDispatch, useSelector } from 'react-redux';

interface RImagePickerProps {
  cardImage?: any
}

const RImagePicker: FC<RImagePickerProps> = ({cardImage}) => {
  const selectedImage = useSelector((state: any) => state.selectedImage.image.image)

  const dispatch = useDispatch();

  async function handleGalleryImg() {
    const options: ImagePicker.ImageLibraryOptions = {
      mediaType: 'photo',
    }

    const selectedImg = await ImagePicker.launchImageLibrary(options)

    if(selectedImg?.assets) {
      dispatch(reducerSetSelectedImage({
        image: selectedImg.assets[0].uri
      }))
      return
    }
  }

  async function handleCameraImg() {
    const options: ImagePicker.CameraOptions = {
        saveToPhotos: true,
        mediaType: 'photo',
    }

    const selectedImg = await ImagePicker.launchCamera(options)

    if(selectedImg?.assets) {
      dispatch(reducerSetSelectedImage({
        image: selectedImg.assets[0].uri
      }))
      return
    }
  }

  function handleImagePicker() {
    Alert.alert(
      "Selecione",
      "Escolha a forma de adição da imagem",
      [
        {
          text: "Cancelar",
          onPress: () => '',
          style: "cancel"
        },
        {
          text: "Câmera",
          onPress: () => handleCameraImg(),
          style: "default"
        },
        {
          text: "Galeria",
          onPress: () => handleGalleryImg(),
          style: "default"
        },
      ],
    )
  }

  useEffect(() => {
    dispatch(reducerSetSelectedImage({
      image: ''
    }))
  }, [dispatch]);

  return (
    <S.Container alignItems="start">
      <S.TextDefault style={styles.r_image_picker__label}>Imagem</S.TextDefault>
      <View style={{width: 335}}>
        <TouchableOpacity onPress={handleImagePicker}>
          <View style={styles.r_image_picker__box}>
            {selectedImage || cardImage ? (
              <Image style={{ width: '100%', height: '100%' }} source={{ uri: selectedImage || cardImage }} />
            ) : (
              <S.TextDefault style={{ fontSize: 16 }}>Câmera/Galeria de Imagens</S.TextDefault>
            )}
          </View>
        </TouchableOpacity>
      </View>
    </S.Container>
  );
};

export default RImagePicker;