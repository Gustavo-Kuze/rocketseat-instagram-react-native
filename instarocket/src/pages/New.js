import React, { Component } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet
} from "react-native";
import ImagePicker from "react-native-image-picker";

export default class New extends Component {
  static navigationOptions = {
    headerTitle: "Novo post"
  };

  state = {
    author: "",
    description: "",
    place: "",
    hashtags: "",
    preview: null,
    image: null,
  };

  handleSelectImage = () => {
    ImagePicker.showImagePicker(
      {
        title: "Selecione uma imagem"
      },
      upload => {
        if (upload.error) {
          console.log("Ocorreu um erro ao capturar uma imagem");
        } else if (upload.didCancel) {
          console.log("O usuário cancelou a escolha da imagem");
        } else {
          const preview = {
            uri: `data:image/jpeg;base64,${upload.data}`
          };

          let prefix;
          let ext;

          if (upload.fileName) {
            [prefix, ext] = upload.fileName.split(".");
            ext = ext.toLocaleLowerCase() === "heic" ? "jpg" : ext;
          } else {
            prefix = new Date().getTime();
            ext = "jpg";
          }

          const image = {
            uri: upload.uri,
            type: upload.type,
            name: `${prefix}.${ext}`
          };

          this.setState({ preview, image });
        }
      }
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.selectButton}
          onPress={this.handleSelectImage}
        >
          <Text style={styles.selectButtonText}>Selecionar Imagem</Text>
        </TouchableOpacity>

        {this.state.preview && (
          <Image style={styles.preview} source={this.state.preview} />
        )}

        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.input}
          placeholder="Nome do autor"
          placeholderTextColor="#999"
          value={this.state.author}
          onChangeText={author => this.setState({ author })}
        />
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.input}
          placeholder="Local da foto"
          placeholderTextColor="#999"
          value={this.state.place}
          onChangeText={place => this.setState({ place })}
        />
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.input}
          placeholder="Descrição"
          placeholderTextColor="#999"
          value={this.state.description}
          onChangeText={description => this.setState({ description })}
        />
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.input}
          placeholder="Hashtags"
          placeholderTextColor="#999"
          value={this.state.hashtags}
          onChangeText={hashtags => this.setState({ hashtags })}
        />
        <TouchableOpacity style={styles.shareButton} onPress={() => {}}>
          <Text style={styles.shareButtonText}>Compartilhar</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 30
  },
  selectButton: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#ccc",
    borderStyle: "dashed",
    height: 42,
    justifyContent: "center",
    alignItems: "center"
  },
  selectButtonText: {
    fontSize: 16,
    color: "#666"
  },
  preview: {
    width: 100,
    height: 100,
    marginTop: 10,
    alignSelf: "center",
    borderRadius: 4
  },
  input: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 15,
    marginTop: 10,
    fontSize: 16
  },
  shareButton: {
    backgroundColor: "#7159c1",
    borderRadius: 4,
    height: 42,
    marginTop: 15,
    justifyContent: "center",
    alignItems: "center"
  },
  shareButtonText: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#fff"
  }
});
