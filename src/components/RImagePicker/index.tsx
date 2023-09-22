
import React from 'react';

import { S } from '../../styles/styles';
import { styles } from './styles'
import { TouchableOpacity } from 'react-native-gesture-handler';

import * as ImagePicker from 'react-native-image-picker';
import { Alert, Image, View } from 'react-native';

export default function RImagePicker() {
  const [img, setSelectedImg] = React.useState<any>(null);

  async function handleGalleryImg() {
    const options: ImagePicker.ImageLibraryOptions = {
      mediaType: 'photo',
    }

    const selectedImg = await ImagePicker.launchImageLibrary(options)

    if(selectedImg?.assets) {
      setSelectedImg(selectedImg.assets[0].uri)
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
      setSelectedImg(selectedImg.assets[0].uri)
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

  return (
    <S.Container alignItems="start">
      <S.TextDefault style={styles.r_image_picker__label}>Imagem</S.TextDefault>
      <View style={{width: 335}}>
        <TouchableOpacity onPress={handleImagePicker}>
          <View style={styles.r_image_picker__box}>
            {img ? (
              <Image style={{ width: '100%', height: '100%' }} source={{ uri: img }} />
            ) : (
              <S.TextDefault style={{ fontSize: 20 }}>Câmera/Galeria de Imagens</S.TextDefault>
            )}
          </View>
        </TouchableOpacity>
      </View>
    </S.Container>
  );
};