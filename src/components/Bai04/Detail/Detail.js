import { View, Text, Button, Image, Pressable, TextInput } from "react-native";
import imgbook from "..//..//..//assets//book.png";
import styles from "./DetailStyle";
const Detail = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={imgbook} style={{ width: 104, height: 127 }} />
        <View style={styles.infor}>
          <Text style={styles.textTitle}>Nguyên hàm tích phân và ứng dụng</Text>
          <Text style={styles.textTitle}>Cung cấp bởi Tiki Trading</Text>
          <Text style={styles.textPrice}>141.800 đ</Text>
          <Text style={styles.textOldPrice}>141.800 đ</Text>

          <View style={styles.actions}>
            <View style={styles.actionLeft}>
              <Pressable style={styles.buttonAction}>
                <Text style={styles.textBtn}>+</Text>
              </Pressable>
              <Text>1</Text>
              <Pressable style={styles.buttonAction}>
                <Text style={styles.textBtn}>-</Text>
              </Pressable>
            </View>
            <Text style={styles.actionRight}>Mua sau</Text>
          </View>
        </View>
      </View>

      <View style={{ marginTop: 21, flexDirection: "row", gap: 17 }}>
        <Text style={{ fontSize: 12, color: "#011627", fontWeight: 700 }}>
          Mã giảm giá đã lưu
        </Text>

        <Text style={{ fontSize: 12, color: "#134FEC", fontWeight: 700 }}>
          Xem tại đây
        </Text>
      </View>

      <View style={{marginTop:35}}>
        <View style={styles.wpCodePrice}>
          <View style={styles.codeBox}>
            <View style={styles.yellowBox}></View>
            <TextInput style={styles.inputCode} placeholder="Mã giảm giá" />
          </View>
          <Pressable style={styles.btnActive}>
            <Text style={styles.textBtn}>Ap dụng</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Detail;
