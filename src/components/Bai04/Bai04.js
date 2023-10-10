import { View, Text, Button, TextInput, Pressable } from "react-native";
import Detail from "./Detail/Detail";
import styles from "./Bai04Style";
const Bai04 = () => {
  return (
    <View style={styles.container}>
      <Detail />
      <View
        style={{
          paddingTop: 15,
          paddingBottom: 22,
          paddingLeft: 13,
          flexDirection: "row",
          gap: 5,
          marginTop: 20,
          backgroundColor: "#fff",
          paddingRight: 40,
        }}
      >
        <Text
          style={{
            color: "#011627",
            fontSize: 12,
            fontWeight: 700,
          }}
        >
          Bạn có phiếu quà tặng Tiki/Got it/ Urbox?
        </Text>

        <TextInput
          style={{
            fontSize: 12,
            fontWeight: "700",
            color: "#134FEC",
            width: 70,
            outlineStyle: "none",
          }}
          placeholder="nhập tại đây ?"
        />
      </View>

      <View style={{ flex: 1, justifyContent: "space-between", marginTop: 20 }}>
        <View
          style={{
            paddingTop: 10,
            paddingBottom: 20,
            paddingLeft: 12,
            flexDirection: "row",
            justifyContent: "space-between",

            backgroundColor: "#fff",
            paddingRight: 32,
          }}
        >
          <Text
            style={{
              fontWeight: 700,
              fontSize: 18,
              color: "#011627",
            }}
          >
            Tạm tính
          </Text>

          <Text
            style={{
              fontWeight: 700,
              fontSize: 18,
              color: "#EE0D0D",
            }}
          >
            141.800 đ
          </Text>
        </View>

        <View
          style={{
            paddingTop: 12,
            paddingBottom: 12,
            paddingLeft: 12,
            paddingRight: 12,
            backgroundColor: "#fff",
          }}
        >
          <View style={{

            flexDirection: "row",
            justifyContent: "space-between",

          }}>
            <Text>Thành tiền</Text>
            <Text
              style={{
                fontWeight: 700,
                fontSize: 18,
                color: "#EE0D0D",
              }}
            >
              141.800 đ
            </Text>
          </View>
          <Pressable
            style={{
              width: "100%",
              backgroundColor: "#E53935",
              paddingBottom: 11,
              paddingTop: 11,
              marginTop:20
            }}
          >
            <Text
              style={{
                color: "#fff",
                fontSize: "20",
                fontWeight: 700,
                textAlign: "center",
              }}
            >
              TIẾN HÀNH ĐẶT HÀNG
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Bai04;
