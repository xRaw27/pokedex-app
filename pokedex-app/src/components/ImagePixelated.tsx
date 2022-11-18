import { WebView } from "react-native-webview";
import { StyleSheet, View } from "react-native";

const ImagePixelated = ({ url, onLoad }: { url: string, onLoad: () => void}) => {
  return (
    <View style={styles.container}>
      <WebView
        androidHardwareAccelerationDisabled={true}
        androidLayerType="software"
        onLoad={onLoad}
        originWhitelist={["*"]}
        source={{
          html: `<body style="background-color: #f6f8fC">
                  <img src=${url} style="position: absolute; bottom: 0; width: 960px; image-rendering: pixelated; background-color: #f6f8fC"/>
                </body>`,
        }}
        style={styles.webview}
      />
      <View style={styles.invisible}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 330,
  },
  webview: {
    backgroundColor: "#f6f8fC",
    width: 300,
  },
  invisible: {
    position: "absolute",
    width: 300,
    height: 330,
    opacity: 0,
    zIndex: 100,
  },
});

export default ImagePixelated;
3;
