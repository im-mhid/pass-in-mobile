import { colors } from "@/styles/colors";
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps, ActivityIndicator } from "react-native";

type Props = TouchableOpacityProps & {
  title: string;
  isLoading?: boolean;
}

export function Button({title, isLoading = false, ...rest} : Props){
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      disabled={isLoading}
      style={styles.TouchableOpacityStyle}
      {...rest}
    >
      {
        isLoading ? ( 
          <ActivityIndicator className="text-green-500"/>
        ) : (
          <Text className="text-green-500 text-base font-bold uppercase">
            {title}
          </Text>
        )
      }
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  TouchableOpacityStyle: {width: '100%', height: 56, backgroundColor: colors.orange[500], alignItems: 'center', justifyContent: 'center', borderRadius: 8}
})